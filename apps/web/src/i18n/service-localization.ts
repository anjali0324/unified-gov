import type { Language } from "@/components/providers/citizen-preferences";
import type { GovernmentService, GovernmentServiceDetail } from "@/src/types";

type ServiceCopy = { name: string; department: string; description: string };

const hindiServices: Record<string, ServiceCopy> = {
  RECRUITMENT_EXAM_001: { name: "सरकारी भर्ती परीक्षा", department: "सार्वजनिक भर्ती विभाग", description: "खुली सरकारी भर्ती परीक्षाओं के लिए आवेदन करें और अपना आवेदन ट्रैक करें।" },
  SCHOLARSHIP_001: { name: "पोस्ट-मैट्रिक छात्रवृत्ति", department: "शिक्षा सहायता विभाग", description: "पोस्ट-मैट्रिक शिक्षा प्राप्त कर रहे पात्र विद्यार्थियों के लिए वित्तीय सहायता।" },
  DRIVING_LICENCE_001: { name: "ड्राइविंग लाइसेंस आवेदन", department: "परिवहन विभाग", description: "लर्नर, स्थायी, नवीनीकरण और वाहन-श्रेणी ड्राइविंग लाइसेंस सेवाओं के लिए आवेदन करें।" },
  JEE_MAIN_001: { name: "जेईई मेन", department: "राष्ट्रीय परीक्षा एजेंसी", description: "इंजीनियरिंग प्रवेश परीक्षा।" },
  NEET_UG_001: { name: "नीट यूजी", department: "राष्ट्रीय परीक्षा एजेंसी", description: "स्नातक चिकित्सा प्रवेश परीक्षा।" },
  CUET_UG_001: { name: "सीयूईटी यूजी", department: "राष्ट्रीय परीक्षा एजेंसी", description: "सामान्य विश्वविद्यालय स्नातक प्रवेश परीक्षा।" },
  WBJEE_001: { name: "डब्ल्यूबीजेईई", department: "पश्चिम बंगाल संयुक्त प्रवेश परीक्षा बोर्ड", description: "पश्चिम बंगाल इंजीनियरिंग प्रवेश परीक्षा।" },
  SSC_CGL_001: { name: "एसएससी सीजीएल", department: "कर्मचारी चयन आयोग", description: "सरकारी भर्ती परीक्षा।" },
  UPSC_CSE_001: { name: "UPSC सिविल सेवा परीक्षा", department: "संघ लोक सेवा आयोग", description: "सिविल सेवा भर्ती परीक्षा।" },
  IBPS_PO_001: { name: "आईबीपीएस पीओ", department: "बैंकिंग कार्मिक चयन संस्थान", description: "बैंक परिवीक्षाधीन अधिकारी भर्ती परीक्षा।" },
  PAN_CARD_001: { name: "पैन कार्ड", department: "डेमो कर सेवाएँ", description: "PAN विवरण के लिए आवेदन या अपडेट करें।" },
  VOTER_ID_001: { name: "मतदाता पहचान पत्र", department: "डेमो निर्वाचन सेवाएँ", description: "मतदाता पंजीकरण या मतदाता जानकारी अपडेट करने के लिए आवेदन करें।" },
  PASSPORT_001: { name: "पासपोर्ट", department: "डेमो पासपोर्ट सेवाएँ", description: "पासपोर्ट संबंधी सेवाओं के लिए आवेदन करें।" },
  NATIONAL_SCHOLARSHIP_001: { name: "राष्ट्रीय छात्रवृत्ति", department: "शिक्षा सहायता विभाग", description: "पात्र विद्यार्थियों के लिए वित्तीय सहायता।" },
  STATE_MERIT_SCHOLARSHIP_001: { name: "राज्य मेधा छात्रवृत्ति", department: "राज्य शिक्षा विभाग", description: "विद्यार्थियों के लिए योग्यता-आधारित वित्तीय सहायता।" },
  HIGHER_EDUCATION_SCHOLARSHIP_001: { name: "उच्च शिक्षा छात्रवृत्ति", department: "उच्च शिक्षा विभाग", description: "उच्च शिक्षा प्राप्त कर रहे विद्यार्थियों के लिए सहायता।" },
  PM_KISAN_001: { name: "पीएम-किसान", department: "डेमो कृषि सेवाएँ", description: "किसान आय-सहायता योजना आवेदन डेमो।" },
  AYUSHMAN_BHARAT_001: { name: "आयुष्मान भारत", department: "डेमो स्वास्थ्य लाभ सेवाएँ", description: "स्वास्थ्य-लाभ नामांकन आवेदन डेमो।" },
  PMAY_001: { name: "पीएमएवाई", department: "डेमो आवास सेवाएँ", description: "आवास सहायता योजना आवेदन डेमो।" },
  E_SHRAM_001: { name: "ई-श्रम पंजीकरण", department: "डेमो श्रम सेवाएँ", description: "सामाजिक सुरक्षा योजनाओं के लिए श्रमिक पंजीकरण डेमो।" },
  INCOME_CERTIFICATE_001: { name: "आय प्रमाण पत्र", department: "डेमो प्रमाण पत्र सेवाएँ", description: "आय प्रमाण पत्र के लिए आवेदन करें।" },
  CASTE_CERTIFICATE_001: { name: "जाति प्रमाण पत्र", department: "डेमो प्रमाण पत्र सेवाएँ", description: "जाति प्रमाण पत्र के लिए आवेदन करें।" },
  DOMICILE_CERTIFICATE_001: { name: "निवास प्रमाण पत्र", department: "डेमो प्रमाण पत्र सेवाएँ", description: "निवास प्रमाण पत्र के लिए आवेदन करें।" }
};

const hindiCategories: Record<string, string> = {
  "Examinations": "परीक्षाएँ",
  "Identity & Licences": "पहचान और लाइसेंस",
  "Education & Scholarships": "शिक्षा और छात्रवृत्तियाँ",
  "Government Schemes": "सरकारी योजनाएँ",
  "Certificates": "प्रमाण पत्र"
};

const hindiOrbitServiceNames: Record<string, string> = {
  JEE_MAIN_001: "जेईई मेन", NEET_UG_001: "नीट यूजी", CUET_UG_001: "सीयूईटी यूजी", SSC_CGL_001: "एसएससी सीजीएल", UPSC_CSE_001: "UPSC",
  DRIVING_LICENCE_001: "ड्राइविंग लाइसेंस", PASSPORT_001: "पासपोर्ट", PAN_CARD_001: "पैन कार्ड", VOTER_ID_001: "मतदाता पहचान पत्र",
  PM_KISAN_001: "पीएम-किसान", PMAY_001: "पीएमएवाई", E_SHRAM_001: "ई-श्रम", AYUSHMAN_BHARAT_001: "आयुष्मान भारत",
  INCOME_CERTIFICATE_001: "आय प्रमाण पत्र", CASTE_CERTIFICATE_001: "जाति प्रमाण पत्र", DOMICILE_CERTIFICATE_001: "निवास प्रमाण पत्र", NATIONAL_SCHOLARSHIP_001: "छात्रवृत्ति"
};

const hindiFields: Record<string, string> = {
  exam_city: "पसंदीदा परीक्षा शहर", post_preference: "पद वरीयता", course: "वर्तमान पाठ्यक्रम", institution: "संस्थान", academic_year: "शैक्षणिक वर्ष", licence_type: "आवेदन प्रकार", vehicle_class: "वाहन श्रेणी", paper_preference: "पेपर वरीयता", subject_preference: "विषय वरीयता", service_preference: "सेवा वरीयता", application_type: "आवेदन प्रकार", registration_type: "पंजीकरण प्रकार", farmer_declaration: "किसान घोषणा", household_size: "परिवार के सदस्यों की संख्या", housing_need: "आवास आवश्यकता", occupation: "व्यवसाय", certificate_purpose: "प्रमाण पत्र का उद्देश्य"
};

const hindiDocuments: Record<string, string> = {
  PHOTOGRAPH: "फोटो", SIGNATURE: "हस्ताक्षर", DEGREE_CERTIFICATE: "डिग्री प्रमाण पत्र", IDENTITY_DOCUMENT: "पहचान दस्तावेज़", INCOME_CERTIFICATE: "आय प्रमाण पत्र", MARKSHEET: "अंकपत्र", OTHER: "भूमि या सहायक दस्तावेज़"
};

const hindiProfileFields: Record<string, string> = {
  full_name: "पूरा नाम", date_of_birth: "जन्म तिथि", gender: "लिंग", nationality: "राष्ट्रीयता", marital_status: "वैवाहिक स्थिति", mobile: "प्राथमिक मोबाइल", alternate_mobile: "वैकल्पिक मोबाइल", email: "ईमेल पता", father_name: "पिता का नाम", mother_name: "माता का नाम", guardian_name: "अभिभावक का नाम", guardian_relationship: "अभिभावक से संबंध", category: "श्रेणी", ews_status: "EWS स्थिति", disability_status: "दिव्यांग व्यक्ति (PwD)", ex_serviceman_status: "पूर्व सैनिक स्थिति", minority_status: "अल्पसंख्यक स्थिति", highest_qualification: "उच्चतम योग्यता", current_education_status: "वर्तमान शिक्षा स्थिति", current_course: "वर्तमान पाठ्यक्रम", current_institution: "संस्थान", employment_status: "रोज़गार स्थिति", occupation: "व्यवसाय", annual_family_income_range: "वार्षिक पारिवारिक आय सीमा", preferred_language: "पसंदीदा भाषा", address: "पता"
};

const kannadaProfileFields: Record<string, string> = {
  full_name: "ಪೂರ್ಣ ಹೆಸರು", date_of_birth: "ಜನ್ಮ ದಿನಾಂಕ", gender: "ಲಿಂಗ", nationality: "ರಾಷ್ಟ್ರೀಯತೆ", marital_status: "ವೈವಾಹಿಕ ಸ್ಥಿತಿ", mobile: "ಪ್ರಾಥಮಿಕ ಮೊಬೈಲ್", alternate_mobile: "ಪರ್ಯಾಯ ಮೊಬೈಲ್", email: "ಇಮೇಲ್ ವಿಳಾಸ", father_name: "ತಂದೆಯ ಹೆಸರು", mother_name: "ತಾಯಿಯ ಹೆಸರು", guardian_name: "ಪೋಷಕರ ಹೆಸರು", guardian_relationship: "ಪೋಷಕರ ಸಂಬಂಧ", category: "ವರ್ಗ", ews_status: "EWS ಸ್ಥಿತಿ", disability_status: "ಅಂಗವೈಕಲ್ಯ ಸ್ಥಿತಿ", ex_serviceman_status: "ಮಾಜಿ ಸೈನಿಕ ಸ್ಥಿತಿ", minority_status: "ಅಲ್ಪಸಂಖ್ಯಾತ ಸ್ಥಿತಿ", highest_qualification: "ಅತ್ಯುನ್ನತ ವಿದ್ಯಾರ್ಹತೆ", current_education_status: "ಪ್ರಸ್ತುತ ಶಿಕ್ಷಣ ಸ್ಥಿತಿ", current_course: "ಪ್ರಸ್ತುತ ಕೋರ್ಸ್", current_institution: "ಸಂಸ್ಥೆ", employment_status: "ಉದ್ಯೋಗ ಸ್ಥಿತಿ", occupation: "ವೃತ್ತಿ", annual_family_income_range: "ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ ವ್ಯಾಪ್ತಿ", preferred_language: "ಆದ್ಯತೆಯ ಭಾಷೆ", address: "ವಿಳಾಸ"
};

const teluguProfileFields: Record<string, string> = {
  full_name: "పూర్తి పేరు", date_of_birth: "పుట్టిన తేదీ", gender: "లింగం", nationality: "జాతీయత", marital_status: "వైవాహిక స్థితి", mobile: "ప్రాథమిక మొబైల్", alternate_mobile: "ప్రత్యామ్నాయ మొబైల్", email: "ఇమెయిల్ చిరునామా", father_name: "తండ్రి పేరు", mother_name: "తల్లి పేరు", guardian_name: "సంరక్షకుడి పేరు", guardian_relationship: "సంరక్షకుడితో సంబంధం", category: "వర్గం", ews_status: "EWS స్థితి", disability_status: "వైకల్య స్థితి", ex_serviceman_status: "మాజీ సైనికుడి స్థితి", minority_status: "మైనారిటీ స్థితి", highest_qualification: "అత్యున్నత అర్హత", current_education_status: "ప్రస్తుత విద్యా స్థితి", current_course: "ప్రస్తుత కోర్సు", current_institution: "సంస్థ", employment_status: "ఉపాధి స్థితి", occupation: "వృత్తి", annual_family_income_range: "వార్షిక కుటుంబ ఆదాయ పరిధి", preferred_language: "ప్రాధాన్య భాష", address: "చిరునామా"
};

const bengaliProfileFields: Record<string, string> = {
  full_name: "পুরো নাম", date_of_birth: "জন্ম তারিখ", gender: "লিঙ্গ", nationality: "জাতীয়তা", marital_status: "বৈবাহিক অবস্থা", mobile: "প্রাথমিক মোবাইল", alternate_mobile: "বিকল্প মোবাইল", email: "ইমেল ঠিকানা", father_name: "বাবার নাম", mother_name: "মায়ের নাম", guardian_name: "অভিভাবকের নাম", guardian_relationship: "অভিভাবকের সঙ্গে সম্পর্ক", category: "বিভাগ", ews_status: "EWS অবস্থা", disability_status: "প্রতিবন্ধিতার অবস্থা", ex_serviceman_status: "প্রাক্তন সেনাসদস্যের অবস্থা", minority_status: "সংখ্যালঘু অবস্থা", highest_qualification: "সর্বোচ্চ যোগ্যতা", current_education_status: "বর্তমান শিক্ষার অবস্থা", current_course: "বর্তমান কোর্স", current_institution: "প্রতিষ্ঠান", employment_status: "কর্মসংস্থানের অবস্থা", occupation: "পেশা", annual_family_income_range: "বার্ষিক পারিবারিক আয়ের সীমা", preferred_language: "পছন্দের ভাষা", address: "ঠিকানা"
};

const tamilProfileFields: Record<string, string> = {
  full_name: "முழுப் பெயர்", date_of_birth: "பிறந்த தேதி", gender: "பாலினம்", nationality: "தேசியம்", marital_status: "திருமண நிலை", mobile: "முதன்மை மொபைல்", alternate_mobile: "மாற்று மொபைல்", email: "மின்னஞ்சல் முகவரி", father_name: "தந்தையின் பெயர்", mother_name: "தாயின் பெயர்", guardian_name: "பாதுகாவலரின் பெயர்", guardian_relationship: "பாதுகாவலருடனான உறவு", category: "வகை", ews_status: "EWS நிலை", disability_status: "மாற்றுத்திறன் நிலை", ex_serviceman_status: "முன்னாள் ராணுவ வீரர் நிலை", minority_status: "சிறுபான்மை நிலை", highest_qualification: "உயர்ந்த தகுதி", current_education_status: "தற்போதைய கல்வி நிலை", current_course: "தற்போதைய பாடநெறி", current_institution: "நிறுவனம்", employment_status: "வேலைவாய்ப்பு நிலை", occupation: "தொழில்", annual_family_income_range: "வருடாந்திர குடும்ப வருமான வரம்பு", preferred_language: "விருப்ப மொழி", address: "முகவரி"
};

const profileFieldsByLanguage: Partial<Record<Language, Record<string, string>>> = { hi: hindiProfileFields, kn: kannadaProfileFields, te: teluguProfileFields, bn: bengaliProfileFields, ta: tamilProfileFields };

const hindiOptions: Record<string, string> = {
  "New Delhi": "नई दिल्ली", Mumbai: "मुंबई", Bengaluru: "बेंगलुरु", "Paper 1": "पेपर 1", "Paper 2": "पेपर 2",
  "New application": "नया आवेदन", "Update details": "विवरण अपडेट करें", "New registration": "नया पंजीकरण", "Update information": "जानकारी अपडेट करें", "New passport": "नया पासपोर्ट", "Reissue passport": "पासपोर्ट पुनः जारी करें",
  "Learner's Licence": "लर्नर लाइसेंस", "Permanent Driving Licence": "स्थायी ड्राइविंग लाइसेंस", "Add Vehicle Class to Existing Licence": "मौजूदा लाइसेंस में वाहन श्रेणी जोड़ें", "Renew Driving Licence": "ड्राइविंग लाइसेंस नवीनीकरण", "Duplicate Driving Licence": "डुप्लिकेट ड्राइविंग लाइसेंस",
  "MCWOG — Motorcycle without gear": "MCWOG — बिना गियर मोटरसाइकिल", "MCWG — Motorcycle with gear": "MCWG — गियर वाली मोटरसाइकिल", "LMV-NT — Light motor vehicle (non-transport)": "LMV-NT — हल्का मोटर वाहन (गैर-परिवहन)", "LMV-TR — Light motor vehicle (transport)": "LMV-TR — हल्का मोटर वाहन (परिवहन)", "Transport — Medium/heavy goods or passenger vehicle": "परिवहन — मध्यम/भारी माल या यात्री वाहन", "E-rickshaw": "ई-रिक्शा", "E-cart": "ई-कार्ट", "Road roller": "रोड रोलर", "Adapted vehicle for persons with disability": "दिव्यांग व्यक्ति के लिए अनुकूलित वाहन", "Other specified vehicle": "अन्य निर्दिष्ट वाहन"
};

export function localizeService<T extends GovernmentService>(service: T, language: Language): T {
  if (language !== "hi") return service;
  const copy = hindiServices[service.id];
  const localized = {
    ...service,
    name: copy?.name ?? service.name,
    department: copy?.department ?? service.department,
    description: copy?.description ?? service.description,
    category: hindiCategories[service.category] ?? service.category
  };
  if (!("fields" in service) || !("document_requirements" in service) || !("required_profile_fields" in service)) return localized;
  const detail = service as unknown as GovernmentServiceDetail;
  return {
    ...localized,
    required_profile_fields: detail.required_profile_fields,
    fields: detail.fields.map((field) => ({ ...field, label: hindiFields[field.key] ?? field.label, options: field.options?.map((option) => hindiOptions[option] ?? option) ?? null })),
    document_requirements: detail.document_requirements.map((document) => ({ ...document, label: hindiDocuments[document.document_type] ?? document.label }))
  } as T;
}

export function localizeServiceName(serviceId: string, fallback: string, language: Language) {
  return language === "hi" ? hindiServices[serviceId]?.name ?? fallback : fallback;
}

export function localizeServiceOrbitName(serviceId: string, fallback: string, language: Language) {
  return language === "hi" ? hindiOrbitServiceNames[serviceId] ?? localizeServiceName(serviceId, fallback, language) : fallback;
}

export function localizeDepartment(serviceId: string, fallback: string, language: Language) {
  return language === "hi" ? hindiServices[serviceId]?.department ?? fallback : fallback;
}

export function localizeProfileField(field: string, language: Language) {
  return profileFieldsByLanguage[language]?.[field] ?? field.replaceAll("_", " ");
}

export function localizeDocumentType(type: string, fallback: string, language: Language) {
  return language === "hi" ? hindiDocuments[type] ?? fallback : fallback;
}
