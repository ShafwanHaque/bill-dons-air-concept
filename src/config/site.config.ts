export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "Billy Don’s Air",
    shortName: "Billy Don’s",
    logo: "/brand/company-logo.svg",
    logoLight: "/brand/company-logo.svg",
    region: "Elmore · River Region",

  },

  theme: {
    style: "clean",
    colors: {"brandPrimary": "#1F4B72", "brandSecondary": "#E0A232", "brandAccent": "#44A5C7", "page": "#101A26", "surfaceDark": "#07131F", "surfaceDarkAlt": "#132538", "surfaceElevated": "#1C3449", "surfaceSoft": "#F4F7F8", "textPrimary": "#F7FAFC", "textSecondary": "#D8E1E7", "textMuted": "#95A5AF", "textOnBrand": "#FFFFFF", "borderSubtle": "#2B4150", "borderStrong": "#657B86", "glowPrimary": "#1F4B72", "glowSecondary": "#E0A232", "networkLine": "#44A5C7", "success": "#70A982", "service1": "#1F4B72", "service2": "#44A5C7", "service3": "#E0A232", "service4": "#F1A83B", "service5": "#6983BB"},

  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call 334-391-1522",
    ctaLabel: "Request service",
    mobileEyebrow: "ELMORE · RIVER REGION",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "ELMORE · RIVER REGION",
    line1: "Billy Don’s",
    line2: "Local comfort.",
    detail: "Elmore HVAC service for homes and businesses, including AC and heating repair, maintenance, residential changeouts, commercial replacement, and 24/7 emergency service.",
    location: "Elmore · 24/7 emergency HVAC",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "service-craft",
    eyebrow: "ELMORE · RIVER REGION · LOCAL HVAC",
    headlineLine1: "HVAC help is",
    headlineLine2: "a call away.",
    description: "Heating and cooling service from an Elmore team serving the River Region with 24/7 emergency availability.",
    primaryCta: "Request service",
    secondaryCta: "Call Billy Don’s",
    locationLabel: "ELMORE · RIVER REGION",
    locationValue: "Elmore · River Region",
    edgeLabel: "ELMORE · RIVER REGION",
    bottomStatement: "AC · HEATING · CHANGEOUTS · EMERGENCY SERVICE",
    sillLabel: "Elmore · 24/7 emergency HVAC",
    serviceLabels: ["Cooling", "Heating", "Maintenance"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {"primarySrc": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//assets.cdn.filesafe.space/d83Xk87f4KOyBQSEuSvg/media/6840bd23426125de34245236.webp", "primaryAlt": "HVAC service image from Billy Don’s Air website", "primaryPosition": "center center", "fit": "cover", "backdrop": "matte", "aspectRatio": "1200 / 800"},

  },

  seo: {
    title: "Billy Don’s Air | HVAC Service in Elmore",
    description: "Elmore HVAC service for homes and businesses, including AC and heating repair, maintenance, residential changeouts, commercial replacement, and 24/7 emergency service.",

  },

  contact: {
    phoneDisplay: "334-391-1522",
    phoneHref: "tel:+13343911522",
    email: "",
    address: "Elmore, AL",
    contactUrl: "#contact",
    servicesUrl: "#services",

  },

  brandStandard: {
    eyebrow: "Elmore · 24/7 emergency HVAC",
    titleLine1: "Comfort, handled locally.",
    titleLine2: "Service built around your home.",
    bodyTitle: "Elmore · 24/7 emergency HVAC",
    body: "Billy Don’s Air serves Elmore and surrounding communities with HVAC service, maintenance, residential changeouts, commercial HVAC replacement, and emergency support.",
    callLabel: "Call now",
    availabilityLabel: "Elmore · River Region",
    panelEyebrow: "BILLY DON’S AIR",
    panelTitle: "Billy Don’s Air serves Elmore and surrounding communities with HVAC service, maintenance, residential changeouts, commercial HVAC replacement, and emergency support.",
    panelFooter: "Elmore · River Region",
    handoff: "Explore Billy Don’s Air services.",
    items: [{"icon": "cooling", "label": "Air conditioning", "detail": "Air conditioning repair and emergency service."}, {"icon": "heating", "label": "Heating", "detail": "Heating repair and support for urgent issues."}, {"icon": "maintenance", "label": "HVAC maintenance", "detail": "Maintenance service to help keep equipment operating smoothly."}],

  },

  services: {
    eyebrow: "BILLY DON’S AIR · SERVICES",
    introLine1: "Comfort,",
    introLine2: "done right.",
    summaryEyebrow: "ELMORE · RIVER REGION",
    summaryTitle: "Billy Don’s Air serves Elmore and surrounding communities with HVAC service, maintenance, residential changeouts, commercial HVAC replacement, and emergency support.",
    summaryBody: "Billy Don’s Air serves Elmore and surrounding communities with HVAC service, maintenance, residential changeouts, commercial HVAC replacement, and emergency support.",
    summaryCta: "Talk to the team",
    items: [{"name": "Air conditioning", "shortName": "Cooling", "image": "/services/01.svg", "description": "Air conditioning repair and emergency service."}, {"name": "Heating", "shortName": "Heating", "image": "/services/02.svg", "description": "Heating repair and support for urgent issues."}, {"name": "HVAC maintenance", "shortName": "Maintenance", "image": "/services/03.svg", "description": "Maintenance service to help keep equipment operating smoothly."}, {"name": "Residential changeouts", "shortName": "Changeouts", "image": "/services/04.svg", "description": "Residential equipment changeouts and replacement."}, {"name": "Commercial HVAC", "shortName": "Commercial", "image": "/services/05.svg", "description": "Commercial HVAC replacement and support."}],

  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort close",
    titleLine2: "to home.",
    description: "Elmore · River Region",
    featuredLocation: "Elmore, AL",
    locationDetail: "Serving Elmore · River Region.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Elmore · River Region",
    metrics: [{"value": "7 communities", "label": "Coverage shown"}, {"value": "24/7 HVAC availability · founded 2011", "label": "Service commitment"}, {"value": "Local team", "label": "Elmore · River Region"}],
    locations: [{"name": "Elmore, AL", "kind": "city", "lat": 32.5387, "lng": -86.3141, "hub": true}, {"name": "Eclectic, AL", "kind": "city", "lat": 32.6354, "lng": -86.0344, "hub": false}, {"name": "Montgomery, AL", "kind": "city", "lat": 32.3668, "lng": -86.3, "hub": false}, {"name": "Pike Road, AL", "kind": "city", "lat": 32.2846, "lng": -86.103, "hub": false}, {"name": "Prattville, AL", "kind": "city", "lat": 32.464, "lng": -86.4597, "hub": false}, {"name": "Wetumpka, AL", "kind": "city", "lat": 32.5437, "lng": -86.2119, "hub": false}, {"name": "Hope Hull, AL", "kind": "city", "lat": 32.2404, "lng": -86.3733, "hub": false}],

  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact Billy Don’s Air about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call Billy Don’s",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call 334-391-1522 to contact Billy Don’s Air.",

  }
};
