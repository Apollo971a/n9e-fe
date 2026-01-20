const ar_AE = {
  title: 'سير العمل (Workflow)',
  title_add: 'إضافة سير عمل جديد للحدث',
  title_edit: 'تعديل سير عمل الحدث',
  teams: 'الفرق المصرح لها',
  teams_tip: 'حدد الفرق التي يمكنها عرض وتعديل هذا التكوين. يمكن ربط عدة فرق.<br />مثال: إذا منحت التصريح لـ infra-team، فسيتمكن أعضاء هذا الفريق فقط من الوصول إلى هذا التكوين.',
  basic_configuration: 'التكوين الأساسي',
  filter_enable: 'شروط التصفية',
  label_filters: 'تصفية حسب العلامات (Labels)',
  label_filters_tip:
    'قم بضبط شروط تصفية العلامات؛ سيتم معالجة الحدث فقط إذا كان يحتوي على علامات مطابقة.<br />مثال: إدخال service=mon يعني معالجة الأحداث التي تحتوي على هذه العلامة فقط.',
  attribute_filters: 'تصفية حسب الخصائص',
  attribute_filters_tip:
    'ضبط شروط تصفية خصائص الحدث.<br />مثال: إدخال "مجموعة العمل == DefaultBusiGroup" يعني معالجة الأحداث التي تنتمي لهذه المجموعة فقط.',
  attribute_filters_value: 'قيمة الخاصية',
  attribute_filters_options: {
    group_name: 'مجموعة العمل',
    cluster: 'مصدر البيانات',
    is_recovered: 'هل هو حدث تعافي؟',
  },
  processor: {
    title: 'المعالج (Processor)',
    add_btn: 'إضافة معالج',
    typ: 'النوع',
    help_btn: 'تعليمات الاستخدام',
  },
  label_enrich: {
    label_source_type: {
      label: 'مصدر العلامة',
      options: {
        built_in_mapping: 'قاموس العلامات المدمج',
      },
    },
    label_mapping_id: 'اسم القاموس',
    help: 'استعلم من القاموس باستخدام علامات المصدر، وأضف الحقول الناتجة كعلامات جديدة للحدث بناءً على "إضافة علامات".',
    source_keys: {
      label: 'علامات المصدر',
      text: 'الحقل <strong>{{field}}</strong> في القاموس يقابل العلامة في الحدث',
      target_key_placeholder: 'مفتاح العلامة',
      target_key_required: 'مفتاح العلامة مطلوب',
    },
    append_keys: {
      label: 'إضافة علامات',
      source_key_placeholder: 'الحقل في القاموس',
      rename_key: 'إعادة تسمية المفتاح',
      target_key_placeholder: 'مفتاح العلامة الجديد',
    },
  },
  test_modal: {
    title: {
      settings: 'اختيار حدث تنبيه',
      result: 'معاينة الحدث',
    },
  },
  callback: {
    url: 'رابط URL',
    advanced_settings: 'إعدادات متقدمة',
    basic_auth_user: 'اسم مستخدم المصادقة',
    basic_auth_user_placeholder: 'أدخل اسم المستخدم',
    basic_auth_pass: 'كلمة مرور المصادقة',
    basic_auth_pass_placeholder: 'أدخل كلمة المرور',
  },
  event_drop: {
    content: 'منطق الإسقاط (Drop Logic)',
    content_placeholder: 'استخدم صيغة go template؛ إذا كانت النتيجة true، فسيتم إسقاط الحدث في هذه المرحلة.',
  },
  ai_summary: {
    url_placeholder: 'أدخل عنوان خدمة API',
    url_required: 'رابط URL مطلوب',
    api_key_placeholder: 'مفتاح API',
    api_key_required: 'مفتاح API مطلوب',
    model_name: 'اسم النموذج',
    model_name_placeholder: 'مثل: deepseek-chat',
    model_name_required: 'اسم النموذج مطلوب',
    prompt_template: 'قالب التوجيه (Prompt)',
    prompt_template_required: 'قالب التوجيه مطلوب',
    advanced_config: 'تكوين متقدم',
    custom_params: 'معايير نموذج AI',
    custom_params_key_label: 'اسم المعيار (مثل: temperature)',
    custom_params_value_label: 'قيمة المعيار (مثل: 0.7)',
    proxy_placeholder: 'مثال: http://proxy.example.com:8080',
    timeout_placeholder: 'مهلة الانتظار (ثوانٍ)',
    timeout_required: 'المهلة مطلوبة',
    url_tip: `- **الوصف**: عنوان واجهة API لخدمة AI\n- **مثال**: \`https://api.deepseek.com/v1/chat/completions\``,
    api_key_tip: `- **الوصف**: مفتاح API الخاص بمزود الخدمة\n- **طريقة الحصول**: عبر المواقع الرسمية لـ OpenAI أو DeepSeek`,
    model_name_tip: `- **الوصف**: حدد اسم نموذج الذكاء الاصطناعي\n- **نماذج شائعة**: \`gpt-4\`, \`deepseek-chat\``,
    prompt_template_tip: `قالب التوجيه هو جوهر تحليل AI. يمكنك استخدام {{$event}} للإشارة إلى حقول الحدث. يمكنك البدء بالقالب الافتراضي الموفر.`,
    prompt_template_placeholder: `يرجى تحليل معلومات التنبيه التالية وتقديم ملخص باللغة العربية:
قاعدة التنبيه: {{$event.RuleName}}
الخطورة: {{$event.Severity}}
الحالة: {{if $event.IsRecovered}}تعافى (Recovered){{else}}تم التفعيل (Triggered){{end}}
وقت التفعيل: {{$event.TriggerTime}}
القيمة: {{$event.TriggerValue}}
وصف القاعدة: {{$event.RuleNote}}
العلامات: {{$event.Tags}}

يرجى تقديم ملخص لا يتجاوز 100 كلمة يوضح:
1. النظام/الخدمة المتأثرة والمشكلة
2. مستوى الخطورة
3. التأثير المحتمل
4. اقتراح سريع للحل`,
    custom_params_tip: `لضبط سلوك النموذج بدقة: (مثل temperature للتحكم في العشوائية، max_tokens للحد الأقصى للمخرجات).`,
  },
  script: {
    timeout: 'مهلة التنفيذ (ميلي ثانية)',
    timeout_tooltip: 'سيتم إنهاء البرنامج النصي إذا تجاوز هذه المدة',
    timeout_placeholder: 'أدخل المهلة',
    content: 'محتوى البرنامج النصي (Script)',
    content_tooltip: 'اكتب الكود لمعالجة الحدث؛ سيتم تمرير الحدث عبر stdin ويجب إخراجه ككائن json عبر stdout',
    content_placeholder: 'اكتب الكود هنا...',
  },
  inhibit: {
    help: 'معالج تثبيط الأحداث: يمنع إرسال إشعارات لحدث معين إذا كان هناك حدث آخر نشط لتجنب الإزعاج (Alert Fatigue).',
    tip1: 'عندما يفي **التنبيه الجديد** بالشروط التالية',
    tip2: 'و',
    tip3: 'يوجد **تنبيه نشط** خلال (ثوانٍ) يفي بالشروط التالية',
    tip4: 'وكانت **العناصر المتطابقة** بين التنبيه الجديد والنشط هي',
    tip5: 'عند تحقق جميع الشروط أعلاه، سيتم تثبيط التنبيه الحالي ولن يتم إرسال إشعار.',
    duration_required: 'مدة التثبيط مطلوبة',
    duration_max: 'يجب ألا تتجاوز المدة 600 ثانية',
    match_label_keys: 'العلامات',
    match_label_keys_required: 'العلامات مطلوبة',
    match_attribute_keys: 'الخصائص',
    match_attribute_keys_required: 'الخصائص مطلوبة',
    keys_at_least_one_required: 'مطلوب علامة أو خاصية واحدة على الأقل',
    labels_conflict: 'القيم في العلامة {{label}} مختلفة، لا يمكن التثبيط',
    attributes_conflict: 'القيم في الخاصية {{attribute}} مختلفة، لا يمكن التثبيط',
    preview:
      'معاينة: سيتم تثبيط "التنبيه الجديد: {{newAlertLabelsAttrs}}" إذا وجد "تنبيه نشط: {{activeAlertLabelsAttrs}}" خلال آخر "{{duration}} ثانية" وكان كلاهما متطابقاً في "{{matchLabelsAttrs}}".',
    labels_filter: {
      label: 'العلامات',
      label_tip: 'تثبيط الأحداث التي تطابق هذه العلامات فقط. اتركه فارغاً للتطبيق على الكل.',
      label_placeholder: 'اختر أو أدخل مفتاح العلامة مثل app أو cluster',
    },
    labels_filter_value_placeholder: 'أدخل أو اختر قيمة العلامة',
    attributes_filter: {
      label: 'الخصائص',
      label_tip: 'تحديد نطاق التثبيط بناءً على خصائص الحدث.',
    },
    active_event_labels_filter: {
      label: 'العلامات',
      label_tip: 'تحديد نطاق التنبيهات النشطة التي يمكنها تثبيط التنبيهات الجديدة.',
    },
    active_event_attributes_filter: {
      label: 'الخصائص',
      label_tip: 'تحديد نطاق التنبيهات النشطة بناءً على الخصائص.',
    },
  },
  inhibit_qd: {
    help: 'تثبيط بناءً على نتيجة استعلام: سيتم تنفيذ استعلام؛ إذا كانت هناك نتائج، فسيتم تثبيط التنبيه.',
    t_1: 'وتم العثور على **البيانات** التالية',
  },
  annotation_qd: {
    help: 'معالج الاستعلام الإضافي: يتيح جلب معلومات إضافية (مثل السجلات) من مصدر البيانات وإلحاقها بالتنبيه.',
    query_configs: 'استعلام البيانات',
    use_event_datasource: 'استخدام مصدر بيانات الحدث',
    use_event_datasource_help: 'عند التفعيل، يمكن اختيار أحداث من نفس نوع مصدر البيانات فقط',
    datasource_cate_required: 'نوع مصدر البيانات مطلوب',
    datasource_ids_required: 'مصدر البيانات مطلوب',
    select_alert_event_btn: 'اختيار حدث عينة',
    select_alert_event_tip: 'يستخدم لتعبئة المتغيرات في جملة الاستعلام ومعاينة البيانات',
    select_alert_event_label: 'الحدث المختار',
    query_required: 'شرط الاستعلام مطلوب',
    sql_limit_valid: 'يجب أن تحتوي جملة SQL على LIMIT',
    annotation_configs: 'إلحاق البيانات',
    annotation_configs_tip: 'أضف مفتاح/قيمة لإلحاق نتائج الاستعلام بمعلومات التنبيه',
    annotation_key_tip: 'اسم الحقل الجديد (يفضل بالإنجليزية)',
    annotation_val_tip: 'قالب قيمة الحقل الملحق',
    annotation_key_placeholder: 'اسم الحقل الإضافي',
    annotation_val_placeholder: 'محتوى الحقل (يدعم صيغ القوالب)',
    annotation_key_required: 'اسم الحقل مطلوب',
    annotation_val_required: 'محتوى الحقل مطلوب',
    data_preview: 'معاينة البيانات',
    data_preview_query: 'جملة الاستعلام',
    data_preview_no_eventid: 'يرجى اختيار حدث أولاً',
    query_limit: 'حد عدد النتائج',
  },
};
export default ar_AE;
