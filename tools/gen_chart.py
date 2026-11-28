# -*- coding: utf-8 -*-
"""从 data/datasets.json 生成 assets/timeline.svg —— 低空索引条目累计数量曲线。

用法（仓库根目录）：python tools/gen_chart.py

口径
- 只统计「低空相关」条目（modality.la > 0），通用 / 上游基准不计。
- 蓝色实线：全部低空索引条目；青色虚线：其中 csi == 1（提供完整 MIMO 信道）的条目。
  csi == 0.5（实测信道测量）与 rf > 0（仅射频采集）均不计入 CSI 曲线。
- 源数据只有出版年、无月份，故按出版年分组累计；横轴前推一年作为 0 起点。
"""
import json, math, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if not os.path.isdir(os.path.join(ROOT, 'data')):          # 兼容 .workbuddy/tools/ 副本
    ROOT = os.path.dirname(ROOT)
DATA = os.path.join(ROOT, 'data', 'datasets.json')
OUT_ZH = os.path.join(ROOT, 'assets', 'timeline.svg')
OUT_EN = os.path.join(ROOT, 'assets', 'timeline-en.svg')

# 图表文案（双语）
STR = {
    'zh': {
        'title': '低空索引条目累计数量（{y0}\u2013{y1}）',
        'legend_all': '全部低空索引条目（{n}）',
        'legend_csi': '含完整 CSI（csi = 1，{n}）',
        'foot': '按出版年分组累计；数据仅到年粒度',
        'aria': '{y0} 至 {y1} 年低空索引条目累计数量：全部由 0 增至 {a} 个，其中含完整 CSI 的为 {c} 个',
        'desc': '蓝色实线为全部低空相关索引条目的累计数量，至 {y1} 年累计 {a} 个；青色虚线为其中提供完整 MIMO 信道 CSI 的条目，为 {c} 个。源数据仅有出版年，按出版年分组累计。',
    },
    'en': {
        'title': 'Cumulative low-altitude datasets ({y0}\u2013{y1})',
        'legend_all': 'All low-altitude datasets ({n})',
        'legend_csi': 'With full CSI (csi = 1, {n})',
        'foot': 'Cumulative counts settle at each year end; source data is year-granular only',
        'aria': 'Cumulative low-altitude datasets, {y0} to {y1}: the total grows from 0 to {a}, of which {c} provide full CSI',
        'desc': 'Solid blue line: cumulative count of all low-altitude datasets, reaching {a} by the end of {y1}. Dashed teal line: the subset providing full MIMO channel CSI, {c}. Source data carries publication year only, so points fall at year ends.',
    },
}

W, H = 860, 440
PAD_L, PAD_R, PAD_T, PAD_B = 58, 92, 78, 56
X0, X1 = PAD_L, W - PAD_R
Y0, Y1 = PAD_T, H - PAD_B

BLUE, TEAL = '#3F8ADB', '#17A07F'


def text_width(s, size=12):
    """粗估文本像素宽度：CJK / 全角按 size，其余按 0.55 size。"""
    return sum(size if ord(ch) > 0x2E7F else size * 0.55 for ch in s)


def load_series():
    with open(DATA, encoding='utf-8') as f:
        data = json.load(f)
    la = [x for x in data['datasets'] if x['modality'].get('la', 0) > 0]
    if not la:
        raise SystemExit('data/datasets.json 中没有低空条目')
    y_first = min(x['year'] for x in la)
    y_last = max(x['year'] for x in la)
    years = list(range(y_first - 1, y_last + 1))
    all_cum, csi_cum = [], []
    total = csi_total = 0
    for y in years:
        total += sum(1 for x in la if x['year'] == y)
        csi_total += sum(1 for x in la if x['year'] == y and x['modality'].get('csi') == 1)
        all_cum.append(total)
        csi_cum.append(csi_total)
    return years, all_cum, csi_cum


def build(lang='zh'):
    S = STR[lang]
    years, all_cum, csi_cum = load_series()
    n = len(years)
    y_top = max(10, int(math.ceil(max(all_cum) / 10.0) * 10))
    step_x = (X1 - X0) / (n - 1)

    def px(i):
        return X0 + i * step_x

    def py(v):
        return Y1 - v / y_top * (Y1 - Y0)

    def xy(i, v):
        return f'{px(i):.1f} {py(v):.1f}'

    line_all = 'M ' + ' L '.join(xy(i, v) for i, v in enumerate(all_cum))
    line_csi = 'M ' + ' L '.join(xy(i, v) for i, v in enumerate(csi_cum))
    area_all = (f'M {px(0):.1f} {Y1:.1f} L ' + ' L '.join(xy(i, v) for i, v in enumerate(all_cum))
                + f' L {px(n - 1):.1f} {Y1:.1f} Z')

    css = """
  text { font-family: system-ui, -apple-system, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC', sans-serif; }
  .bg { fill: #ffffff; }
  .ttl { fill: #1f2328; font-size: 15px; font-weight: 500; }
  .sub { fill: #57606a; font-size: 12px; }
  .tick { fill: #57606a; font-size: 11px; }
  .grid { stroke: rgba(31,35,40,0.09); stroke-width: 1; }
  .axis { stroke: rgba(31,35,40,0.25); stroke-width: 1; }
  .area { fill: rgba(63,138,219,0.11); }
  @media (prefers-color-scheme: dark) {
    .bg { fill: #0d1117; }
    .ttl { fill: #e6edf3; }
    .sub, .tick { fill: #8b949e; }
    .grid { stroke: rgba(230,237,243,0.13); }
    .axis { stroke: rgba(230,237,243,0.30); }
    .area { fill: rgba(88,166,255,0.15); }
  }
"""

    parts = []
    parts.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" '
                 f'role="img" aria-label="' + S['aria'].format(y0=years[0], y1=years[-1], a=all_cum[-1], c=csi_cum[-1]) + '">')
    parts.append('<title>' + S['title'].format(y0=years[0], y1=years[-1]) + '</title>')
    parts.append('<desc>' + S['desc'].format(y1=years[-1], a=all_cum[-1], c=csi_cum[-1]) + '</desc>')
    parts.append(f'<style>{css}</style>')
    parts.append(f'<rect class="bg" x="0" y="0" width="{W}" height="{H}" rx="10"/>')

    parts.append(f'<text class="ttl" x="{X0}" y="30">' + S['title'].format(y0=years[0], y1=years[-1]) + '</text>')

    legend_y = 54
    label1 = S['legend_all'].format(n=all_cum[-1])
    parts.append(f'<line x1="{X0}" y1="{legend_y}" x2="{X0 + 24}" y2="{legend_y}" stroke="{BLUE}" '
                 f'stroke-width="2.5" stroke-linecap="round"/>')
    parts.append(f'<text class="sub" x="{X0 + 32}" y="{legend_y + 4}">{label1}</text>')
    legend2_x = X0 + 32 + text_width(label1) + 30
    label2 = S['legend_csi'].format(n=csi_cum[-1])
    parts.append(f'<line x1="{legend2_x:.0f}" y1="{legend_y}" x2="{legend2_x + 24:.0f}" y2="{legend_y}" stroke="{TEAL}" '
                 f'stroke-width="2.5" stroke-dasharray="5 3" stroke-linecap="round"/>')
    parts.append(f'<text class="sub" x="{legend2_x + 32:.0f}" y="{legend_y + 4}">{label2}</text>')

    for t in range(0, y_top + 1, 10):
        parts.append(f'<line class="grid" x1="{X0}" y1="{py(t):.1f}" x2="{X1}" y2="{py(t):.1f}"/>')
        parts.append(f'<text class="tick" x="{X0 - 10}" y="{py(t) + 4:.1f}" text-anchor="end">{t}</text>')

    parts.append(f'<line class="axis" x1="{X0}" y1="{Y1}" x2="{X1}" y2="{Y1}"/>')
    for i, y in enumerate(years):
        parts.append(f'<text class="tick" x="{px(i):.1f}" y="{Y1 + 20}" text-anchor="middle">{y}</text>')

    parts.append(f'<path class="area" d="{area_all}"/>')
    parts.append(f'<path d="{line_all}" fill="none" stroke="{BLUE}" stroke-width="2.4" '
                 f'stroke-linejoin="round" stroke-linecap="round"/>')
    parts.append(f'<path d="{line_csi}" fill="none" stroke="{TEAL}" stroke-width="2.4" stroke-dasharray="5 3" '
                 f'stroke-linejoin="round" stroke-linecap="round"/>')

    for i, v in enumerate(all_cum):
        parts.append(f'<circle cx="{px(i):.1f}" cy="{py(v):.1f}" r="3" fill="{BLUE}"/>')
    for i, v in enumerate(csi_cum):
        parts.append(f'<circle cx="{px(i):.1f}" cy="{py(v):.1f}" r="3" fill="{TEAL}"/>')

    parts.append(f'<text class="tick" x="{X1 + 10:.1f}" y="{py(all_cum[-1]) + 4:.1f}" '
                 f'fill="{BLUE}" font-weight="500" font-size="12">{all_cum[-1]}</text>')
    parts.append(f'<text class="tick" x="{X1 + 10:.1f}" y="{py(csi_cum[-1]) + 4:.1f}" '
                 f'fill="{TEAL}" font-weight="500" font-size="12">{csi_cum[-1]}</text>')

    parts.append(f'<text class="tick" x="{X0}" y="{H - 16}">' + S['foot'] + '</text>')
    parts.append('</svg>')

    out = OUT_EN if lang == 'en' else OUT_ZH
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, 'w', encoding='utf-8') as f:
        f.write('\n'.join(parts) + '\n')
    print(f'wrote {os.path.relpath(out, ROOT)}  years={years[0]}-{years[-1]}  all={all_cum[-1]}  csi={csi_cum[-1]}')


if __name__ == '__main__':
    build('zh')
    build('en')
