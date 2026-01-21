const ar_AE = {
  title: 'استعلام فوري (Explorer)',
  dependencies: 'تحليل الطوبولوجيا (Topology)',
  mode: {
    id: 'البحث بـ Trace ID',
    query: 'البحث بالشروط',
  },
  label: 'العلامات (Labels)',
  label_tip: `
    <0>
      دعم تنسيق القيم بـ
      <1>logfmt</1>
    </0>
    <2>الفصل بالمسافات</2>
    <3>يجب إحاطة السلاسل النصية التي تحتوي على مسافات بعلامات اقتباس</3>
    `,
  time: 'النطاق الزمني',
  duration_max: 'أقصى مدة استغراق',
  duration_min: 'أدنى مدة استغراق',
  num_traces: 'عدد النتائج المعروضة',
  query: 'استعلام',
  traceid_msg: 'يرجى إدخال Trace ID',
  sort: {
    MOST_RECENT: 'الأحدث أولاً',
    LONGEST_FIRST: 'الأطول مدة أولاً',
    SHORTEST_FIRST: 'الأقصر مدة أولاً',
    MOST_SPANS: 'الأكثر Spans أولاً',
    LEAST_SPANS: 'الأقل Spans أولاً',
  },
};
export default ar_AE;
