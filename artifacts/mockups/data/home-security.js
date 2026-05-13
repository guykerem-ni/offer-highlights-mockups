window.OFFER_HIGHLIGHTS_MOCK = {
  mode: "subscription",
  meta: {
    id: "home-security",
    title: "Offer Highlights - Home Security",
    vertical: "Home Security",
    updated: "2026-05-13"
  },
  scenario: {
    moduleHeading: "Home security offers that fit your setup",
    userPrompt:
      "I'm comparing home security options for my house and want a reliable system with 24/7 monitoring, cameras, and a deal that makes setup easier.",
    answerIntro:
      "Given your priorities, these options split into three practical paths: Vivint and ADT for professionally installed coverage, SimpliSafe and Cove for flexible DIY setup, and Brinks Home or ADT DIY for shoppers who want a familiar monitoring brand with a clear promotion.",
    recommendationBullets: [
      {
        title: "Vivint",
        text: "- best premium fit when you want pro installation and smart-home depth."
      },
      {
        title: "ADT",
        text: "- best established provider for professionally monitored home security."
      },
      {
        title: "SimpliSafe",
        text: "- best flexible DIY option when contract control matters."
      }
    ],
    disclosure:
      "Demo recommendations are illustrative. Offers, prices, rankings, and benefits can change."
  },
  labels: {
    priceDescriptor: "Current offer",
    offerNoun: "Provider",
    action: "Get quote",
    cardAction: "Compare offer",
    save: "Save"
  },
  items: [
    {
      id: "vivint",
      brand: "Vivint",
      productName: "Vivint Smart Home Security",
      heroImage: "../../resources/mockups/home-security/vivint/hero.png",
      image: "../../resources/mockups/home-security/vivint/kit-large.png",
      imageAlt: "Vivint smart home security equipment and monitored home imagery",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/home-security/vivint/logo.svg",
      gallery: [
        "../../resources/mockups/home-security/vivint/hero.png",
        "../../resources/mockups/home-security/vivint/kit-large.png",
        "../../resources/mockups/home-security/vivint/offer.png",
        "../../resources/mockups/home-security/vivint/kit.png",
        "../../resources/mockups/home-security/vivint/signal-house.png"
      ],
      rating: "9.9",
      reviews: "60,985",
      merchant: "Vivint",
      merchantColor: "#159d8c",
      brandColor: "#159d8c",
      surface: "#edf8f5",
      priceLabel: "5 months free with code 5FREE",
      matchReason: "Premium pro-installed system with smart-home controls and cameras.",
      offerHighlights: ["5 months free", "Pro installation", "Smart-home controls"],
      attributes: ["24/7 monitoring", "Outdoor cameras", "Smart locks"],
      ctaUrl: "https://www.vivint.com/",
      detail: {
        badge: "Best overall",
        uniqueValue: {
          title: "Premium smart security",
          subtitle: "A pro-installed system that feels like a smart-home platform.",
          offer:
            "The current offer pairs 5 months free with code 5FREE with Vivint's monitored security, cameras, and automation options."
        },
        variantGroups: [
          { label: "Setup", options: ["Pro install", "Custom quote"], selectedIndex: 0 },
          { label: "Focus", options: ["Whole home", "Cameras", "Automation"], selectedIndex: 0 }
        ],
        primaryOffer: {
          merchant: "Vivint",
          price: "5 months free with code 5FREE",
          badge: "Recommended",
          meta: "Quote-based smart home security with pro installation, app controls, sensors, and cameras.",
          color: "#159d8c",
          url: "https://www.vivint.com/"
        },
        sponsoredOffer: {
          merchant: "Vivint",
          price: "5 months free with code 5FREE",
          badge: "Sponsored",
          meta: "Premium monitored security and smart-home bundles.",
          color: "#159d8c",
          url: "https://www.vivint.com/"
        },
        reviewSummary:
          "Vivint is the strongest fit when the buyer wants one accountable provider for equipment, monitoring, installation, and smart-home integrations.",
        priceHistory: [59, 59, 55, 55, 49, 49, 49, 45]
      }
    },
    {
      id: "adt",
      brand: "ADT",
      productName: "ADT Home Security",
      heroImage: "../../resources/mockups/home-security/adt/system-large.png",
      image: "../../resources/mockups/home-security/adt/kit.jpg",
      imageAlt: "ADT home security equipment and monitoring kit imagery",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/home-security/adt/logo.png",
      gallery: [
        "../../resources/mockups/home-security/adt/system-large.png",
        "../../resources/mockups/home-security/adt/kit.jpg",
        "../../resources/mockups/home-security/adt/system.png",
        "../../resources/mockups/home-security/adt/logo.svg"
      ],
      rating: "9.4",
      reviews: "4,814",
      merchant: "ADT",
      merchantColor: "#0057b8",
      brandColor: "#0057b8",
      surface: "#eef5ff",
      priceLabel: "$100 ADT Visa Reward Card",
      matchReason: "Long-standing professional monitoring brand with broad service coverage.",
      offerHighlights: ["$100 reward card", "Pro monitoring", "6-month guarantee"],
      attributes: ["24/7 response", "Trusted brand", "Smart app"],
      ctaUrl: "https://www.adt.com/home-security",
      detail: {
        badge: "Trusted brand",
        uniqueValue: {
          title: "Familiar professional coverage",
          subtitle: "A known security brand for users who want monitored help on call.",
          offer:
            "The current offer includes a $100 ADT Visa Reward Card, with professional monitoring and a 6-month money-back guarantee."
        },
        variantGroups: [
          { label: "Setup", options: ["Pro install", "Custom quote"], selectedIndex: 0 },
          { label: "Plan", options: ["Secure", "Smart", "Video"], selectedIndex: 1 }
        ],
        primaryOffer: {
          merchant: "ADT",
          price: "$100 ADT Visa Reward Card",
          badge: "Established",
          meta: "Professional monitoring, installation options, app controls, and layered home security.",
          color: "#0057b8",
          url: "https://www.adt.com/home-security"
        },
        sponsoredOffer: {
          merchant: "ADT",
          price: "$100 ADT Visa Reward Card",
          badge: "Sponsored",
          meta: "A known-brand option for monitored home protection.",
          color: "#0057b8",
          url: "https://www.adt.com/home-security"
        },
        reviewSummary:
          "ADT is easiest to recommend when trust, professional monitoring, and a familiar national security provider matter more than lowest entry price.",
        priceHistory: [49, 49, 45, 45, 39, 39, 39, 35]
      }
    },
    {
      id: "brinks-home",
      brand: "Brinks Home",
      productName: "Brinks Home Security",
      heroImage: "../../resources/mockups/home-security/brinks-home/hero.webp",
      image: "../../resources/mockups/home-security/brinks-home/kit-large.png",
      imageAlt: "Brinks Home security system and smart camera marketing imagery",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/home-security/brinks-home/logo.png",
      gallery: [
        "../../resources/mockups/home-security/brinks-home/hero.webp",
        "../../resources/mockups/home-security/brinks-home/kit-large.png",
        "../../resources/mockups/home-security/brinks-home/customized.webp",
        "../../resources/mockups/home-security/brinks-home/install.webp",
        "../../resources/mockups/home-security/brinks-home/cameras.webp",
        "../../resources/mockups/home-security/brinks-home/kit.png"
      ],
      rating: "8.9",
      reviews: "7,667",
      merchant: "Brinks Home",
      merchantColor: "#006a4e",
      brandColor: "#006a4e",
      surface: "#edf7ef",
      priceLabel: "Free doorbell + free install",
      matchReason: "Professional monitoring with a package-led setup and installation promo.",
      offerHighlights: ["Free doorbell", "Free install", "Custom packages"],
      attributes: ["24/7 monitoring", "Smart cameras", "Pro support"],
      ctaUrl: "https://brinkshome.com/",
      detail: {
        badge: "Install promo",
        uniqueValue: {
          title: "Custom, not complicated",
          subtitle: "A monitored package that can be sized around the home.",
          offer:
            "The free doorbell and free install offer is useful if you want help getting started without overbuilding the system."
        },
        variantGroups: [
          { label: "Setup", options: ["Pro install", "Custom plan"], selectedIndex: 0 },
          { label: "Coverage", options: ["Entry", "Cameras", "Full home"], selectedIndex: 2 }
        ],
        primaryOffer: {
          merchant: "Brinks Home",
          price: "Free doorbell + free install",
          badge: "Promo",
          meta: "Monitored home security with package guidance, cameras, and professional support.",
          color: "#006a4e",
          url: "https://brinkshome.com/"
        },
        sponsoredOffer: {
          merchant: "Brinks Home",
          price: "Free doorbell + free install",
          badge: "Sponsored",
          meta: "Promotion-led entry point for a professionally supported setup.",
          color: "#006a4e",
          url: "https://brinkshome.com/"
        },
        reviewSummary:
          "Brinks Home is a useful middle path for users who want a guided security package and promotion-led installation rather than a fully DIY build.",
        priceHistory: [45, 45, 39, 39, 35, 35, 35, 32]
      }
    },
    {
      id: "cove",
      brand: "Cove",
      productName: "Cove Home Security",
      heroImage: "../../resources/mockups/home-security/cove/hero.png",
      image: "../../resources/mockups/home-security/cove/kit-large.png",
      imageAlt: "Cove home security panel and sensor kit on a table",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/home-security/cove/logo.png",
      gallery: [
        "../../resources/mockups/home-security/cove/hero.png",
        "../../resources/mockups/home-security/cove/kit-large.png",
        "../../resources/mockups/home-security/cove/page.png",
        "../../resources/mockups/home-security/cove/app.png",
        "../../resources/mockups/home-security/cove/sensor.png",
        "../../resources/mockups/home-security/cove/kit.png"
      ],
      rating: "8.7",
      reviews: "7,888",
      merchant: "Cove",
      merchantColor: "#22bfb2",
      brandColor: "#22bfb2",
      surface: "#e9faf8",
      priceLabel: "70% off + free HD camera",
      matchReason: "Value-led DIY setup with a clear equipment discount and monitoring story.",
      offerHighlights: ["70% off", "Free HD camera", "DIY setup"],
      attributes: ["24/7 monitoring", "60-sec setup path", "Mobile app"],
      ctaUrl: "https://www.covesmart.com/",
      detail: {
        badge: "Best value deal",
        uniqueValue: {
          title: "Deal-forward DIY",
          subtitle: "A lower-friction system for shoppers who want a strong upfront promo.",
          offer:
            "Cove's 70% off equipment plus free HD camera offer is a strong fit when upfront value is part of the decision."
        },
        variantGroups: [
          { label: "Setup", options: ["DIY", "Guided build"], selectedIndex: 0 },
          { label: "Need", options: ["House", "Apartment", "Family"], selectedIndex: 0 }
        ],
        primaryOffer: {
          merchant: "Cove",
          price: "70% off + free HD camera",
          badge: "Value",
          meta: "DIY security system builder, 24/7 monitoring, app controls, and discounted equipment.",
          color: "#22bfb2",
          url: "https://www.covesmart.com/"
        },
        sponsoredOffer: {
          merchant: "Cove",
          price: "70% off + free HD camera",
          badge: "Sponsored",
          meta: "Useful for shoppers who want a promotion before choosing sensors and cameras.",
          color: "#22bfb2",
          url: "https://www.covesmart.com/"
        },
        reviewSummary:
          "Cove works well in a Copilot answer because the decision is easy to explain: a DIY build path, clear discount, and monitoring-backed protection.",
        priceHistory: [39, 39, 35, 35, 29, 29, 29, 27]
      }
    },
    {
      id: "simplisafe",
      brand: "SimpliSafe",
      productName: "SimpliSafe Home Security",
      heroImage: "../../resources/mockups/home-security/simplisafe/hero.webp",
      image: "../../resources/mockups/home-security/simplisafe/kit-large.png",
      imageAlt: "SimpliSafe home security sensors, base station, and camera imagery",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/home-security/simplisafe/logo.png",
      gallery: [
        "../../resources/mockups/home-security/simplisafe/hero.webp",
        "../../resources/mockups/home-security/simplisafe/kit-large.png",
        "../../resources/mockups/home-security/simplisafe/app.jpg",
        "../../resources/mockups/home-security/simplisafe/outdoor.jpg",
        "../../resources/mockups/home-security/simplisafe/kit.png"
      ],
      rating: "9.1",
      reviews: "16,931",
      merchant: "SimpliSafe",
      merchantColor: "#132b4f",
      brandColor: "#132b4f",
      surface: "#eef4fb",
      priceLabel: "50% off + free camera",
      matchReason: "Flexible DIY system with optional professional monitoring and no-contract appeal.",
      offerHighlights: ["50% off", "Free camera", "No contract"],
      attributes: ["DIY setup", "Optional pro monitoring", "Outdoor cameras"],
      ctaUrl: "https://simplisafe.com/",
      detail: {
        badge: "Flexible DIY",
        uniqueValue: {
          title: "Control without commitment",
          subtitle: "A DIY system for users who want protection without a long contract.",
          offer:
            "The 50% off plus free camera offer pairs well with SimpliSafe's flexible monitoring and easy setup."
        },
        variantGroups: [
          { label: "Setup", options: ["DIY", "Pro install"], selectedIndex: 0 },
          { label: "Coverage", options: ["Starter", "Core", "Complete"], selectedIndex: 1 }
        ],
        primaryOffer: {
          merchant: "SimpliSafe",
          price: "50% off + free camera",
          badge: "Flexible",
          meta: "DIY equipment, camera options, app controls, and optional professional monitoring.",
          color: "#132b4f",
          url: "https://simplisafe.com/"
        },
        sponsoredOffer: {
          merchant: "SimpliSafe",
          price: "50% off + free camera",
          badge: "Sponsored",
          meta: "Strong fit when setup flexibility and no-contract positioning matter.",
          color: "#132b4f",
          url: "https://simplisafe.com/"
        },
        reviewSummary:
          "SimpliSafe is the clearest DIY recommendation for users who want to install quickly, avoid long commitments, and still keep monitoring available.",
        priceHistory: [35, 35, 31, 31, 29, 29, 27, 27]
      }
    },
    {
      id: "adt-diy",
      brand: "ADT DIY",
      productName: "ADT DIY Home Security",
      heroImage: "../../resources/mockups/home-security/adt-diy/kit-large.png",
      image: "../../resources/mockups/home-security/adt-diy/kit.png",
      imageAlt: "ADT DIY home security sensors and smart home security kit imagery",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/home-security/adt-diy/logo.png",
      gallery: [
        "../../resources/mockups/home-security/adt-diy/kit-large.png",
        "../../resources/mockups/home-security/adt-diy/kit.png",
        "../../resources/mockups/home-security/adt/system-large.png",
        "../../resources/mockups/home-security/adt/kit.jpg",
        "../../resources/mockups/home-security/adt/logo.svg"
      ],
      rating: "8.2",
      reviews: "4,174",
      merchant: "ADT DIY",
      merchantColor: "#0057b8",
      brandColor: "#0057b8",
      surface: "#edf4ff",
      priceLabel: "Cancel anytime",
      matchReason: "ADT-branded DIY path for shoppers who want setup control and monitoring optionality.",
      offerHighlights: ["DIY install", "Cancel anytime", "ADT app"],
      attributes: ["Self setup", "Pro monitoring option", "Smart sensors"],
      ctaUrl: "https://www.adt.com/diy",
      detail: {
        badge: "DIY ADT pick",
        uniqueValue: {
          title: "ADT, self-installed",
          subtitle: "A DIY route for users who like ADT's brand but want setup control.",
          offer:
            "ADT DIY's cancel-anytime path is useful when contract flexibility is a key qualifier."
        },
        variantGroups: [
          { label: "Setup", options: ["DIY", "Add monitoring"], selectedIndex: 0 },
          { label: "Bundle", options: ["Starter", "Camera", "Full home"], selectedIndex: 1 }
        ],
        primaryOffer: {
          merchant: "ADT DIY",
          price: "Cancel anytime",
          badge: "DIY",
          meta: "Self-installed ADT security path with app controls and professional monitoring options.",
          color: "#0057b8",
          url: "https://www.adt.com/diy"
        },
        sponsoredOffer: {
          merchant: "ADT DIY",
          price: "Cancel anytime",
          badge: "Sponsored",
          meta: "A recognizable brand for users who still want a self-setup security path.",
          color: "#0057b8",
          url: "https://www.adt.com/diy"
        },
        reviewSummary:
          "ADT DIY is a good comparator for users who want the ADT name but do not want a traditional professionally installed flow.",
        priceHistory: [33, 33, 31, 29, 29, 27, 27, 25]
      }
    }
  ],
  sources: [
    {
      label: "Home security comparison reference",
      url: "https://www.top10.com/home-security/comparison"
    },
    {
      label: "Vivint monitoring",
      url: "https://www.vivint.com/products/monitoring"
    },
    {
      label: "ADT home security",
      url: "https://www.adt.com/home-security"
    },
    {
      label: "Brinks Home",
      url: "https://brinkshome.com/"
    },
    {
      label: "Cove",
      url: "https://www.covesmart.com/"
    },
    {
      label: "SimpliSafe",
      url: "https://simplisafe.com/"
    },
    {
      label: "ADT DIY",
      url: "https://www.adt.com/diy"
    }
  ]
};
