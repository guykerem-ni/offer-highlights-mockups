window.OFFER_HIGHLIGHTS_MOCK = {
  mode: "subscription",
  meta: {
    id: "vpn",
    title: "Offer Highlights - VPN",
    vertical: "VPN Services",
    updated: "2026-05-12"
  },
  scenario: {
    moduleHeading: "VPN picks that fit how you browse",
    userPrompt: "I want a VPN for travel, public Wi-Fi, streaming, and keeping my browsing private. Which providers are worth comparing?",
    answerIntro: "The current VPN comparison set points to six useful choices: ExpressVPN for a premium all-around VPN, NordVPN for a large security-led network, Norton VPN for familiar household protection, Surfshark and IPVanish for unlimited-device coverage, and Proton VPN for privacy-first users who want a credible free path.",
    recommendationBullets: [
      {
        title: "ExpressVPN",
        text: "- strongest premium pick for travel, streaming, and broad privacy tooling."
      },
      {
        title: "Surfshark",
        text: "- best fit when one subscription needs to cover many devices."
      },
      {
        title: "Proton VPN",
        text: "- strongest privacy-first choice with an open-source, no-ads posture."
      }
    ],
    disclosure: "Demo data adapted from the Top10 VPN comparison page and official provider pages captured on 2026-05-12. Offers and prices can change."
  },
  labels: {
    priceDescriptor: "Plan highlight",
    offerNoun: "Provider",
    action: "Visit"
  },
  items: [
    {
      id: "expressvpn",
      brand: "ExpressVPN",
      productName: "ExpressVPN",
      heroImage: "../../resources/mockups/vpn/expressvpn/hero.png",
      image: "../../resources/mockups/vpn/expressvpn/marketing.jpg",
      imageAlt: "ExpressVPN product visual showing the VPN app experience",
      imageFit: "contain",
      brandLogo: "../../resources/mockups/vpn/expressvpn/logo.svg",
      gallery: [
        "../../resources/mockups/vpn/expressvpn/hero.png",
        "../../resources/mockups/vpn/expressvpn/marketing.jpg",
        "../../resources/mockups/vpn/expressvpn/location.png",
        "../../resources/mockups/vpn/expressvpn/security.png",
        "../../resources/mockups/vpn/expressvpn/speed.png"
      ],
      rating: "8.6",
      reviews: "Top10 rank #1",
      merchant: "ExpressVPN",
      merchantColor: "#da3940",
      brandColor: "#da3940",
      surface: "#fff1ef",
      priceLabel: "From $3.49/mo",
      matchReason: "Premium privacy suite with a 105-country network and 30-day guarantee.",
      offerHighlights: ["105-country network", "Strict no-logs policy", "30-day guarantee"],
      attributes: ["Lightway protocol", "Threat Manager", "Up to 14 devices"],
      ctaUrl: "https://www.expressvpn.com/",
      detail: {
        badge: "Best overall",
        uniqueValue: {
          title: "Premium all-rounder",
          subtitle: "A polished VPN for travel, streaming, and public Wi-Fi.",
          offer: "Includes ExpressVPN, privacy/security tools, a 105-country network, and a 30-day money-back guarantee."
        },
        variantGroups: [
          {
            label: "Plan",
            options: ["1 month", "12 months", "2 years"],
            selectedIndex: 2
          },
          {
            label: "Need",
            options: ["Travel", "Streaming", "Wi-Fi"],
            selectedIndex: 0
          }
        ],
        primaryOffer: {
          merchant: "ExpressVPN",
          price: "From $3.49/mo",
          badge: "Premium pick",
          meta: "VPN plus privacy tools, high-speed access, and a 30-day money-back guarantee.",
          color: "#da3940",
          url: "https://www.expressvpn.com/"
        },
        sponsoredOffer: {
          merchant: "ExpressVPN",
          price: "From $3.49/mo",
          meta: "Featured provider from the VPN comparison set.",
          color: "#da3940",
          url: "https://www.expressvpn.com/"
        },
        reviewSummary: "ExpressVPN is the clean premium fit when the user wants strong privacy defaults, broad country coverage, and minimal setup friction."
      }
    },
    {
      id: "nordvpn",
      brand: "NordVPN",
      productName: "NordVPN",
      heroImage: "../../resources/mockups/vpn/nordvpn/hero.svg",
      image: "../../resources/mockups/vpn/nordvpn/top10-hero.jpg",
      imageAlt: "NordVPN privacy illustration with a person using a tablet",
      imageFit: "contain",
      brandLogo: "../../resources/mockups/vpn/nordvpn/logo.svg",
      gallery: [
        "../../resources/mockups/vpn/nordvpn/hero.svg",
        "../../resources/mockups/vpn/nordvpn/top10-hero.jpg",
        "../../resources/mockups/vpn/nordvpn/press-support.svg",
        "../../resources/mockups/vpn/nordvpn/logo-horizontal.svg",
        "../../resources/mockups/vpn/nordvpn/top10-logo.png"
      ],
      rating: "8.5",
      reviews: "Top10 rank #2",
      merchant: "NordVPN",
      merchantColor: "#4687ff",
      brandColor: "#4687ff",
      surface: "#eef5ff",
      priceLabel: "2-year plans from $2.99/mo",
      matchReason: "Security-led VPN with a large server network and malware-blocking extras.",
      offerHighlights: ["8,300+ servers", "Threat Protection Pro", "30-day guarantee"],
      attributes: ["NordLynx protocol", "24/7 support", "Dedicated IP option"],
      ctaUrl: "https://nordvpn.com/",
      detail: {
        badge: "Security pick",
        uniqueValue: {
          title: "Security first",
          subtitle: "A large-network VPN with threat protection built in.",
          offer: "Highlights include 8,300+ servers, Threat Protection Pro, NordLynx, and a 30-day money-back guarantee."
        },
        variantGroups: [
          {
            label: "Plan",
            options: ["Basic", "Plus", "Complete"],
            selectedIndex: 1
          },
          {
            label: "Need",
            options: ["Privacy", "Speed", "Malware"],
            selectedIndex: 2
          }
        ],
        primaryOffer: {
          merchant: "NordVPN",
          price: "2-year plans from $2.99/mo",
          badge: "Large network",
          meta: "VPN with malware and scam protection, 24/7 support, and a 30-day money-back guarantee.",
          color: "#4687ff",
          url: "https://nordvpn.com/"
        },
        sponsoredOffer: {
          merchant: "NordVPN",
          price: "2-year plans from $2.99/mo",
          meta: "Featured provider from the VPN comparison set.",
          color: "#4687ff",
          url: "https://nordvpn.com/"
        },
        reviewSummary: "NordVPN is positioned well for users who care about network scale, threat blocking, and a security-forward brand."
      }
    },
    {
      id: "norton-vpn",
      brand: "Norton",
      productName: "Norton VPN",
      heroImage: "../../resources/mockups/vpn/norton-vpn/hero-vpn-ui.jpg",
      image: "../../resources/mockups/vpn/norton-vpn/map.jpg",
      imageAlt: "Norton VPN app interface showing a connected United States location",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/vpn/norton-vpn/logo.svg",
      gallery: [
        "../../resources/mockups/vpn/norton-vpn/hero-vpn-ui.jpg",
        "../../resources/mockups/vpn/norton-vpn/map.jpg",
        "../../resources/mockups/vpn/norton-vpn/hero.jpg",
        "../../resources/mockups/vpn/norton-vpn/easy-to-use.jpg",
        "../../resources/mockups/vpn/norton-vpn/advanced-protection.jpg",
        "../../resources/mockups/vpn/norton-vpn/stream-content.jpg"
      ],
      rating: "8.8",
      reviews: "Top10 rank #3",
      merchant: "Norton",
      merchantColor: "#f6d33f",
      brandColor: "#24211f",
      surface: "#fff8d8",
      priceLabel: "$79.99 first yr",
      matchReason: "Familiar security brand with VPN, no-log policy, and multi-device coverage.",
      offerHighlights: ["5 devices", "2,800 servers", "No-log policy"],
      attributes: ["Kill switch", "Split tunneling", "Anonymous browsing"],
      ctaUrl: "https://us.norton.com/products/norton-vpn",
      detail: {
        badge: "Household security",
        uniqueValue: {
          title: "Familiar protection",
          subtitle: "A VPN path from a mainstream consumer security brand.",
          offer: "Norton VPN Standard includes 5-device coverage, 2,800 servers in 28 countries, and privacy controls such as kill switch and split tunneling."
        },
        variantGroups: [
          {
            label: "Plan",
            options: ["VPN Standard", "360 Deluxe", "360 Premium"],
            selectedIndex: 0
          },
          {
            label: "Need",
            options: ["Family", "Travel", "Privacy"],
            selectedIndex: 0
          }
        ],
        primaryOffer: {
          merchant: "Norton",
          price: "$79.99 first yr",
          badge: "Security brand",
          meta: "VPN Standard with 5 devices, no-log policy, split tunneling, and 2,800 servers in 28 countries.",
          color: "#24211f",
          url: "https://us.norton.com/products/norton-vpn"
        },
        sponsoredOffer: {
          merchant: "Norton",
          price: "$79.99 first yr",
          meta: "Featured provider from the VPN comparison set.",
          color: "#24211f",
          url: "https://us.norton.com/products/norton-vpn"
        },
        reviewSummary: "Norton VPN fits users who want VPN functionality from a security vendor they already recognize."
      }
    },
    {
      id: "surfshark",
      brand: "Surfshark",
      productName: "Surfshark VPN",
      heroImage: "../../resources/mockups/vpn/surfshark/hero.webp",
      image: "../../resources/mockups/vpn/surfshark/vpn-main.webp",
      imageAlt: "Surfshark app interface on a smartphone",
      imageFit: "cover",
      brandLogo: "../../resources/mockups/vpn/surfshark/logo.svg",
      gallery: [
        "../../resources/mockups/vpn/surfshark/hero.webp",
        "../../resources/mockups/vpn/surfshark/vpn-main.webp",
        "../../resources/mockups/vpn/surfshark/experience.svg",
        "../../resources/mockups/vpn/surfshark/speed.svg",
        "../../resources/mockups/vpn/surfshark/countries.svg"
      ],
      rating: "8.7",
      reviews: "40M+ downloads",
      merchant: "Surfshark",
      merchantColor: "#16c8bb",
      brandColor: "#16c8bb",
      surface: "#e9fffb",
      priceLabel: "Unlimited devices",
      matchReason: "One subscription can cover the household without device caps.",
      offerHighlights: ["Unlimited devices", "No-logs policy", "30-day guarantee"],
      attributes: ["VPN", "Alert", "Alternative ID"],
      ctaUrl: "https://surfshark.com/",
      detail: {
        badge: "Unlimited devices",
        uniqueValue: {
          title: "Whole-house coverage",
          subtitle: "Protect phones, laptops, and browsers without juggling device limits.",
          offer: "Includes unlimited-device VPN access, no-logs privacy posture, 24/7 support, and a 30-day money-back guarantee."
        },
        variantGroups: [
          {
            label: "Plan",
            options: ["Starter", "One", "One+"],
            selectedIndex: 1
          },
          {
            label: "Need",
            options: ["Devices", "Privacy", "Identity"],
            selectedIndex: 0
          }
        ],
        primaryOffer: {
          merchant: "Surfshark",
          price: "Unlimited devices",
          badge: "Household fit",
          meta: "VPN access for unlimited devices with no-logs policy and 30-day guarantee.",
          color: "#16c8bb",
          url: "https://surfshark.com/"
        },
        sponsoredOffer: {
          merchant: "Surfshark",
          price: "Unlimited devices",
          meta: "Featured provider from the VPN comparison set.",
          color: "#16c8bb",
          url: "https://surfshark.com/"
        },
        reviewSummary: "Surfshark is strongest where the buying question is not just privacy, but how many people and devices need coverage."
      }
    },
    {
      id: "ipvanish",
      brand: "IPVanish",
      productName: "IPVanish VPN",
      heroImage: "../../resources/mockups/vpn/ipvanish/hero.webp",
      image: "../../resources/mockups/vpn/ipvanish/app-collage.webp",
      imageAlt: "IPVanish app visuals across devices",
      imageFit: "contain",
      brandLogo: "../../resources/mockups/vpn/ipvanish/logo.svg",
      gallery: [
        "../../resources/mockups/vpn/ipvanish/hero.webp",
        "../../resources/mockups/vpn/ipvanish/app-collage.webp",
        "../../resources/mockups/vpn/ipvanish/mobile-map.webp",
        "../../resources/mockups/vpn/ipvanish/learn-how.png",
        "../../resources/mockups/vpn/ipvanish/os-icons.svg"
      ],
      rating: "8.9",
      reviews: "Top10 rank #5",
      merchant: "IPVanish",
      merchantColor: "#74b721",
      brandColor: "#74b721",
      surface: "#f1fae8",
      priceLabel: "From $2.19/mo",
      matchReason: "Fast VPN with no connection caps and WireGuard support.",
      offerHighlights: ["Unlimited devices", "No-logs privacy", "30-day guarantee"],
      attributes: ["WireGuard", "Threat Protection", "eSIM bonus"],
      ctaUrl: "https://www.ipvanish.com/",
      detail: {
        badge: "Unlimited connections",
        uniqueValue: {
          title: "No device caps",
          subtitle: "A practical VPN when every device in the house needs coverage.",
          offer: "Essential plan starts at $2.19/mo with unlimited devices, no-logs privacy, Threat Protection, and 30-day guarantee on yearly and 2-year subscriptions."
        },
        variantGroups: [
          {
            label: "Plan",
            options: ["Essential", "Advanced", "Monthly"],
            selectedIndex: 0
          },
          {
            label: "Need",
            options: ["Devices", "Speed", "Travel"],
            selectedIndex: 1
          }
        ],
        primaryOffer: {
          merchant: "IPVanish",
          price: "From $2.19/mo",
          badge: "Value pick",
          meta: "Unlimited devices, no-logs privacy, WireGuard, Threat Protection, and eSIM data bonus.",
          color: "#74b721",
          url: "https://www.ipvanish.com/"
        },
        sponsoredOffer: {
          merchant: "IPVanish",
          price: "From $2.19/mo",
          meta: "Featured provider from the VPN comparison set.",
          color: "#74b721",
          url: "https://www.ipvanish.com/"
        },
        reviewSummary: "IPVanish works well for users who want a value-forward VPN with unlimited device coverage and speed-oriented protocols."
      }
    },
    {
      id: "proton-vpn",
      brand: "Proton VPN",
      productName: "Proton VPN",
      heroImage: "../../resources/mockups/vpn/proton-vpn/hero.png",
      image: "../../resources/mockups/vpn/proton-vpn/streaming.png",
      imageAlt: "Proton VPN interface and privacy-focused product visuals",
      imageFit: "contain",
      brandLogo: "../../resources/mockups/vpn/proton-vpn/logo.svg",
      gallery: [
        "../../resources/mockups/vpn/proton-vpn/hero.png",
        "../../resources/mockups/vpn/proton-vpn/streaming.png",
        "../../resources/mockups/vpn/proton-vpn/no-logs.png",
        "../../resources/mockups/vpn/proton-vpn/browser-extensions.png",
        "../../resources/mockups/vpn/proton-vpn/mobile-device.png"
      ],
      rating: "8.7",
      reviews: "100M+ users",
      merchant: "Proton VPN",
      merchantColor: "#6d4aff",
      brandColor: "#6d4aff",
      surface: "#f1edff",
      priceLabel: "Free plan available",
      matchReason: "Privacy-first VPN with open-source apps, no ads, and a credible free tier.",
      offerHighlights: ["Free plan", "Open source apps", "30-day guarantee"],
      attributes: ["NetShield", "10 devices", "140+ countries"],
      ctaUrl: "https://protonvpn.com/",
      detail: {
        badge: "Privacy-first",
        uniqueValue: {
          title: "Privacy by design",
          subtitle: "A VPN for users who care about transparency and free access.",
          offer: "Includes no-logs, no-ads positioning, open-source apps, NetShield, 10-device paid plans, and a 30-day money-back guarantee."
        },
        variantGroups: [
          {
            label: "Plan",
            options: ["Free", "Plus", "Unlimited"],
            selectedIndex: 1
          },
          {
            label: "Need",
            options: ["Privacy", "Streaming", "Travel"],
            selectedIndex: 0
          }
        ],
        primaryOffer: {
          merchant: "Proton VPN",
          price: "Free plan available",
          badge: "Privacy pick",
          meta: "No-logs VPN with open-source apps, NetShield, up to 10 devices on paid plans, and servers in 140+ countries.",
          color: "#6d4aff",
          url: "https://protonvpn.com/"
        },
        sponsoredOffer: {
          merchant: "Proton VPN",
          price: "Free plan available",
          meta: "Featured provider from the VPN comparison set.",
          color: "#6d4aff",
          url: "https://protonvpn.com/"
        },
        reviewSummary: "Proton VPN is the best fit when the decision depends on privacy credibility, open-source transparency, and a real free tier."
      }
    }
  ],
  sources: [
    {
      label: "Top10 VPN comparison",
      url: "https://www.top10.com/vpn"
    },
    {
      label: "ExpressVPN",
      url: "https://www.expressvpn.com/"
    },
    {
      label: "NordVPN",
      url: "https://nordvpn.com/"
    },
    {
      label: "Norton VPN",
      url: "https://us.norton.com/products/norton-vpn"
    },
    {
      label: "Surfshark",
      url: "https://surfshark.com/"
    },
    {
      label: "IPVanish",
      url: "https://www.ipvanish.com/"
    },
    {
      label: "Proton VPN",
      url: "https://protonvpn.com/"
    }
  ]
};
