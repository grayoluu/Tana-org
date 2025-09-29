export type Language = "en" | "sw"

export interface Translation {
  [key: string]: string | Translation
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      impact: "Impact",
      documentation: "Documentation",
      transparency: "Transparency",
      visionMission: "Vision & Mission",
      team: "Our Team",
      governance: "Governance",
      viewProjects: "View Projects",
    },
    home: {
      hero: {
        title: "Transforming Communities Through Blockchain Technology",
        subtitle:
          "A community-driven impact organization using blockchain technology to deliver measurable environmental and social outcomes in Kenya's Tana River Basin.",
        cta: "Explore Our Impact",
        learnMore: "Learn More",
      },
      stats: {
        projectsFunded: "Projects Funded",
        peopleImpacted: "People Impacted",
        carbonOffset: "CO₂ Offset (tons)",
        fundsDeployed: "Funds Deployed",
      },
      mission: {
        title: "Our Mission",
        description:
          "We leverage blockchain technology to create transparent, measurable impact in environmental conservation and community development across Kenya's Tana River Basin.",
        transparency: "Complete Transparency",
        transparencyDesc: "Every transaction and impact metric is recorded on the blockchain for full accountability.",
        community: "Community-Driven",
        communityDesc: "Local communities lead project selection and implementation with our technical support.",
        measurable: "Measurable Impact",
        measurableDesc: "Real-time tracking of environmental and social outcomes using verified data.",
      },
    },
    common: {
      loading: "Loading...",
      error: "Error",
      retry: "Retry",
      close: "Close",
      open: "Open",
      menu: "Menu",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      download: "Download",
      share: "Share",
      contact: "Contact",
      learnMore: "Learn More",
      getStarted: "Get Started",
      readMore: "Read More",
      viewAll: "View All",
    },
  },
  sw: {
    nav: {
      home: "Nyumbani",
      about: "Kuhusu",
      projects: "Miradi",
      impact: "Athari",
      documentation: "Nyaraka",
      transparency: "Uwazi",
      visionMission: "Maono na Dhamira",
      team: "Timu Yetu",
      governance: "Utawala",
      viewProjects: "Ona Miradi",
    },
    home: {
      hero: {
        title: "Kubadilisha Jamii Kupitia Teknolojia ya Blockchain",
        subtitle:
          "Shirika la athari linalongozwa na jamii linalotumia teknolojia ya blockchain kutoa matokeo ya mazingira na kijamii yanayoweza kupimwa katika Bonde la Mto Tana, Kenya.",
        cta: "Chunguza Athari Yetu",
        learnMore: "Jifunze Zaidi",
      },
      stats: {
        projectsFunded: "Miradi Ilifadhiliwa",
        peopleImpacted: "Watu Walioathiriwa",
        carbonOffset: "Kaboni Iliyopunguzwa (tani)",
        fundsDeployed: "Fedha Zilizotumika",
      },
      mission: {
        title: "Dhamira Yetu",
        description:
          "Tunatumia teknolojia ya blockchain kuunda athari ya uwazi na inayoweza kupimwa katika uhifadhi wa mazingira na maendeleo ya jamii katika Bonde la Mto Tana, Kenya.",
        transparency: "Uwazi Kamili",
        transparencyDesc: "Kila muamala na kipimo cha athari kinarekodiwa kwenye blockchain kwa uwajibikaji kamili.",
        community: "Inaongozwa na Jamii",
        communityDesc: "Jamii za mitaani zinaongoza uchaguzi na utekelezaji wa miradi na msaada wetu wa kiufundi.",
        measurable: "Athari Inayoweza Kupimwa",
        measurableDesc:
          "Ufuatiliaji wa wakati halisi wa matokeo ya mazingira na kijamii kwa kutumia data iliyothibitishwa.",
      },
    },
    common: {
      loading: "Inapakia...",
      error: "Hitilafu",
      retry: "Jaribu Tena",
      close: "Funga",
      open: "Fungua",
      menu: "Menyu",
      search: "Tafuta",
      filter: "Chuja",
      sort: "Panga",
      download: "Pakua",
      share: "Shiriki",
      contact: "Wasiliana",
      learnMore: "Jifunze Zaidi",
      getStarted: "Anza",
      readMore: "Soma Zaidi",
      viewAll: "Ona Yote",
    },
  },
}

export function getTranslation(language: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[language]

  for (const k of keys) {
    value = value?.[k]
  }

  return typeof value === "string" ? value : key
}

export function useTranslation(language: Language) {
  return {
    t: (key: string) => getTranslation(language, key),
    language,
  }
}
