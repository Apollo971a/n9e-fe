const ar_AE = {
  title: 'قواعد التسجيل (Recording Rules)',
  search_placeholder: 'البحث عن طريق الاسم أو العلامات',
  name: 'اسم المقياس (Metric)',
  name_msg: 'اسم المقياس غير صالح',
  name_tip: 'يقوم PromQL بإجراء حسابات دورية لإنشاء مقاييس جديدة؛ يرجى إدخال اسم المقياس الجديد هنا.',
  note: 'ملاحظات',
  disabled: 'تفعيل',
  append_tags: 'علامات إضافية (Tags)',
  append_tags_msg: 'تنسيق العلامات غير صحيح، يرجى التحقق!',
  append_tags_msg1: 'يجب أن يكون طول العلامة 64 حرفاً أو أقل',
  append_tags_msg2: 'يجب أن يكون تنسيق العلامة key=value. ويجب أن يبدأ المفتاح (key) بحرف أو شرطة سفلية، ويتكون من أحرف وأرقام وشرطات سفلية فقط.',
  append_tags_placeholder: 'تنسيق العلامة key=value، استخدم مفتاح Enter أو المسافة للفصل بينها',
  batch: {
    must_select_one: 'لم يتم اختيار أي قاعدة',
    import: {
      title: 'استيراد قواعد التسجيل',
      name: 'قاعدة التسجيل',
    },
    export: {
      title: 'تصدير قواعد التسجيل',
      copy: 'نسخ JSON إلى الحافظة',
    },
    delete: 'حذف قواعد التسجيل',
    update: {
      title: 'تحديث قواعد التسجيل',
      field: 'الحقل',
      changeto: 'تغيير إلى',
      options: {
        datasource_ids: 'مصدر البيانات',
        disabled: 'تفعيل',
        append_tags: 'علامات إضافية',
        cron_pattern: 'تكرار التنفيذ (Cron)',
      },
    },
  },
};
export default ar_AE;
