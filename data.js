// Data extracted from Koji analysis sessions (8 พ.ค. 2026)
// All numbers verified from notebooks/01-21*.py + EXTERNAL_CONTEXT.md

window.KOJI_DATA = {
  // ═══════════════════════════════════════════════
  // Top-line stats
  // ═══════════════════════════════════════════════
  topline: {
    transactions: 196775,
    days_covered: 376,
    months_covered: 13,
    total_sales_thb: 17124353,    // 17.1M
    skus_in_data: 85,
    skus_active_pos: 93,
    skus_master: 244,
    waste_value_8mo: 545728,       // May-Dec 2025
    waste_pct: 6.48,
    sku_concentration_top1: 27.2,  // Shio Pan Signature % of waste
    branches_in_data: 4,
  },

  // ═══════════════════════════════════════════════
  // Files inventory (from Koji 8 พ.ค.)
  // ═══════════════════════════════════════════════
  files: [
    { name: 'sales_gaysorn',   label: 'POS Foodstory',      records: 196775,  date_range: 'Jan 2025 – Jan 2026', status: 'ready' },
    { name: 'sales_grab',      label: 'Grab Delivery',       records: 4816,    date_range: 'Apr 2025 – Jan 2026', status: 'ready' },
    { name: 'traffic',         label: 'Traffic Camera',     records: 229,     date_range: 'Jun 2025 – Jan 2026', status: 'ready' },
    { name: 'waste_manual_v3', label: 'Waste Log (manual)',  records: 2639,    date_range: 'May – Dec 2025',     status: 'ready' },
    { name: 'waste_odoo',      label: 'Waste Log (Odoo)',    records: 1725,    date_range: 'May 2025 – Feb 2026', status: 'partial' },
    { name: 'replenishment',   label: 'Stock Moves (Replen)',records: 4372,    date_range: 'Aug 2025 – Apr 2026', status: 'partial' },
    { name: 'sku_master',      label: 'SKU Master',          records: 244,     date_range: 'snapshot',          status: 'partial' },
    { name: 'discontinued',    label: 'Discontinued SKU',    records: 148728,  date_range: 'Jan 2025 – Apr 2026', status: 'ready' },
    { name: 'ds_handoff',      label: 'DS Engineer Handoff', records: 0,       date_range: 'Apr 2026',          status: 'ref' },
  ],

  // ═══════════════════════════════════════════════
  // Monthly sales (Gaysorn main, all SKUs)
  // ═══════════════════════════════════════════════
  monthly_sales: [
    { ym: '2025-01', net_sales: 369071,    units: 6883,  tx: 4282 },
    { ym: '2025-02', net_sales: 1021953,   units: 19647, tx: 10961 },
    { ym: '2025-03', net_sales: 1487781,   units: 29342, tx: 13477 },
    { ym: '2025-04', net_sales: 1183053,   units: 22848, tx: 12156 },
    { ym: '2025-05', net_sales: 1177288,   units: 23125, tx: 12404 },
    { ym: '2025-06', net_sales: 1234294,   units: 25530, tx: 12682 },
    { ym: '2025-07', net_sales: 1274808,   units: 25627, tx: 16663 },
    { ym: '2025-08', net_sales: 1318942,   units: 27501, tx: 20156 },
    { ym: '2025-09', net_sales: 1046019,   units: 21760, tx: 21405 },
    { ym: '2025-10', net_sales: 816496,    units: 16721, tx: 18660 },
    { ym: '2025-11', net_sales: 835139,    units: 16837, tx: 18345 },
    { ym: '2025-12', net_sales: 722342,    units: 14082, tx: 21809 },
    { ym: '2026-01', net_sales: 670143,    units: 13021, tx: 13775 },
  ],

  // Monthly waste (Gaysorn, May-Dec 2025)
  monthly_waste: [
    { ym: '2025-05', units: 459,  value: 24099,  pct: 2.05  },
    { ym: '2025-06', units: 1331, value: 76363,  pct: 6.19  },
    { ym: '2025-07', units: 1476, value: 73712,  pct: 5.78  },
    { ym: '2025-08', units: 1153, value: 64431,  pct: 4.89  },
    { ym: '2025-09', units: 1965, value: 56584,  pct: 5.41  },
    { ym: '2025-10', units: 1313, value: 77212,  pct: 9.46  },
    { ym: '2025-11', units: 1545, value: 84512,  pct: 10.12 },
    { ym: '2025-12', units: 1667, value: 88815,  pct: 12.30 },
  ],

  // ═══════════════════════════════════════════════
  // Top SKUs by volume (full 13 months)
  // ═══════════════════════════════════════════════
  top_skus: [
    { rank: 1,  ref: 'kj117', name: 'Shio Pan - Signature',        units: 150694, sales: 5858048, system: 'in_store',       price: 39, cost: 4.72  },
    { rank: 2,  ref: 'kj159', name: 'Shio Pan - Red Bean & Butter',units: 11600,  sales: 668955,  system: 'in_store',       price: 58, cost: 12.02 },
    { rank: 3,  ref: 'kj118', name: 'Shio Pan - Brulee',           units: 9752,   sales: 563714,  system: 'in_store',       price: 58, cost: 12.07 },
    { rank: 4,  ref: 'kj136', name: 'Pudding - Custard Caramel',   units: 5356,   sales: 293128,  system: 'central_kitchen',price: 55, cost: 16.48 },
    { rank: 5,  ref: 'kj091', name: 'Grilled Honey Butter',        units: 5055,   sales: 196711,  system: 'central_kitchen',price: 39, cost: 4.84  },
    { rank: 6,  ref: 'kj151', name: 'Shio Pan - Bacon Champignon', units: 4852,   sales: 327872,  system: 'in_store',       price: 68, cost: 7.01  },
    { rank: 7,  ref: 'kj153', name: 'Table Roll - Cranberry & Choco', units: 4435, sales: 331290, system: 'central_kitchen',price: 75, cost: 11.08 },
    { rank: 8,  ref: 'kj131', name: 'Red Bean Bun',                units: 4062,   sales: 182086,  system: 'central_kitchen',price: 45, cost: 4.48  },
    { rank: 9,  ref: 'kj110', name: 'Butter Croissant',            units: 3939,   sales: 254592,  system: 'central_kitchen',price: 65, cost: 14.05 },
    { rank: 10, ref: 'kj152', name: 'Table Roll - Hokkaido',       units: 3812,   sales: 227892,  system: 'central_kitchen',price: 60, cost: 8.16  },
  ],

  // ═══════════════════════════════════════════════
  // Macro shock timeline — verified 2026-05-09 (Bangkok Post, Reuters,
  // Bloomberg, Al Jazeera, UTCC, NESDC, AP, TAT-news, Wikipedia)
  // ═══════════════════════════════════════════════
  shocks: [
    { date: '2025-Q2', text: '<strong>% Arabica เปิด Central Chidlom</strong> (พ.ค.-มิ.ย. 2025, ห่าง Gaysorn 5 นาทีเดิน) — premium Japanese F&B traffic ย้าย corridor (กาแฟ ≠ bakery direct, แต่ดึง demographic เดียวกัน)', kind: 'neutral' },
    { date: '2025-07', text: '<strong>ปะทะชายแดนไทย-กัมพูชา</strong> 24 ก.ค. → tourism revenue ทั้งประเทศ -3 พันล้าน ฿/เดือน (TAT). KKP ระบุ Bangkok impact "minimal" — กระทบหลักผ่าน Chinese sentiment',                kind: 'warning' },
    { date: '2025-08', text: '<strong>Trump 19% reciprocal tariff</strong> มีผล 1 ส.ค. → UTCC คาด Thai export -275 พันล้าน ฿ ปี 2026 = -1.48% GDP (กระทบ corporate spending + white-collar income)',                  kind: 'warning' },
    { date: '2025-08', text: '<strong>CCI 50.1 — 32-month low</strong> (UTCC, ลด 7 เดือนติด, ต่ำสุดตั้งแต่ ธ.ค. 2022) → consumer ทั้งประเทศชะลอ discretionary spending',                                                  kind: 'warning' },
    { date: '2025-08', text: '<strong>นายกแพทองธารถูกถอด</strong> 29 ส.ค. (ศาล รธน. 9-0 ฐาน violated ethical standards คลิป "ลุงฮุน")',                                                                                  kind: 'warning' },
    { date: '2025-09', text: '<strong>อนุทินขึ้นเป็น PM</strong> 5 ก.ย. (ภูมิใจไทย, 311 vs 152 เสียง) — ตั้ง minority government, conditional support พรรคประชาชน',                                                       kind: 'neutral' },
    { date: '2025-09', text: '<strong>บาทแข็ง 9.4% YTD</strong> (Sep-Dec, 34.23 → 31.06 USD/THB) → Bloomberg: "tourism takes hit" — Thai trip แพงกว่า Japan/Vietnam',                                                  kind: 'warning' },
    { date: '2025-09', text: '<strong>หลุมยุบ ถ.สามเสน + ฝนหนัก กทม. 24-26 ก.ย.</strong> หลุม 30×50m (เขตดุสิต, ห่าง Gaysorn 5-6 km) → city-wide sentiment + กล้อง Koji offline 6 วัน <em>(internal CCTV log)</em>',  kind: 'warning' },
    { date: '2025-10', text: '<strong>พายุ Matmo</strong> น้ำท่วม Ploenchit / Central Chidlom 4-7 ต.ค. (ห่าง Gaysorn 500m) — direct foot traffic hit',                                                                kind: 'warning' },
    { date: '2025-10', text: '<strong>สมเด็จพระบรมราชชนนีพันปีหลวงสวรรคต</strong> 24 ต.ค. → แต่งดำสาธารณะ <strong>90 วัน</strong> (25 ต.ค. – 22 ม.ค. 2026 — ครอบ peak season + Christmas + New Year + ตรุษจีน partial). ธงครึ่งเสา 30 วัน · ข้าราชการ 1 ปี', kind: 'warning' },
    { date: '2025-11', text: '<strong>GDP Q3 2025: -0.6% QoQ</strong> (NESDC) — first contraction in 3 years. Private consumption +0.5% (ต่ำสุด 7 ไตรมาส) → official confirmation ของ wallet-tightening',              kind: 'warning' },
    { date: '2025-12', text: '<strong>Tourism arrivals 2025: 32.97M = -7% YoY</strong>. Chinese tourists -33% (4.47M vs 6.7M). Malaysia แซง China เป็น top source (Bloomberg, TAT)',                                    kind: 'warning' },
  ],

  // ═══════════════════════════════════════════════
  // UV ↔ tx conversion — verified from 224 days
  // (notebook: notebooks/uv_conversion_analysis.py)
  // ═══════════════════════════════════════════════
  // ═══════════════════════════════════════════════
  // Flow diagram metrics (Discovery #5) — Oct 2025 – Jan 2026
  // SCOPE FIX 2026-05-09: filter product_category='FG' only (เคยรวม Semi-FG/RM/FG_CC/UNCLASSIFIED ผิด → inflated 2x)
  // c_* = central FG SKUs (52 ตัว, ส่งจาก central kitchen → Amarin)
  // i_* = in-store SKUs (sales ที่เป็น SKU ที่ central ไม่ได้ส่ง → ผลิตในร้าน, ไม่มี production log)
  // Mass balance (central): replen = c_gay + c_booth + c_grab + c_waste + c_missing  (negative c_missing = sales > replen+waste)
  // ═══════════════════════════════════════════════
  flow_metrics: {
    // Jan dropped — waste log ยังไม่ key เข้าระบบ ทำให้ตัวเลข waste เพี้ยน
    'all3':    { label: 'รวม Oct-Dec', central_replen: 19531,
                 c_gay: 13004, c_gay_bills: 7744, c_booth: 7497, c_booth_bills: 5697, c_grab: 1271, c_grab_tx: 678, c_waste: 1781,
                 i_gay: 34636, i_gay_bills: 14236, i_booth: 39326, i_booth_bills: 18464, i_grab: 8058, i_grab_tx: 812, i_waste: 2744 },
    '2025-10': { label: 'Oct 2025',    central_replen: 5782,
                 c_gay: 3411,  c_gay_bills: 2201,  c_booth: 1413, c_booth_bills: 1140, c_grab: 466,  c_grab_tx: 231, c_waste: 462,
                 i_gay: 13310, i_gay_bills: 5348,  i_booth: 13894, i_booth_bills: 6204, i_grab: 3577, i_grab_tx: 297, i_waste: 851 },
    '2025-11': { label: 'Nov 2025',    central_replen: 6237,
                 c_gay: 5029,  c_gay_bills: 2962,  c_booth: 2057, c_booth_bills: 1575, c_grab: 408,  c_grab_tx: 216, c_waste: 523,
                 i_gay: 11808, i_gay_bills: 4992,  i_booth: 9648,  i_booth_bills: 4572, i_grab: 2654, i_grab_tx: 268, i_waste: 1022 },
    '2025-12': { label: 'Dec 2025',    central_replen: 7512,
                 c_gay: 4564,  c_gay_bills: 2581,  c_booth: 4027, c_booth_bills: 2982, c_grab: 397,  c_grab_tx: 231, c_waste: 796,
                 i_gay: 9518,  i_gay_bills: 3896,  i_booth: 15784, i_booth_bills: 7688, i_grab: 1827, i_grab_tx: 247, i_waste: 871 },
  },

  // ═══════════════════════════════════════════════
  // Demand vs Supply mismatch — Sep 2025–Jan 2026
  // SCOPE FIX 2026-05-09: replen = FG-only (central → Amarin)
  // units_sold = ALL SKUs at Gay POS (central + in-store)
  // Sep partial (file ramping up since Aug 22)
  // ═══════════════════════════════════════════════
  demand_supply: [
    { ym: '2025-09', uv: 263, units_sold: 21760, replen: 2614 },
    { ym: '2025-10', uv: 266, units_sold: 16721, replen: 5782 },
    { ym: '2025-11', uv: 277, units_sold: 16837, replen: 6237 },
    { ym: '2025-12', uv: 242, units_sold: 14082, replen: 7512 },
    { ym: '2026-01', uv: 254, units_sold: 13021, replen: 6260 },
  ],

  uv_conversion: [
    { ym: '2025-06', uv: 379, tx: 297, conv: 0.776, basket: 144, days: 14 },
    { ym: '2025-07', uv: 459, tx: 276, conv: 0.616, basket: 149, days: 31 },
    { ym: '2025-08', uv: 400, tx: 286, conv: 0.703, basket: 149, days: 31 },
    { ym: '2025-09', uv: 317, tx: 259, conv: 0.821, basket: 138, days: 25 },
    { ym: '2025-10', uv: 266, tx: 200, conv: 0.757, basket: 132, days: 31 },
    { ym: '2025-11', uv: 278, tx: 206, conv: 0.734, basket: 137, days: 30 },
    { ym: '2025-12', uv: 242, tx: 162, conv: 0.665, basket: 147, days: 31 },
    { ym: '2026-01', uv: 254, tx: 164, conv: 0.646, basket: 133, days: 31 },
  ],

  // Headline elasticity stats (224 clean days, 17 มิ.ย. 25 – 31 ม.ค. 26)
  uv_fit: {
    n_days: 224,
    pearson_r: 0.7717,
    r_squared: 0.5955,
    slope_tx_per_uv: 0.497,
    intercept: 66.4,
    thb_per_extra_uv: 70.1,
    median_conv: 0.703,
    iqr_conv: [0.632, 0.781],
    entry_rate_r: 0.0966,
    passerby_to_tx_median: 0.038,
  },

  // Scatter sample for chart (120 points, random_state=42)
  uv_scatter: [
    {uv:388,tx:302},{uv:307,tx:266},{uv:305,tx:211},{uv:257,tx:210},{uv:279,tx:203},
    {uv:290,tx:177},{uv:338,tx:233},{uv:322,tx:221},{uv:284,tx:189},{uv:175,tx:144},
    {uv:379,tx:316},{uv:346,tx:328},{uv:259,tx:183},{uv:444,tx:285},{uv:495,tx:280},
    {uv:453,tx:255},{uv:282,tx:160},{uv:265,tx:213},{uv:222,tx:155},{uv:294,tx:272},
    {uv:333,tx:276},{uv:385,tx:246},{uv:335,tx:293},{uv:323,tx:240},{uv:261,tx:166},
    {uv:286,tx:230},{uv:247,tx:115},{uv:357,tx:255},{uv:477,tx:294},{uv:329,tx:249},
    {uv:294,tx:198},{uv:329,tx:302},{uv:412,tx:296},{uv:202,tx:149},{uv:298,tx:218},
    {uv:241,tx:203},{uv:310,tx:223},{uv:236,tx:156},{uv:325,tx:221},{uv:272,tx:169},
    {uv:244,tx:142},{uv:262,tx:185},{uv:238,tx:154},{uv:259,tx:228},{uv:259,tx:195},
    {uv:205,tx:185},{uv:359,tx:308},{uv:413,tx:289},{uv:296,tx:223},{uv:255,tx:160},
    {uv:353,tx:272},{uv:330,tx:200},{uv:340,tx:281},{uv:228,tx:167},{uv:504,tx:251},
    {uv:591,tx:288},{uv:292,tx:247},{uv:198,tx:119},{uv:273,tx:132},{uv:444,tx:269},
    {uv:409,tx:302},{uv:444,tx:253},{uv:219,tx:142},{uv:275,tx:189},{uv:320,tx:248},
    {uv:196,tx:151},{uv:356,tx:287},{uv:410,tx:267},{uv:241,tx:227},{uv:211,tx:219},
    {uv:303,tx:241},{uv:433,tx:324},{uv:256,tx:201},{uv:205,tx:115},{uv:281,tx:200},
    {uv:430,tx:300},{uv:290,tx:239},{uv:595,tx:331},{uv:490,tx:281},{uv:415,tx:272},
    {uv:290,tx:191},{uv:337,tx:230},{uv:271,tx:225},{uv:471,tx:352},{uv:192,tx:136},
    {uv:242,tx:151},{uv:338,tx:287},{uv:456,tx:241},{uv:271,tx:265},{uv:334,tx:256},
    {uv:235,tx:187},{uv:398,tx:270},{uv:277,tx:194},{uv:193,tx:115},{uv:228,tx:178},
    {uv:313,tx:301},{uv:491,tx:351},{uv:314,tx:262},{uv:441,tx:281},{uv:261,tx:155},
    {uv:294,tx:246},{uv:225,tx:143},{uv:393,tx:281},{uv:319,tx:271},{uv:269,tx:226},
    {uv:299,tx:191},{uv:279,tx:268},{uv:611,tx:331},{uv:320,tx:192},{uv:430,tx:267},
    {uv:557,tx:254},{uv:344,tx:213},{uv:249,tx:160},{uv:479,tx:243},{uv:376,tx:264},
    {uv:243,tx:175},{uv:260,tx:190},{uv:327,tx:340},{uv:460,tx:250},{uv:284,tx:224},
  ],

  // ═══════════════════════════════════════════════
  // 2 Production systems split
  // ═══════════════════════════════════════════════
  systems: {
    in_store: {
      label: 'In-store baking',
      sku_count: 16,
      examples: ['Shio Pan Signature', 'Brulee', 'Red Bean & Butter', 'Bacon Champignon', 'Tuna', 'Egg Salad', 'Tonkatsu', 'Red Velvet', 'Nutella'],
      decision_maker: 'Pastry chef (real-time, hourly)',
      replen_records: 0,
      ai_verdict: 'AI loses 0/16 SKUs',
      ai_value: 'Second-opinion alerts on tail days only',
      counterfactual_diff: -489000,  // annualized
    },
    central_kitchen: {
      label: 'Central kitchen delivery',
      sku_count: 13,
      examples: ['Grilled Honey Butter', 'Croissant', 'Cheese', 'Pudding', 'Table Rolls', 'Pain au Chocolate', 'Sourdough', 'Muffin', 'Danish'],
      decision_maker: 'Central kitchen planner (daily, 2 deliveries 09:30+14:00)',
      replen_records: 1428,
      ai_verdict: 'AI wins 13/13 SKUs',
      ai_value: 'Daily allocation per branch — main angle',
      counterfactual_diff: 686869,   // annualized (3-day shelf, profit basis)
    },
  },

  // ═══════════════════════════════════════════════
  // kj091 smoking gun — verified 5-month with booth attribution
  // (Sep 2025 – Jan 2026, source: notebook + cross-check 2026-05-09)
  // ═══════════════════════════════════════════════
  kj091_monthly: [
    { ym: '2025-09', replen: 350,  sales_gay: 400, sales_booth: 316, sales_grab: 109, waste: 20, unaccounted: -495, note: 'replen file ramping up · Sep partial' },
    { ym: '2025-10', replen: 1754, sales_gay: 233, sales_booth: 500, sales_grab: 66,  waste: 29, unaccounted: 926,  note: 'mourning + sales drop' },
    { ym: '2025-11', replen: 1016, sales_gay: 275, sales_booth: 375, sales_grab: 49,  waste: 41, unaccounted: 276,  note: 'central not yet adjusted' },
    { ym: '2025-12', replen: 911,  sales_gay: 247, sales_booth: 550, sales_grab: 34,  waste: 50, unaccounted: 30,   note: 'booth absorbed most over-push · balance ใกล้ปิด' },
    { ym: '2026-01', replen: 758,  sales_gay: 214, sales_booth: 287, sales_grab: 44,  waste: 0,  unaccounted: 213,  note: 'waste log empty for Jan (yet)' },
  ],

  // 4-month totals for kj091 (Oct-Jan only — Sep replen file ramping up)
  kj091_summary: {
    months: 'Oct 2025 – Jan 2026 (4-month, replen file ครบแล้ว)',
    replen: 4439,
    sales_gay: 969,
    sales_booth: 1712,
    sales_grab: 193,
    sales_total: 2874,
    waste: 120,
    unaccounted: 1445,
    pct_to_gay: 21.8,
    pct_to_booth: 38.6,
    pct_to_grab: 4.3,
    pct_unaccounted: 32.6,
    pct_waste_logged: 2.7,
    pct_sold: 64.7,
    ratio_replen_to_total_sales: 1.55,  // 4439 / 2874 = 1.55x oversupply
  },

  // ═══════════════════════════════════════════════
  // Over-push / ส่งน้อย — full attribution (Gay+booth)
  // 4-month Oct 2025 – Jan 2026 (Sep dropped — replen file ramping up)
  // ═══════════════════════════════════════════════
  // Verified Oct-Dec 2025 (3-month, FG-only central → Amarin, all channels Gay+Booth+Grab)
  // 22 SKUs over (ratio>=1) | 14 SKUs under (<1) | 3 SKUs zero-sales excluded
  overpush: [
    { ref: 'kj194', name: 'Miso Butter Palmiers',          replen: 293,  sales: 97,   sales_gay: 56,  sales_booth: 41,   sales_grab: 0,   ratio: 3.02 },
    { ref: 'kj192', name: 'Maple Butter Cookies',          replen: 302,  sales: 142,  sales_gay: 73,  sales_booth: 69,   sales_grab: 0,   ratio: 2.13 },
    { ref: 'kj200', name: 'Crispy Brownie 120g',           replen: 139,  sales: 72,   sales_gay: 36,  sales_booth: 36,   sales_grab: 0,   ratio: 1.93 },
    { ref: 'kj193', name: 'Cacao Nibs & Cranberry Cookie', replen: 265,  sales: 167,  sales_gay: 92,  sales_booth: 75,   sales_grab: 0,   ratio: 1.59 },
    { ref: 'kj091', name: 'Grilled Honey Butter',          replen: 3681, sales: 2329, sales_gay: 755, sales_booth: 1425, sales_grab: 149, ratio: 1.58 },
    { ref: 'kj101', name: 'Danish - Peach',                replen: 263,  sales: 181,  sales_gay: 167, sales_booth: 0,    sales_grab: 14,  ratio: 1.45 },
    { ref: 'kj187', name: 'Focaccia 7.5x7.5',              replen: 607,  sales: 432,  sales_gay: 394, sales_booth: 38,   sales_grab: 0,   ratio: 1.41 },
    { ref: 'kj090', name: 'Grilled Cheese',                replen: 920,  sales: 670,  sales_gay: 520, sales_booth: 4,    sales_grab: 146, ratio: 1.37 },
    { ref: 'kj137', name: 'Muffin - Blueberry',            replen: 617,  sales: 452,  sales_gay: 252, sales_booth: 168,  sales_grab: 32,  ratio: 1.37 },
    { ref: 'kj154', name: 'Pudding - Strawberry',          replen: 253,  sales: 192,  sales_gay: 172, sales_booth: 0,    sales_grab: 20,  ratio: 1.32 },
    { ref: 'kj110', name: 'Butter Croissant',              replen: 825,  sales: 641,  sales_gay: 478, sales_booth: 2,    sales_grab: 161, ratio: 1.29 },
    { ref: 'kj144', name: 'Japanese Custard Bun',          replen: 957,  sales: 742,  sales_gay: 382, sales_booth: 342,  sales_grab: 18,  ratio: 1.29 },
    { ref: 'kj195', name: 'Shio Pan - Vanilla Tart',       replen: 743,  sales: 610,  sales_gay: 147, sales_booth: 463,  sales_grab: 0,   ratio: 1.22 },
    { ref: 'kj186', name: 'Set Mentaiko Drip',             replen: 378,  sales: 313,  sales_gay: 295, sales_booth: 1,    sales_grab: 17,  ratio: 1.21 },
    { ref: 'kj156', name: 'Pudding - Blueberry',           replen: 209,  sales: 181,  sales_gay: 165, sales_booth: 0,    sales_grab: 16,  ratio: 1.15 },
    { ref: 'kj181', name: 'Chocolate Muffin',              replen: 474,  sales: 417,  sales_gay: 239, sales_booth: 178,  sales_grab: 0,   ratio: 1.14 },
    { ref: 'kj099', name: 'Danish - Apple',                replen: 384,  sales: 354,  sales_gay: 291, sales_booth: 0,    sales_grab: 63,  ratio: 1.08 },
    { ref: 'kj105', name: 'Pain au Chocolate',             replen: 785,  sales: 740,  sales_gay: 540, sales_booth: 69,   sales_grab: 131, ratio: 1.06 },
    { ref: 'kj136', name: 'Pudding - Custard Caramel',     replen: 1024, sales: 985,  sales_gay: 872, sales_booth: 60,   sales_grab: 53,  ratio: 1.04 },
    { ref: 'kj111', name: 'Sausage & Bonito Croissant',    replen: 249,  sales: 241,  sales_gay: 215, sales_booth: 0,    sales_grab: 26,  ratio: 1.03 },
    { ref: 'kj139', name: 'Sourdough - Fruit Campagne',    replen: 638,  sales: 633,  sales_gay: 433, sales_booth: 200,  sales_grab: 0,   ratio: 1.01 },
    { ref: 'kj095', name: 'Yudane - Whole Wheat',          replen: 2,    sales: 2,    sales_gay: 1,   sales_booth: 1,    sales_grab: 0,   ratio: 1.00 },
    { ref: 'kj173', name: 'Dried Fruit Cream Cheese',      replen: 447,  sales: 458,  sales_gay: 458, sales_booth: 0,    sales_grab: 0,   ratio: 0.98, under: true },
    { ref: 'kj153', name: 'Table Roll - Cranberry',        replen: 1096, sales: 1483, sales_gay: 658, sales_booth: 745,  sales_grab: 80,  ratio: 0.74, under: true },
    { ref: 'kj152', name: 'Table Roll - Hokkaido',         replen: 981,  sales: 1401, sales_gay: 584, sales_booth: 751,  sales_grab: 66,  ratio: 0.70, under: true },
    { ref: 'kj092', name: 'Sourdough - Compagne',          replen: 1493, sales: 2146, sales_gay: 923, sales_booth: 1223, sales_grab: 0,   ratio: 0.70, under: true },
    { ref: 'kj191', name: 'English Muffin (3 ชิ้น/แพ็ค)',   replen: 264,  sales: 402,  sales_gay: 170, sales_booth: 232,  sales_grab: 0,   ratio: 0.66, under: true },
    { ref: 'kj131', name: 'Red Bean Bun',                  replen: 450,  sales: 1166, sales_gay: 818, sales_booth: 273,  sales_grab: 75,  ratio: 0.39, under: true },
    { ref: 'kj184', name: 'Butter Scone',                  replen: 126,  sales: 457,  sales_gay: 424, sales_booth: 0,    sales_grab: 33,  ratio: 0.28, under: true },
    { ref: 'kj096', name: 'Almond Croissant',              replen: 83,   sales: 500,  sales_gay: 434, sales_booth: 0,    sales_grab: 66,  ratio: 0.17, under: true },
    { ref: 'kj126', name: 'Sweet Potato Sesame Bun',       replen: 60,   sales: 562,  sales_gay: 527, sales_booth: 1,    sales_grab: 34,  ratio: 0.11, under: true },
    { ref: 'kj182', name: 'Mini Melon Cream Bun',          replen: 186,  sales: 1771, sales_gay: 815, sales_booth: 894,  sales_grab: 62,  ratio: 0.11, under: true },
    { ref: 'kj164', name: 'Focaccia 12x12',                replen: 12,   sales: 321,  sales_gay: 321, sales_booth: 0,    sales_grab: 0,   ratio: 0.04, under: true },
    { ref: 'kj199', name: 'Shio Pan - Chocolate Tart',     replen: 0,    sales: 303,  sales_gay: 97,  sales_booth: 206,  sales_grab: 0,   ratio: 0.00, under: true },
    { ref: 'kj185', name: 'Spring Onion Scone',            replen: 0,    sales: 208,  sales_gay: 199, sales_booth: 0,    sales_grab: 9,   ratio: 0.00, under: true },
    { ref: 'kj166', name: 'kj166 (no name in master)',     replen: 0,    sales: 1,    sales_gay: 1,   sales_booth: 0,    sales_grab: 0,   ratio: 0.00, under: true },
  ],

  // ═══════════════════════════════════════════════
  // Customer profile / intraday clock
  // ═══════════════════════════════════════════════
  customer: {
    // Raw POS label = "K Plus" 80%, but actual rail = PromptPay QR
    // (K Plus is dominant TH banking app; cashier defaults to "K Plus" for any QR scan)
    payment_qr: 80,
    payment_cash: 20,
    avg_basket_thb: 150,
    avg_items_per_basket: 3,
    median_basket_thb: 117,
    p90_basket_thb: 275,
    dwell_min_low: 3,
    dwell_min_high: 15,
  },

  // Hourly tx % (full mix)
  hourly: [
    { hr: 8,  pct: 2.1 },
    { hr: 9,  pct: 5.5 },
    { hr: 10, pct: 7.6 },
    { hr: 11, pct: 12.9 },
    { hr: 12, pct: 19.4 },
    { hr: 13, pct: 16.6 },
    { hr: 14, pct: 9.3 },
    { hr: 15, pct: 9.6 },
    { hr: 16, pct: 8.2 },
    { hr: 17, pct: 6.4 },
    { hr: 18, pct: 2.3 },
  ],

  // Per-SKU intraday clock — morning/lunch/afternoon split
  sku_clock: [
    { sku: 'kj091 Grilled Honey Butter',   morning: 42, lunch: 36, afternoon: 22, peak: 'morning'   },
    { sku: 'kj110 Butter Croissant',       morning: 38, lunch: 36, afternoon: 26, peak: 'morning'   },
    { sku: 'kj131 Red Bean Bun',           morning: 36, lunch: 35, afternoon: 29, peak: 'morning'   },
    { sku: 'kj151 Bacon Champignon',       morning: 28, lunch: 40, afternoon: 32, peak: 'lunch'     },
    { sku: 'kj136 Pudding Caramel',        morning: 25, lunch: 43, afternoon: 32, peak: 'lunch'     },
    { sku: 'kj117 Shio Pan Signature',     morning: 25, lunch: 30, afternoon: 45, peak: 'afternoon' },
    { sku: 'kj118 Shio Pan Brulee',        morning: 12, lunch: 38, afternoon: 50, peak: 'afternoon' },
    { sku: 'kj159 Red Bean & Butter',      morning: 17, lunch: 36, afternoon: 47, peak: 'afternoon' },
  ],

  // ═══════════════════════════════════════════════
  // Forecasting models — counterfactual results
  // ═══════════════════════════════════════════════
  models: [
    {
      name: 'V1 — XGBoost full features',
      mape_hero: 46.1,
      verdict: 'Trend-shift fail',
      note: 'Q3-Q4 demand drop ทำให้ ML จำ pattern ขาขึ้นมาทำนายขาลง',
    },
    {
      name: 'V2 — Rolling-7 baseline',
      mape_hero: 15.4,
      verdict: 'Beat V1',
      note: 'Simple rolling mean ชนะ XGBoost เพราะ adapt level ได้อัตโนมัติ',
    },
    {
      name: 'V3 — Hybrid (rolling + LGB residual)',
      mape_hero: 14.6,
      verdict: 'Best on metric',
      note: '80+ features tested, Lasso เลือก 6 ตัว: lag_1, roll7, dow, holiday_eve, lag_14, lag_7',
    },
    {
      name: 'V4 — + macro features (mourning, KPOP, mall)',
      mape_hero: 14.9,
      verdict: 'Marginal improvement',
      note: 'Macro events rare → ML จับ pattern ไม่ได้พอ',
    },
  ],

  // Counterfactual — RE-DERIVED 2026-05-09 at proper FG-only scope, all-channel sales (Gay+Booth+Grab)
  // Method: daily simulation with FIFO inventory + shelf life carryover, AI = rolling-28-day × 1.10 buffer
  // Window: Oct-Dec 2025 (3 months), annualized × 4
  // SCOPE: 22 over-supply SKUs only (defendable). Under-supply (14 SKUs) excluded — data ไม่ verify
  counterfactual: {
    in_store: {
      n_skus: 16,
      actual_profit_5mo: 2242049,
      ai_profit_5mo: 2038329,
      diff_5mo: -203720,
      diff_annual: -489000,
      ai_wins: 0,
      total: 16,
      window: 'Aug-Jan 2025 (5 months)',
    },
    central_kitchen: {
      n_skus: 22,  // over-supply only
      window: 'Oct-Dec 2025 (3 months), annualized × 4',
      diff_annual_shelf1: 1158343,
      diff_annual_shelf3: 463855,
      diff_annual_shelf7: 11051,
      note: '14 SKUs under-supply excluded — sales > replen ไม่ verify (อาจ carryover/direct supply ไม่ logged)',
    },
  },

  // Sensitivity — shelf life × $ saving (annualized) · over-supply 22 SKUs only
  sensitivity: [
    { shelf: '1-day',  defendable: 1158343 },
    { shelf: '2-day',  defendable: 832511 },
    { shelf: '3-day',  defendable: 463855 },
    { shelf: '5-day',  defendable: 126679 },
    { shelf: '7-day',  defendable: 11051 },
  ],

  // ═══════════════════════════════════════════════
  // 5 Angles + ROI
  // ═══════════════════════════════════════════════
  angles: [
    {
      num: 1,
      key: 'central_kitchen',
      title: 'Central Kitchen Allocation',
      tier: 'priority',
      roi_y1: '700K – 1.4M',
      roi_5stores: '3.5M – 7M',
      confidence: 'High',
      proof: '2-session converged · 13/13 SKUs proven · kj091 ทิ้ง 90%+ ของ replen',
      what: 'AI บอก central kitchen ส่งเท่าไรต่อสาขาต่อวัน — ไม่ใช่ chef bake',
      who: 'Central kitchen planner',
      when: 'Phase 1 (8-12 weeks)',
    },
    {
      num: 2,
      key: 'multi_store',
      title: 'Multi-store Cold-start',
      tier: 'priority',
      roi_y1: '— (no new store yet)',
      roi_5stores: '1.5M – 2.5M',
      confidence: 'Medium-High',
      proof: 'SeaconB เปิด 24 ก.พ. 2026 — mix ต่างจาก Gaysorn (Sourdough #1)',
      what: 'Hierarchical model — chef expertise ตั้งแต่ day-1 ของสาขาใหม่',
      who: 'Operations director',
      when: 'Phase 3 (event-triggered)',
    },
    {
      num: 3,
      key: 'stockout',
      title: 'Stockout Recovery',
      tier: 'value',
      roi_y1: '400K – 600K',
      roi_5stores: '2M – 3M',
      confidence: 'Medium',
      proof: 'kj117 7 วัน confirmed stockout · kj131 stockout 816 units (33K margin lost)',
      what: 'Second-opinion alert บน tail days + central kitchen under-supply detection',
      who: 'Chef + planner',
      when: 'Phase 2',
    },
    {
      num: 4,
      key: 'new_sku',
      title: 'New SKU Cold-start',
      tier: 'value',
      roi_y1: '50 – 100K',
      roi_5stores: '250 – 500K',
      confidence: 'High',
      proof: 'W3 launch 15-22 ต.ค. 2025 — chef over-produce 35-52% systematic 14 วันแรก',
      what: 'Transfer learning จาก family SKU เก่า',
      who: 'Chef + product team',
      when: 'Recurring (15+ launches/year)',
    },
    {
      num: 5,
      key: 'erosion',
      title: 'Erosion Alert',
      tier: 'support',
      roi_y1: '100 – 300K',
      roi_5stores: '500K – 1.5M',
      confidence: 'Medium',
      proof: 'Q4 chef rule "post-holiday +2 วันฟื้น" ผิด เช่น 23 ต.ค. ตก 304→201',
      what: 'Environment shift detection + 7-day adjust alert',
      who: 'Chef + ops',
      when: 'Phase 2',
    },
  ],

  // Stack ROI summary
  roi_stack: {
    y1_low: 1300000,
    y1_high: 2400000,
    y3_low: 8000000,
    y3_high: 15000000,
  },

  // ═══════════════════════════════════════════════
  // 3-product architecture
  // ═══════════════════════════════════════════════
  products: [
    {
      letter: 'A',
      name: 'Central Kitchen Demand Planner',
      target: 'demand per CK SKU per branch per day',
      method: 'per-SKU LightGBM + macro features',
      output: '"พรุ่งนี้ส่ง Amarin: kj091 = 15, kj092 = 12 ..."',
      user: 'Central kitchen planner / production manager',
      frequency: '1-2x/day (delivery cycles)',
      phase: 'Phase 1 ⭐',
      proof: '0.5-1.4M/ปี/สาขา (range ตาม shelf life · re-derived proper scope)',
      tier: 'priority',
    },
    {
      letter: 'B',
      name: 'In-store Bake Advisor',
      target: 'stockout/over-bake risk per session per SKU',
      method: 'per-SKU + anomaly detection + tail-day flagging',
      output: '"วันนี้ rain + payday + Friday → kj117 บ่ายเสี่ยง stockout 80% — แนะนำเพิ่ม +25"',
      user: 'Pastry chef (LINE alert, optional)',
      frequency: 'Before each bake batch (2-3x/day)',
      phase: 'Phase 2 — กำลังจะทดลอง',
      proof: 'Concept only · ตัวเลข ROI รอ pilot',
      tier: 'value',
    },
    {
      letter: 'C',
      name: 'Cold-start Engine',
      target: 'demand for SKU/store ที่ไม่มี history',
      method: 'hierarchical / family-level transfer',
      output: 'Day-1 production recommendation จาก similar SKU/store',
      user: 'Chef + product team + ops',
      frequency: 'Event-based (each launch / new store)',
      phase: 'Phase 3 — กำลังจะทดลอง',
      proof: 'Concept only · ตัวเลข ROI รอ launch จริง',
      tier: 'support',
    },
  ],

  // Location facts — Gaysorn Amarin
  location: {
    address: '496-502 ถ.เพลินจิต ลุมพินี ปทุมวัน · มุมแยกราชประสงค์',
    renovation: 'มี.ค. 2024 · งบ 1,000 ล้าน',
    floor: 'ชั้น 4 (food court) · 7:00-19:00 · ราคา 40-150 บาท',
    bts: 'Chidlom 180 ม. · skybridge ตรง Ratchaprasong skywalk',
    daily_footfall_complex: '70,000-80,000 คน',
    tourist_pct: '~50% (จีน ญี่ปุ่น ตะวันออกกลาง)',
    office_workers: '5,000-10,000 (Amarin Tower 22 ชั้น)',
    profile: 'office worker + upper-mid Thai + tourist transit',
    anchors: 'LV The Place · LV Café · LV×Gaggan · McDonald\'s แห่งแรกของไทย · Starbucks',
  },

  // Data gap analysis — fragmentation / unify gaps
  data_gaps: [
    { gap: 'In-store baking ไม่มี production log — ~45 SKUs (Shio Pan family + Cruffin + Tuna Melt) ผลิตในร้าน แต่ไม่มีไฟล์ track ว่าผลิตเท่าไรต่อวัน', severity: 'red', impact: 'ไม่สามารถ forecast หรือ optimize SKU ครัวร้าน (= 78% ของ unit ที่ขาย Oct-Jan) ได้เลย' },
    { gap: 'Channel data fragmented — POS Gaysorn + 3 POS booth + Grab + waste log + replen ไม่ unify (ต้อง join 5 systems)', severity: 'red', impact: 'การ allocation ของแต่ละ SKU ผ่าน channel ต้อง manual reconcile ทุกครั้ง' },
    { gap: 'Daily opening / closing stock per SKU', severity: 'red', impact: 'ปิด waste loop ไม่ได้ (Replen − Sales − Waste = Closing) — formulas ทำงานไม่ครบ' },
    { gap: 'BOM yield SM → FG (Shio Pan dough → กี่ลูก)', severity: 'red', impact: 'แปลง Semi-FG replenishment → FG demand ไม่ได้' },
    { gap: 'Booth supply chain ไม่ logged — booth ขายของแต่ replen file ไม่มี destination = booth', severity: 'red', impact: 'ไม่รู้ว่าของไป booth ผ่าน Gaysorn ส่งต่อ หรือ central direct (impacts ROI scope)' },
    { gap: 'Central FG Nov+Dec sales > replen+waste 4,052 units (16% of replen) — สาเหตุไม่ทราบ', severity: 'red', impact: 'อาจมาจาก carryover / direct supply ไม่ logged / POS double-count → ต้องถาม Koji ก่อน trust replen baseline' },
    { gap: 'No customer DB — 0.08% มี name, 0.00% มีเบอร์', severity: 'yellow', impact: 'ไม่มี repeat customer / loyalty signal' },
    { gap: 'No structured promo log — discount = staff comp ไม่ใช่ campaign', severity: 'yellow', impact: 'แยก natural demand vs promo lift ไม่ได้' },
    { gap: 'No return record — branch ตอบกลับ central kitchen ไม่ได้', severity: 'yellow', impact: 'ไม่รู้ว่าของที่ส่งเกินไปไหน' },
    { gap: 'Camera offline 5 วัน Sept 24-29 (น้ำท่วม)', severity: 'yellow', impact: 'Traffic data biased ในช่วง peak shock' },
    { gap: 'No tx_time / no basket detail บน Grab', severity: 'green', impact: 'Daily-level OK แต่ hourly demand ทำไม่ได้' },
    { gap: 'Replen data start ส.ค. 2025 only (sales เริ่ม ม.ค.)', severity: 'green', impact: '7 เดือนแรกของ sales ไม่มี replen matching' },
  ],

  // Data quality findings — issues caught during Discovery phase audit
  data_issues: [
    { id: 'D1', issue: 'Replen file มี 5 categories ปนกัน (FG/Semi-FG/RM/FG_CC/UNCLASSIFIED) — ถ้า aggregate ทุก row จะ inflate central output 2x', severity: 'Critical', implication: 'session ก่อนเคยใช้ scope ผิด → claim "94% หาย / ROI 1.36M" overstated. ต้อง filter product_category="FG" ก่อนเสมอ' },
    { id: 'D2', issue: '14 SKUs sales > replen ใน Oct-Dec (kj096 6x, kj126 9x, kj182 9x, kj131, kj092 + 9 อื่น) — สาเหตุไม่ทราบ', severity: 'Critical', implication: 'อาจ carryover / direct supply ไม่ logged / POS double-count → ต้องถาม Koji ก่อน trust replen baseline' },
    { id: 'D3', issue: '3 Shio Pan tarts (kj199 Choc, kj195 Vanilla, kj091 บางส่วน) อยู่ใน central FG ทั้งที่เราคิดว่าทุก Shio Pan = in-store', severity: 'High', implication: '"2 ครัวแยก 100%" overstated — จริง ๆ ~99% by volume. Plus: Semi-FG dough ส่งจาก central → in-store = mixed model' },
    { id: 'D4', issue: '3 SKUs ขายได้แต่ replen=0 (kj199 Choc Tart, kj185 Spring Onion Scone, kj166)', severity: 'High', implication: 'อาจเป็น carryover ก่อน Oct / chef ทำเอง / data missing — orphan SKUs ต้อง verify' },
    { id: 'D5', issue: 'kj111 Sausage & Bonito Croissant — cost 168฿ > sales price 89฿ ใน master file', severity: 'High', implication: 'ผิดธรรมดา (ขายขาดทุนไม่น่าเป็นจริง) — cost field รวม labor หรือ data error?' },
    { id: 'D6', issue: 'Master file มี 244 SKUs · POS ขายจริงแค่ 85 SKUs · central ส่งจริง 52 SKUs', severity: 'Medium', implication: '~60% ของ master ไม่ active → cleanup needed · กำหนด scope ของ AI ที่ deployable จริง' },
    { id: 'D7', issue: 'kj091 มี POS label 2 อย่าง: "Grilled Honey Butter" (ส่วนใหญ่) vs "Shio Pan - Honey Butter" (244 unit)', severity: 'Medium', implication: 'POS data quality issue · ต้อง consolidate label ก่อน analytics' },
    { id: 'D8', issue: 'Sep replen file partial — เริ่ม 22 ส.ค. → Sep undercount · Jan waste log ว่าง (ยังไม่ key)', severity: 'Medium', implication: 'Window analysis ต้องใช้ Oct-Dec 3 เดือน · Sep / Jan เลขจะเพี้ยน' },
    { id: 'D9', issue: 'Booth supply chain ไม่ logged — booth ขายของแต่ replen file ไม่มี dest=booth', severity: 'Medium', implication: 'ไม่รู้ว่าของไป booth ผ่าน Gaysorn ส่งต่อ หรือ central ส่งตรง · กำหนด scope Phase 1' },
    { id: 'D10', issue: 'In-store baking ~45 SKUs (Shio Pan family etc.) ไม่มี production log — มีแค่ dough input (Semi-FG)', severity: 'Critical', implication: 'optimize ครัวร้าน 78% volume ไม่ได้เลย จนกว่าจะมี BOM dough → bun yield · Phase 0 ต้องสร้าง log นี้' },
  ],

  // Critical questions
  critical_questions: [
    // === Data integrity (ก่อน trust ตัวเลข) ===
    { id: 'C1', q: '14 SKUs ที่ sales > replen (kj096/kj126/kj182/kj131/kj092 + 9 ตัว) — ของมาจากไหน? carryover / direct supply ไม่ logged / POS double-count?', impact: 'Critical', why: 'Verify ก่อน trust replen baseline · affects scope ของ Phase 1' },
    { id: 'C2', q: 'Shelf life ของแต่ละ central-kitchen SKU จริง ๆ คือกี่วัน?',                       impact: 'Critical', why: 'ROI range 0.5-1.2M ขึ้นกับ shelf assumption (1-day vs 7-day = ต่างกัน 100x)' },
    { id: 'C3', q: 'BOM dough → Shio Pan yield — 1 unit (kg/GN) Shio Pan Dough ทำได้กี่ลูก?',         impact: 'High',     why: 'Unlock visibility ครัวร้าน 78% volume · ใช้ dough log ที่มีอยู่' },
    { id: 'C4', q: 'Day-end leftover ทำอะไรบ้าง? (discount / donate / staff comp / dispose)',          impact: 'High',     why: 'แยก "waste จริง" vs "redistributed" — ตอนนี้ log อาจ understate' },
    { id: 'C5', q: 'Direct supply นอก Odoo มีไหม? (chef ทำเพิ่มเอง / supplier ส่งตรง / event leftover)', impact: 'High',     why: 'อธิบาย sales > replen anomaly ของ 14 SKUs' },
    { id: 'C6', q: 'kj111 Sausage & Bonito Croissant cost 168฿ > price 89฿ ใน master ผิดไหม? cost รวม labor หรือ material only?',  impact: 'Medium',   why: 'Verify cost basis ของ ROI calc' },
    { id: 'C7', q: 'FG_CC (cake counter) เช่น cc033 Almond Croissant 65g — ขายช่องทางไหน? B2B / wholesale / event ไม่ผ่าน POS?', impact: 'Medium',   why: 'แยก scope ของ central output ที่จริงแล้วไปไหน' },

    // === Operational (ก่อน design Phase 1) ===
    { id: 'C8', q: 'Central kitchen sizing — ใครตัดสินใจ qty ส่ง Amarin วันละเท่าไร? Logic อะไร?',   impact: 'High',     why: 'Confirm root cause + AI integration point' },
    { id: 'C9', q: 'Branch refuse delivery ได้มั้ย? หรือต้องรับเสมอ?',                                 impact: 'High',     why: 'Confirm AI recommendation actionable' },
    { id: 'C10', q: 'Booth pop-up × 3 (Emporium/Paragon/The Mall) — รับของจาก Gaysorn ส่งต่อ หรือ central ส่งตรง?', impact: 'High', why: 'กำหนด scope ของ AI · ต้องแยก inventory หรือ unify' },
    { id: 'C11', q: 'Chef ครัวร้าน — กี่คน? rotation อย่างไร? key-person risk?',                     impact: 'High',     why: 'Phase 3 Cold-start engine motivation + multi-store expansion plan' },
    { id: 'C12', q: 'Stockout — chef รู้ตัวมั้ย? เคยได้ยินลูกค้าบ่นมั้ย?',                                 impact: 'Medium',   why: 'Confirm under-supply ตรงกับ lost demand จริง' },
    { id: 'C13', q: 'Recipe / BOM dough version — เปลี่ยนบ่อยไหม? control โดยใคร?',                impact: 'Medium',   why: 'Forecast model ต้อง retrain ตอน recipe เปลี่ยน' },

    // === Business / Implementation ===
    { id: 'C14', q: 'Foodstory POS + Odoo — เปิด API ให้ Impactus access daily/real-time ไหม?',     impact: 'High',     why: 'Phase 1 deploy ต้อง integrate ไม่ใช่ manual export' },
    { id: 'C15', q: 'KPI baseline ปัจจุบัน — Koji วัดอะไร? waste %? GP %? same-store sales?',         impact: 'Medium',   why: 'Pre/post measurement framework · prove ROI ตามเลขที่ Koji ใช้' },
    { id: 'C16', q: 'Franchise timeline — กี่สาขาใน 12-24 เดือน? location profile (mall / standalone)?', impact: 'High',     why: 'Multi-store ROI scaling + Phase 3 scope' },
    { id: 'C17', q: 'SeaconB เปิด ก.พ. 2026 — product mix + replen schedule + sales target?',        impact: 'Medium',   why: 'Cold-start opportunity · benchmark สาขาใหม่' },
    { id: 'C18', q: 'Tech budget + IP ownership — ของที่ Impactus build ใครเป็นเจ้าของ?',            impact: 'High',     why: 'Commercial structure · success-share agreement' },
    { id: 'C19', q: 'Success criteria — อะไรเรียกว่า AI สำเร็จ? % waste? เงิน save? cold-start time?',     impact: 'High',     why: 'Avoid attribution dispute · agree before Phase 1 starts' },
  ],
};

// Format helpers
window.fmt = {
  num: (n) => new Intl.NumberFormat('th-TH').format(n),
  thb: (n) => new Intl.NumberFormat('th-TH', { maximumFractionDigits: 0 }).format(n) + ' บาท',
  pct: (n, d=1) => n.toFixed(d) + '%',
  thbShort: (n) => {
    if (n >= 1000000) return (n/1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n/1000).toFixed(0) + 'K';
    return new Intl.NumberFormat().format(n);
  },
};

// Theme color helpers (match CSS vars)
window.THEME = {
  cream: '#FFF9F2',
  rose: '#E8B4BC',
  roseSoft: '#F5DDE0',
  roseDeep: '#D89AA3',
  sage: '#A8C9A4',
  sageSoft: '#E0EFDD',
  peach: '#F4A99B',
  peachSoft: '#FBE3DC',
  mauve: '#D4B8E0',
  mauveSoft: '#ECDFF2',
  charcoal: '#3D3744',
  charcoalSoft: '#6B6275',
  line: '#F0E6D8',
};
