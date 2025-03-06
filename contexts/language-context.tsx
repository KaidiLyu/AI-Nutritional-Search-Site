"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 翻译文本对象
const translations = {
  en: {
    // 导航
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.team": "Team",
    "nav.login": "Login",
    "nav.download": "Download App",

    // 英雄区域
    "hero.title1": "AI-Powered Nutrition Search",
    "hero.title2": "Snap and Know",
    "hero.description":
      "Get comprehensive nutritional data using advanced image recognition and natural language processing to make informed dietary choices.",
    "hero.downloadNow": "Download Now",
    "hero.learnMore": "Learn More",

    // 功能特点
    "features.title": "Powerful Features",
    "features.imageRecognition.title": "Image Recognition",
    "features.imageRecognition.description":
      "Simply take a photo of food, and AI immediately identifies and provides detailed nutritional information",
    "features.smartSearch.title": "Smart Search",
    "features.smartSearch.description":
      "Search for food using natural language to get accurate nutritional data and health advice",
    "features.database.title": "Comprehensive Database",
    "features.database.description":
      "Contains detailed nutritional components of thousands of foods to help you make healthy choices",

    // 工作原理
    "howItWorks.title": "How It Works",
    "howItWorks.step1.title": "Capture or Search Food",
    "howItWorks.step1.description":
      "Use the camera to take a photo of food, or search for the food you want to learn about via text",
    "howItWorks.step2.title": "AI Analysis and Recognition",
    "howItWorks.step2.description":
      "Advanced AI technology identifies food and matches relevant information from our database",
    "howItWorks.step3.title": "Get Detailed Nutritional Data",
    "howItWorks.step3.description":
      "View comprehensive nutritional information including calories, protein, fat, carbohydrates, and more",

    // 团队成员
    "team.title": "Team Members",

    // CTA区域
    "cta.title": "Ready to Change Your Eating Habits?",
    "cta.description": "Download the InfiniteLoopers Nutritional Search App and start your healthy eating journey",
    "cta.appStore": "App Store Download",
    "cta.googlePlay": "Google Play Download",

    // 页脚
    "footer.rights": "All rights reserved",

    // 登录模态框
    "login.title": "User Login",
    "login.email": "Email",
    "login.password": "Password",
    "login.rememberMe": "Remember me",
    "login.forgotPassword": "Forgot password?",
    "login.loginButton": "Login",
    "login.noAccount": "Don't have an account?",
    "login.register": "Register now",

    // 下载模态框
    "download.title": "Download App",
    "download.scanQR": "Scan QR code to download InfiniteLoopers Nutritional Search App",
    "download.appStore": "App Store",
    "download.googlePlay": "Google Play",

    // Learn More页面
    "nav.backToHome": "Back to Home",
    "learnMore.title": "About InfiniteLoopers Nutritional Search App",
    "learnMore.description":
      "InfiniteLoopers Nutritional Search App is an AI-powered mobile application that allows users to search for food items and receive nutritional information. Using advanced image recognition and natural language processing, the app provides users with comprehensive nutritional data to make informed dietary choices.",
    "learnMore.whyChoose": "Why Choose Our App?",
    "learnMore.feature1.title": "Accurate Food Recognition",
    "learnMore.feature1.description": "Our AI can recognize thousands of different foods with over 95% accuracy",
    "learnMore.feature2.title": "Comprehensive Nutritional Data",
    "learnMore.feature2.description":
      "Get detailed information on calories, protein, fat, carbohydrates, vitamins, and minerals",
    "learnMore.feature3.title": "Personalized Dietary Recommendations",
    "learnMore.feature3.description":
      "Receive personalized dietary recommendations based on your health goals and preferences",
    "learnMore.feature4.title": "Offline Functionality",
    "learnMore.feature4.description": "Access basic nutritional information even without an internet connection",
    "learnMore.technical": "Technical Details",
    "learnMore.tech1.title": "Image Recognition Technology",
    "learnMore.tech1.description":
      "We use deep learning models and computer vision technology to identify different foods by analyzing their shape, color, and texture. Our models are trained on millions of food images and can accurately identify various foods.",
    "learnMore.tech2.title": "Natural Language Processing",
    "learnMore.tech2.description":
      "Our app uses advanced NLP technology to understand user search queries and provide relevant results even for complex questions. Users can ask questions in natural language, such as 'How many calories in an apple' or 'Which foods are high in protein'.",
    "learnMore.tech3.title": "Database",
    "learnMore.tech3.description":
      "Our app has a comprehensive database of over 10,000 foods with detailed nutritional information. Our data comes from authoritative nutrition databases and is regularly updated to ensure accuracy.",
    "learnMore.faq": "Frequently Asked Questions",
    "learnMore.faq1.title": "Is the app free?",
    "learnMore.faq1.description":
      "Basic features are free, including food recognition and basic nutritional information. We also offer premium subscriptions that unlock more features, such as personalized meal plans and detailed nutritional analysis.",
    "learnMore.faq2.title": "Which languages does the app support?",
    "learnMore.faq2.description":
      "Currently, our app supports English and Chinese. We plan to add support for more languages in the future.",
    "learnMore.faq3.title": "How can I improve the accuracy of food recognition?",
    "learnMore.faq3.description":
      "For best results, take photos of food in good lighting conditions and ensure that the food is clearly visible in the image. Avoid complex backgrounds and multiple foods mixed together.",
    "learnMore.ready": "Ready to start your healthy eating journey?",
    "learnMore.download":
      "Download the InfiniteLoopers Nutritional Search App now and start exploring the world of food nutrition",
    "learnMore.backToHome": "Back to Home",
  },
  zh: {
    // 导航
    "nav.features": "功能特点",
    "nav.howItWorks": "工作原理",
    "nav.team": "团队成员",
    "nav.login": "登录",
    "nav.download": "下载应用",

    // 英雄区域
    "hero.title1": "AI驱动的营养搜索",
    "hero.title2": "一拍即知",
    "hero.description": "使用先进的图像识别和自然语言处理技术，获取全面的营养数据，做出明智的饮食选择。",
    "hero.downloadNow": "立即下载",
    "hero.learnMore": "了解更多",

    // 功能特点
    "features.title": "强大功能",
    "features.imageRecognition.title": "图像识别",
    "features.imageRecognition.description": "只需拍摄食物照片，AI立即识别并提供详细营养信息",
    "features.smartSearch.title": "智能搜索",
    "features.smartSearch.description": "通过自然语言搜索食物，获取精准的营养数据和健康建议",
    "features.database.title": "全面数据库",
    "features.database.description": "包含数千种食物的详细营养成分，帮助您做出健康选择",

    // 工作原理
    "howItWorks.title": "工作原理",
    "howItWorks.step1.title": "拍摄或搜索食物",
    "howItWorks.step1.description": "使用相机拍摄食物照片，或通过文字搜索您想了解的食物",
    "howItWorks.step2.title": "AI分析识别",
    "howItWorks.step2.description": "先进的AI技术识别食物，并从我们的数据库中匹配相关信息",
    "howItWorks.step3.title": "获取详细营养数据",
    "howItWorks.step3.description": "查看卡路里、蛋白质、脂肪、碳水化合物等全面营养信息",

    // 团队成员
    "team.title": "团队成员",

    // CTA区域
    "cta.title": "准备好改变您的饮食习惯了吗？",
    "cta.description": "下载InfiniteLoopers营养搜索应用，开始您的健康饮食之旅",
    "cta.appStore": "App Store下载",
    "cta.googlePlay": "Google Play下载",

    // 页脚
    "footer.rights": "保留所有权利",

    // 登录模态框
    "login.title": "用户登录",
    "login.email": "邮箱",
    "login.password": "密码",
    "login.rememberMe": "记住我",
    "login.forgotPassword": "忘记密码?",
    "login.loginButton": "登录",
    "login.noAccount": "还没有账号?",
    "login.register": "立即注册",

    // 下载模态框
    "download.title": "下载应用",
    "download.scanQR": "扫描二维码下载InfiniteLoopers营养搜索应用",
    "download.appStore": "App Store",
    "download.googlePlay": "Google Play",

    // Learn More页面
    "nav.backToHome": "返回首页",
    "learnMore.title": "关于InfiniteLoopers营养搜索应用",
    "learnMore.description":
      "InfiniteLoopers营养搜索应用是一款由AI驱动的移动应用，允许用户搜索食物并获取营养信息。使用先进的图像识别和自然语言处理技术，应用提供全面的营养数据，帮助用户做出明智的饮食选择。",
    "learnMore.whyChoose": "为什么选择我们的应用？",
    "learnMore.feature1.title": "精准的食物识别",
    "learnMore.feature1.description": "我们的AI能够识别数千种不同的食物，准确率高达95%以上",
    "learnMore.feature2.title": "全面的营养数据",
    "learnMore.feature2.description": "获取卡路里、蛋白质、脂肪、碳水化合物、维生素和矿物质等详细信息",
    "learnMore.feature3.title": "个性化的饮食建议",
    "learnMore.feature3.description": "根据您的健康目标和饮食偏好，获取个性化的饮食建议",
    "learnMore.feature4.title": "离线功能",
    "learnMore.feature4.description": "即使没有网络连接，也能访问基本的营养信息",
    "learnMore.technical": "技术细节",
    "learnMore.tech1.title": "图像识别技术",
    "learnMore.tech1.description":
      "我们使用深度学习模型和计算机视觉技术，通过分析食物的形状、颜色和纹理来识别不同的食物。我们的模型经过数百万张食物图片的训练，能够准确识别各种食物。",
    "learnMore.tech2.title": "自然语言处理",
    "learnMore.tech2.description":
      "我们的应用使用先进的NLP技术来理解用户的搜索查询，即使是复杂的问题也能提供相关的结果。用户可以用自然语言提问，如'一个苹果有多少卡路里'或'哪些食物富含蛋白质'。",
    "learnMore.tech3.title": "数据库",
    "learnMore.tech3.description":
      "我们的应用拥有一个包含超过10,000种食物的全面数据库，每种食物都有详细的营养信息。我们的数据来源于权威的营养数据库，并定期更新以确保准确性。",
    "learnMore.faq": "常见问题",
    "learnMore.faq1.title": "应用是免费的吗？",
    "learnMore.faq1.description":
      "基本功能是免费的，包括食物识别和基本的营养信息。我们也提供高级订阅，解锁更多功能，如个性化的饮食计划和详细的营养分析。",
    "learnMore.faq2.title": "应用支持哪些语言？",
    "learnMore.faq2.description": "目前，我们的应用支持英语和中文。我们计划在未来添加更多语言支持。",
    "learnMore.faq3.title": "如何提高食物识别的准确性？",
    "learnMore.faq3.description":
      "为了获得最佳结果，请在良好的光线条件下拍摄食物，确保食物在图像中清晰可见。避免复杂的背景和多种食物混合在一起。",
    "learnMore.ready": "准备好开始您的健康饮食之旅了吗？",
    "learnMore.download": "立即下载InfiniteLoopers营养搜索应用，开始探索食物的营养世界",
    "learnMore.backToHome": "返回首页",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en") // 默认为英文

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

