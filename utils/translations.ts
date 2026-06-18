export const translations: any = {
  en: {
    // ... Navigation & UI ...
    selectLanguage: "Select Your Language", english: "English", tamil: "Tamil", hindi: "Hindi", continue: "Continue",
    homeTab: "Profile", assessmentTab: "Assessment", historyTab: "History", settingsTab: "Settings",
    
    // ... Profile Screen ...
    accountDetails: "Patient Setup", childName: "Child's Name", parentName: "Parent/Guardian Name", age: "Current Age", gender: "Gender", boy: "Boy", girl: "Girl",
    saveProfile: "Save Profile", editProfile: "Edit Profile", profileSaved: "Profile Saved!",
    welcomeBack: "Welcome back", patientDashboard: "Patient Dashboard",
    
    // ... Assessment Screen ...
    selectStage: "Select Developmental Stage to Test:",
    startTest: "Start Assessment", assessmentComplete: "Assessment Complete!", yourScore: "Score:",
    riskLevel: "Risk Level:", viewHistoryBtn: "View History", retakeBtn: "Take Another Test",
    questionProgress: "Question", of: "of",
    lowRisk: "Low Risk - Monitor routinely.", highRisk: "Elevated Risk - Consult a pediatrician.",
    
    // ... History Screen ...
    historyTitle: "Assessment History", noHistory: "No assessments taken yet.",
    dateTaken: "Date:", stageTested: "Stage:",
    
    // --- AGE SPECIFIC ASSESSMENTS ---
    stages: [
      {
        id: '1y', label: '1 Year (12 Months)', threshold: 2, // If score >= 2, flag as Elevated Risk
        questions: [
          { question: "Does the child respond to their name being called?", options: ["Always", "Usually", "Sometimes", "Rarely/Never"], scores: [0, 0, 1, 1] },
          { question: "Does the child wave bye-bye?", options: ["Always", "Usually", "Sometimes", "Rarely/Never"], scores: [0, 0, 1, 1] },
          { question: "Does the child look where you point?", options: ["Always", "Usually", "Sometimes", "Rarely/Never"], scores: [0, 0, 1, 1] }
        ]
      },
      {
        id: '2y', label: '2 Years (24 Months)', threshold: 3, 
        questions: [
          { question: "Does the child pretend-play (e.g., feeding a doll)?", options: ["Many times a day", "A few times", "Rarely", "Never"], scores: [0, 0, 1, 1] },
          { question: "Does the child point to show you something interesting?", options: ["Many times a day", "A few times", "Rarely", "Never"], scores: [0, 0, 1, 1] },
          { question: "Does the child speak back in short phrases?", options: ["Always", "Usually", "Sometimes", "Rarely/Never"], scores: [0, 0, 1, 1] },
          { question: "Does the child make consistent eye contact?", options: ["Always", "Usually", "Sometimes", "Rarely/Never"], scores: [0, 0, 1, 1] }
        ]
      },
      {
        id: '3y', label: '3 Years (36 Months)', threshold: 3, 
        questions: [
          { question: "Does the child play interactively with other children?", options: ["Always", "Usually", "Sometimes", "Rarely/Never"], scores: [0, 0, 1, 1] },
          { question: "Can the child follow 2-step instructions?", options: ["Always", "Usually", "Sometimes", "Rarely/Never"], scores: [0, 0, 1, 1] },
          { question: "Does the child express a wide range of emotions?", options: ["Always", "Usually", "Sometimes", "Rarely/Never"], scores: [0, 0, 1, 1] },
          { question: "Does the child adjust their behavior to different social situations?", options: ["Always", "Usually", "Sometimes", "Rarely/Never"], scores: [0, 0, 1, 1] }
        ]
      }
      // ADD 4y, 6m, etc. here following the same format!
    ],
  // ... Settings ...
    settingsTitle: "App Settings",
    changeLanguage: "Change Language",
    dataManagement: "Data Management",
    clearHistory: "Clear Assessment History",
    historyCleared: "History successfully deleted.",
    clearWarning: "Are you sure you want to permanently delete all past test scores from this device?",
    cancel: "Cancel",
    delete: "Delete",
    aboutApp: "About This App",
    disclaimerFull: "This application is a preliminary screening tool designed to help identify developmental milestones and potential ASD traits. It does NOT provide a formal medical diagnosis. Always consult a qualified pediatrician or specialist for professional medical advice.",
  },
  
  ta: {
    // ... UI ...
    selectLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்", english: "English", tamil: "தமிழ்", hindi: "हिंदी", continue: "தொடரவும்",
    homeTab: "சுயவிவரம்", assessmentTab: "மதிப்பீடு", historyTab: "வரலாறு", settingsTab: "அமைப்புகள்",
    
    // ... Profile ...
    accountDetails: "நோயாளி அமைப்பு", childName: "குழந்தையின் பெயர்", parentName: "பெற்றோர் பெயர்", age: "தற்போதைய வயது", gender: "பாலினம்", boy: "சிறுவன்", girl: "சிறுமி",
    saveProfile: "சேமி", editProfile: "திருத்து", profileSaved: "சேமிக்கப்பட்டது!",
    welcomeBack: "மீண்டும் வருக", patientDashboard: "நோயாளி தரவுபலகை",
    
    // ... Assessment ...
    selectStage: "சோதனைக்கான வயதைத் தேர்ந்தெடுக்கவும்:", startTest: "சோதனையைத் தொடங்கு", assessmentComplete: "மதிப்பீடு முடிந்தது!", yourScore: "மதிப்பெண்:",
    riskLevel: "ஆபத்து நிலை:", viewHistoryBtn: "வரலாற்றைப் பார்", retakeBtn: "மீண்டும் சோதிக்கவும்", questionProgress: "கேள்வி", of: "இல்",
    lowRisk: "குறைந்த ஆபத்து - தொடர்ந்து கண்காணிக்கவும்.", highRisk: "அதிக ஆபத்து - மருத்துவரை அணுகவும்.",
    
    // ... History ...
    historyTitle: "மதிப்பீட்டு வரலாறு", noHistory: "மதிப்பீடுகள் எதுவும் இல்லை.", dateTaken: "தேதி:", stageTested: "வயது:",
    
    stages: [
      {
        id: '1y', label: '1 வருடம் (12 மாதங்கள்)', threshold: 2,
        questions: [
          { question: "பெயர் சொல்லி அழைக்கும்போது குழந்தை திரும்பப் பார்க்கிறதா?", options: ["எப்போதும்", "பொதுவாக", "சில நேரங்களில்", "இல்லை"], scores: [0, 0, 1, 1] },
          { question: "குழந்தை 'பை-பை' காட்டுகிறதா?", options: ["எப்போதும்", "பொதுவாக", "சில நேரங்களில்", "இல்லை"], scores: [0, 0, 1, 1] },
          { question: "நீங்கள் சுட்டிக்காட்டும் இடத்தை குழந்தை பார்க்கிறதா?", options: ["எப்போதும்", "பொதுவாக", "சில நேரங்களில்", "இல்லை"], scores: [0, 0, 1, 1] }
        ]
      },
      {
        id: '2y', label: '2 வருடங்கள் (24 மாதங்கள்)', threshold: 3,
        questions: [
          { question: "குழந்தை பாசாங்கு செய்து விளையாடுகிறதா? (உம்: பொம்மைக்கு உணவளிப்பது)", options: ["பல முறை", "சில முறை", "அரிதாக", "இல்லை"], scores: [0, 0, 1, 1] },
          { question: "சுவாரஸ்யமான ஒன்றை உங்களிடம் காட்ட குழந்தை சுட்டிக்காட்டுகிறதா?", options: ["பல முறை", "சில முறை", "அரிதாக", "இல்லை"], scores: [0, 0, 1, 1] },
          { question: "குழந்தை சிறு வார்த்தைகளில் பேசுகிறதா?", options: ["எப்போதும்", "பொதுவாக", "சில நேரங்களில்", "இல்லை"], scores: [0, 0, 1, 1] },
          { question: "குழந்தை தொடர்ந்து கண் தொடர்பு கொள்கிறதா?", options: ["எப்போதும்", "பொதுவாக", "சில நேரங்களில்", "இல்லை"], scores: [0, 0, 1, 1] }
        ]
      },
      {
        id: '3y', label: '3 வருடங்கள் (36 மாதங்கள்)', threshold: 3,
        questions: [
          { question: "குழந்தை மற்ற குழந்தைகளுடன் சேர்ந்து விளையாடுகிறதா?", options: ["எப்போதும்", "பொதுவாக", "சில நேரங்களில்", "இல்லை"], scores: [0, 0, 1, 1] },
          { question: "குழந்தை 2-படி அறிவுறுத்தல்களைப் பின்பற்ற முடிகிறதா?", options: ["எப்போதும்", "பொதுவாக", "சில நேரங்களில்", "இல்லை"], scores: [0, 0, 1, 1] },
          { question: "குழந்தை பலவிதமான உணர்ச்சிகளை வெளிப்படுத்துகிறதா?", options: ["எப்போதும்", "பொதுவாக", "சில நேரங்களில்", "இல்லை"], scores: [0, 0, 1, 1] },
          { question: "சமூக சூழ்நிலைகளுக்கு ஏற்ப குழந்தை நடந்துகொள்கிறதா?", options: ["எப்போதும்", "பொதுவாக", "சில நேரங்களில்", "இல்லை"], scores: [0, 0, 1, 1] }
        ]
      }
    ],
    // ... Settings ...
    settingsTitle: "பயன்பாட்டு அமைப்புகள்",
    changeLanguage: "மொழியை மாற்று",
    dataManagement: "தரவு மேலாண்மை",
    clearHistory: "வரலாற்றை அழி",
    historyCleared: "வரலாறு வெற்றிகரமாக அழிக்கப்பட்டது.",
    clearWarning: "இந்தச் சாதனத்திலிருந்து கடந்தகால மதிப்பெண்களை நிரந்தரமாக நீக்க விரும்புகிறீர்களா?",
    cancel: "ரத்து செய்",
    delete: "நீக்கு",
    aboutApp: "பயன்பாட்டைப் பற்றி",
    disclaimerFull: "இந்தச் செயலி வளர்ச்சி மைல்கற்கள் மற்றும் ASD பண்புகளைக் கண்டறிய உதவும் ஒரு ஆரம்ப மதிப்பீட்டுக் கருவியாகும். இது மருத்துவ நோயறிதல் அல்ல. மருத்துவ ஆலோசனைக்கு எப்போதும் தகுதிவாய்ந்த மருத்துவரை அணுகவும்.",
  },
  
  hi: {
    // ... UI ...
    selectLanguage: "अपनी भाषा चुनें", english: "English", tamil: "Tamil", hindi: "हिंदी", continue: "जारी रखें",
    homeTab: "प्रोफ़ाइल", assessmentTab: "मूल्यांकन", historyTab: "इतिहास", settingsTab: "सेटिंग्स",
    
    // ... Profile ...
    accountDetails: "रोगी सेटअप", childName: "बच्चे का नाम", parentName: "माता-पिता का नाम", age: "वर्तमान आयु", gender: "लिंग", boy: "लड़का", girl: "लड़की",
    saveProfile: "प्रोफ़ाइल सहेजें", editProfile: "प्रोफ़ाइल संपादित करें", profileSaved: "सहेजा गया!",
    welcomeBack: "वापसी पर स्वागत है", patientDashboard: "रोगी डैशबोर्ड",
    
    // ... Assessment ...
    selectStage: "परीक्षण के लिए आयु चुनें:", startTest: "परीक्षण शुरू करें", assessmentComplete: "मूल्यांकन पूरा हुआ!", yourScore: "स्कोर:",
    riskLevel: "जोखिम स्तर:", viewHistoryBtn: "इतिहास देखें", retakeBtn: "फिर से परीक्षण करें", questionProgress: "प्रश्न", of: "में से",
    lowRisk: "कम जोखिम - निगरानी रखें।", highRisk: "उच्च जोखिम - डॉक्टर से सलाह लें।",
    
    // ... History ...
    historyTitle: "मूल्यांकन इतिहास", noHistory: "अभी तक कोई परीक्षण नहीं।", dateTaken: "तारीख:", stageTested: "आयु:",
    
    stages: [
      {
        id: '1y', label: '1 वर्ष (12 महीने)', threshold: 2,
        questions: [
          { question: "क्या नाम पुकारने पर बच्चा आपकी ओर देखता है?", options: ["हमेशा", "आमतौर पर", "कभी-कभी", "नहीं"], scores: [0, 0, 1, 1] },
          { question: "क्या बच्चा 'बाय-बाय' करता है?", options: ["हमेशा", "आमतौर पर", "कभी-कभी", "नहीं"], scores: [0, 0, 1, 1] },
          { question: "क्या बच्चा वहां देखता है जहां आप इशारा करते हैं?", options: ["हमेशा", "आमतौर पर", "कभी-कभी", "नहीं"], scores: [0, 0, 1, 1] }
        ]
      },
      {
        id: '2y', label: '2 वर्ष (24 महीने)', threshold: 3,
        questions: [
          { question: "क्या बच्चा दिखावा (नाटक) करता है?", options: ["कई बार", "कुछ बार", "शायद ही कभी", "नहीं"], scores: [0, 0, 1, 1] },
          { question: "क्या बच्चा दिलचस्प चीजें दिखाने के लिए इशारा करता है?", options: ["कई बार", "कुछ बार", "शायद ही कभी", "नहीं"], scores: [0, 0, 1, 1] },
          { question: "क्या बच्चा छोटे वाक्यों में बोलता है?", options: ["हमेशा", "आमतौर पर", "कभी-कभी", "नहीं"], scores: [0, 0, 1, 1] },
          { question: "क्या बच्चा लगातार आँख मिलाता है?", options: ["हमेशा", "आमतौर पर", "कभी-कभी", "नहीं"], scores: [0, 0, 1, 1] }
        ]
      },
      {
        id: '3y', label: '3 वर्ष (36 महीने)', threshold: 3,
        questions: [
          { question: "क्या बच्चा अन्य बच्चों के साथ खेलता है?", options: ["हमेशा", "आमतौर पर", "कभी-कभी", "नहीं"], scores: [0, 0, 1, 1] },
          { question: "क्या बच्चा 2-चरणीय निर्देशों का पालन कर सकता है?", options: ["हमेशा", "आमतौर पर", "कभी-कभी", "नहीं"], scores: [0, 0, 1, 1] },
          { question: "क्या बच्चा भावनाओं की एक विस्तृत श्रृंखला व्यक्त करता है?", options: ["हमेशा", "आमतौर पर", "कभी-कभी", "नहीं"], scores: [0, 0, 1, 1] },
          { question: "क्या बच्चा सामाजिक स्थितियों के अनुसार अपना व्यवहार बदलता है?", options: ["हमेशा", "आमतौर पर", "कभी-कभी", "नहीं"], scores: [0, 0, 1, 1] }
        ]
      }
    ],
    // ... Settings ...
    settingsTitle: "ऐप सेटिंग्स",
    changeLanguage: "भाषा बदलें",
    dataManagement: "डेटा प्रबंधन",
    clearHistory: "इतिहास मिटाएं",
    historyCleared: "इतिहास सफलतापूर्वक हटा दिया गया।",
    clearWarning: "क्या आप वाकई इस डिवाइस से सभी पिछले परीक्षण स्कोर को स्थायी रूप से हटाना चाहते हैं?",
    cancel: "रद्द करें",
    delete: "हटाएं",
    aboutApp: "ऐप के बारे में",
    disclaimerFull: "यह एप्लिकेशन विकासात्मक मील के पत्थर और संभावित एएसडी लक्षणों की पहचान करने में मदद करने के लिए एक प्रारंभिक स्क्रीनिंग टूल है। यह औपचारिक चिकित्सा निदान प्रदान नहीं करता है। हमेशा पेशेवर चिकित्सा सलाह के लिए एक योग्य डॉक्टर से परामर्श लें।",
  }
};