window.OFFER_HIGHLIGHTS_MOCK = {
  mode: "subscription",
  meta: {
    id: "website-builders",
    title: "Offer Highlights - Website Builders",
    vertical: "Website Builders",
    updated: "2026-05-11"
  },
  scenario: {
    moduleHeading: "Top picks that fit your needs",
    userPrompt: "I'm building a website for a small consulting business, and need a website builder that looks polished, is easy to launch, and won't require a developer.",
    answerIntro: "A few website builders stand out from the available partner data: Wix gives you the most flexible setup, Squarespace is strongest for polished templates, and GoDaddy is the quickest route to a simple business site.",
    recommendationBullets: [
      {
        title: "Wix",
        text: "- best overall value for a flexible, business-ready website."
      },
      {
        title: "Squarespace",
        text: "- best for premium templates and visual polish."
      },
      {
        title: "GoDaddy",
        text: "- best for getting a simple business site online quickly."
      }
    ],
    disclosure: "Demo data adapted from Natural Intelligence website-builder partner context. Offers, prices, and benefits are illustrative for the mock."
  },
  labels: {
    priceDescriptor: "Starting at",
    offerNoun: "Partner",
    action: "Visit"
  },
  items: [
    {
      id: "wix",
      brand: "Wix",
      productName: "Wix Website Builder",
      heroImage: "../../resources/screenshots/landing-pages/wix.png",
      image: "../../resources/mockups/website-builders/wix/hero.jpg",
      imageAlt: "Wix marketing website hero showing a website built with Wix",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/website-builders/wix/logo.ico",
      gallery: [
        "../../resources/mockups/website-builders/wix/hero.jpg",
        "../../resources/screenshots/landing-pages/wix.png"
      ],
      rating: "9.8",
      reviews: "27,160",
      merchant: "Wix",
      merchantColor: "#126ee2",
      brandColor: "#126ee2",
      surface: "#edf6ff",
      priceLabel: "Plans from $17/mo",
      matchReason: "Flexible editor, AI setup, and business tools in one place.",
      offerHighlights: ["AI site generator", "SEO tools", "Booking and payments"],
      attributes: ["No-code launch", "Business templates", "Marketing suite"],
      ctaUrl: "https://www.wix.com/",
      detail: {
        badge: "Best overall",
        variantGroups: [
          {
            label: "Plan",
            options: ["Light", "Core", "Business"],
            selectedIndex: 1
          },
          {
            label: "Use",
            options: ["Consulting", "Portfolio", "Store"],
            selectedIndex: 0
          }
        ],
        primaryOffer: {
          merchant: "Wix",
          price: "Plans from $17/mo",
          badge: "Recommended",
          meta: "AI website creation, SEO, forms, bookings, and marketing tools.",
          color: "#126ee2",
          url: "https://www.wix.com/"
        },
        secondaryOffers: [
          {
            merchant: "Top10",
            price: "Comparison profile",
            meta: "Review partner fit, pros and cons, and launch checklist.",
            color: "#182a4d",
            url: "https://www.top10.com/"
          }
        ],
        reviewSummary: "Users tend to like Wix for breadth of templates, guided AI setup, and the ability to keep improving the site after launch.",
        priceHistory: [22, 22, 19, 19, 17, 17, 17, 17]
      }
    },
    {
      id: "squarespace",
      brand: "Squarespace",
      productName: "Squarespace Website Builder",
      heroImage: "../../resources/screenshots/landing-pages/squarespace.png",
      image: "../../resources/mockups/website-builders/squarespace/hero.webp",
      imageAlt: "Squarespace website creation marketing hero with desktop site preview",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/website-builders/squarespace/logo.png",
      gallery: [
        "../../resources/mockups/website-builders/squarespace/hero.webp",
        "../../resources/screenshots/landing-pages/squarespace.png"
      ],
      rating: "9.0",
      reviews: "2,802",
      merchant: "Squarespace",
      merchantColor: "#121212",
      brandColor: "#121212",
      surface: "#f3f0ea",
      priceLabel: "Save 10% with code TOP10",
      matchReason: "Polished templates and brand-forward page designs.",
      offerHighlights: ["Premium templates", "AI content tools", "Commerce-ready"],
      attributes: ["Design-forward", "Free domain", "Built-in analytics"],
      ctaUrl: "https://www.squarespace.com/",
      detail: {
        badge: "Design pick",
        variantGroups: [
          {
            label: "Plan",
            options: ["Personal", "Business", "Commerce"],
            selectedIndex: 1
          }
        ],
        primaryOffer: {
          merchant: "Squarespace",
          price: "Save 10% with code TOP10",
          badge: "Promo",
          meta: "Designer templates, domain options, commerce tools, and AI-powered content.",
          color: "#121212",
          url: "https://www.squarespace.com/"
        },
        secondaryOffers: [
          {
            merchant: "Top10",
            price: "Comparison profile",
            meta: "Useful when visual polish matters more than total setup flexibility.",
            color: "#182a4d",
            url: "https://www.top10.com/"
          }
        ],
        reviewSummary: "Squarespace is a strong fit when the stakeholder cares about polished templates and a premium visual impression from day one.",
        priceHistory: [24, 24, 23, 22, 21, 21, 20, 20]
      }
    },
    {
      id: "godaddy",
      brand: "GoDaddy",
      productName: "GoDaddy Website Builder",
      heroImage: "../../resources/screenshots/landing-pages/godaddy-fallback.svg",
      image: "../../resources/mockups/website-builders/godaddy/hero.jpg",
      imageAlt: "GoDaddy Website Builder marketing hero with website editor preview",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/website-builders/godaddy/logo.svg",
      gallery: [
        "../../resources/mockups/website-builders/godaddy/hero.jpg",
        "../../resources/screenshots/landing-pages/godaddy-fallback.svg"
      ],
      rating: "9.3",
      reviews: "136,959",
      merchant: "GoDaddy",
      merchantColor: "#00a4a6",
      brandColor: "#00a4a6",
      surface: "#e9fbf8",
      priceLabel: "Plans from $9.99/mo",
      matchReason: "Guided setup for a simple business site and marketing basics.",
      offerHighlights: ["Fast setup", "Marketing tools", "Domain services"],
      attributes: ["Guided editor", "Email marketing", "Appointments"],
      ctaUrl: "https://www.godaddy.com/websites/website-builder",
      detail: {
        badge: "Fastest setup",
        variantGroups: [
          {
            label: "Plan",
            options: ["Basic", "Premium", "Commerce"],
            selectedIndex: 0
          }
        ],
        primaryOffer: {
          merchant: "GoDaddy",
          price: "Plans from $9.99/mo",
          badge: "Quick launch",
          meta: "Website builder, domain options, appointment tools, and basic marketing.",
          color: "#00a4a6",
          url: "https://www.godaddy.com/websites/website-builder"
        },
        secondaryOffers: [
          {
            merchant: "Top10",
            price: "Comparison profile",
            meta: "Best fit when speed matters more than custom design depth.",
            color: "#182a4d",
            url: "https://www.top10.com/"
          }
        ],
        reviewSummary: "GoDaddy fits users who want a quick path to a complete business site without managing many design decisions.",
        priceHistory: [15, 15, 12, 12, 10, 10, 10, 10]
      }
    },
    {
      id: "ionos",
      brand: "IONOS",
      productName: "IONOS Website Builder",
      heroImage: "../../resources/screenshots/landing-pages/ionos.png",
      image: "../../resources/mockups/website-builders/ionos/hero.png",
      imageAlt: "IONOS Website Builder marketing hero showing website templates",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/website-builders/ionos/logo.svg",
      gallery: [
        "../../resources/mockups/website-builders/ionos/hero.png",
        "../../resources/screenshots/landing-pages/ionos.png"
      ],
      rating: "8.5",
      reviews: "42,187",
      merchant: "IONOS",
      merchantColor: "#083a90",
      brandColor: "#083a90",
      surface: "#edf3ff",
      priceLabel: "Intro offer available",
      matchReason: "No-code builder with hosting, support, and business basics.",
      offerHighlights: ["Hosting bundle", "SEO support", "Responsive templates"],
      attributes: ["Guided setup", "Analytics", "Business email"],
      ctaUrl: "https://www.ionos.com/websites/website-builder",
      detail: {
        badge: "Hosting bundle",
        variantGroups: [
          {
            label: "Plan",
            options: ["Starter", "Plus", "Pro"],
            selectedIndex: 1
          }
        ],
        primaryOffer: {
          merchant: "IONOS",
          price: "Intro offer available",
          meta: "Website builder with hosting, responsive templates, SEO, and analytics.",
          color: "#083a90",
          url: "https://www.ionos.com/websites/website-builder"
        },
        secondaryOffers: [
          {
            merchant: "Top10",
            price: "Comparison profile",
            meta: "Useful for users who want website and hosting packaged together.",
            color: "#182a4d",
            url: "https://www.top10.com/"
          }
        ],
        reviewSummary: "IONOS is positioned for practical business users who want hosting and site-building handled together.",
        priceHistory: [18, 18, 14, 12, 12, 11, 11, 10]
      }
    },
    {
      id: "site123",
      brand: "SITE123",
      productName: "SITE123 Website Builder",
      heroImage: "../../resources/screenshots/landing-pages/site123.png",
      image: "../../resources/mockups/website-builders/site123/hero.png",
      imageAlt: "SITE123 marketing hero with website builder interface preview",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/website-builders/site123/logo.png",
      gallery: [
        "../../resources/mockups/website-builders/site123/hero.png",
        "../../resources/screenshots/landing-pages/site123.png"
      ],
      rating: "8.7",
      reviews: "9,053",
      merchant: "SITE123",
      merchantColor: "#1d9b5f",
      brandColor: "#1d9b5f",
      surface: "#eefbf3",
      priceLabel: "40% off for 72 hours",
      matchReason: "Quick template-led setup for a starter business presence.",
      offerHighlights: ["Ready-made templates", "Live chat", "Free domain"],
      attributes: ["Fast launch", "Simple editor", "Starter discount"],
      ctaUrl: "https://www.site123.com/",
      detail: {
        badge: "Starter pick",
        variantGroups: [
          {
            label: "Plan",
            options: ["Free", "Basic", "Advanced"],
            selectedIndex: 1
          }
        ],
        primaryOffer: {
          merchant: "SITE123",
          price: "40% off for 72 hours",
          badge: "Limited time",
          meta: "Ready-made templates, live chat, and a first-year domain.",
          color: "#1d9b5f",
          url: "https://www.site123.com/"
        },
        secondaryOffers: [
          {
            merchant: "Top10",
            price: "Comparison profile",
            meta: "Best for the simplest guided build path.",
            color: "#182a4d",
            url: "https://www.top10.com/"
          }
        ],
        reviewSummary: "SITE123 is easy to explain inside Copilot because the benefit is direct: choose a template, fill in content, and publish.",
        priceHistory: [14, 14, 12, 10, 10, 9, 9, 9]
      }
    },
    {
      id: "hostgator",
      brand: "HostGator",
      productName: "HostGator Website Builder",
      heroImage: "../../resources/screenshots/landing-pages/hostgator-fallback.svg",
      image: "../../resources/mockups/website-builders/hostgator/hero.png",
      imageAlt: "HostGator marketing website illustration for building a site",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/website-builders/hostgator/logo.ico",
      gallery: [
        "../../resources/mockups/website-builders/hostgator/hero.png",
        "../../resources/screenshots/landing-pages/hostgator-fallback.svg"
      ],
      rating: "8.7",
      reviews: "17,087",
      merchant: "HostGator",
      merchantColor: "#f5a623",
      brandColor: "#b66c00",
      surface: "#fff5d8",
      priceLabel: "Promo: get 55% off",
      matchReason: "Builder plus hosting for a functional site on a budget.",
      offerHighlights: ["Hosting included", "Template library", "Promo pricing"],
      attributes: ["Hosting bundle", "Drag and drop", "Budget option"],
      ctaUrl: "https://www.hostgator.com/website-builder",
      detail: {
        badge: "Budget bundle",
        variantGroups: [
          {
            label: "Plan",
            options: ["Express Start", "Express Site", "Store"],
            selectedIndex: 0
          }
        ],
        primaryOffer: {
          merchant: "HostGator",
          price: "Promo: get 55% off",
          badge: "Promo",
          meta: "Hosting, templates, and customizable page elements.",
          color: "#f5a623",
          url: "https://www.hostgator.com/website-builder"
        },
        secondaryOffers: [
          {
            merchant: "Top10",
            price: "Comparison profile",
            meta: "Useful when hosting and builder pricing need to be compared together.",
            color: "#182a4d",
            url: "https://www.top10.com/"
          }
        ],
        reviewSummary: "HostGator is a useful comparator when the user is sensitive to hosting bundles and entry price.",
        priceHistory: [16, 14, 14, 12, 10, 9, 9, 8]
      }
    }
  ],
  sources: [
    {
      label: "Offer Highlights MVP email thread",
      url: "https://www.microsoft.com/en-us/microsoft-copilot"
    },
    {
      label: "Microsoft Copilot shopping support",
      url: "https://support.microsoft.com/en-us/topic/shopping-with-microsoft-copilot-28c1e48e-e7d5-4e34-8f37-4e9a2df6d666"
    }
  ]
};
