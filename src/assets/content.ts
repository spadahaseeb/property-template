import {
  Bath,
  Bed,
  Copy,
  File,
  House,
  HousePlus,
  LaptopMinimalCheck,
  School,
} from "lucide-react";

export const NavigationLinksContent = [
  {
    text: "home",
    link: "/",
    icon: true,
    hoverLinks: [
      { text: "home 1", link: "/" },
      { text: "home 2", link: "/home2" },
      { text: "home 3", link: "/home3" },
      { text: "home 4", link: "/home4" },
    ],
  },
  {
    text: "listings",
    link: "/",
    icon: true,
    hoverLinks: [
      { text: "listings 1", link: "/" },
      { text: "listings 2", link: "/" },
      { text: "listings 3", link: "/" },
      { text: "listings 4", link: "/" },
      { text: "listings 5", link: "/" },
    ],
  },
  {
    text: "members",
    link: "/",
    icon: true,
    hoverLinks: [
      { text: "members 1", link: "/" },
      { text: "members 2", link: "/" },
      { text: "members 3", link: "/" },
      { text: "members 4", link: "/" },
    ],
  },
  {
    text: "blog",
    link: "/",
    icon: true,
    hoverLinks: [
      { text: "blog 1", link: "/" },
      { text: "blog 2", link: "/" },
      { text: "blog 3", link: "/" },
      { text: "blog 4", link: "/" },
    ],
  },
  {
    text: "pages",
    link: "/",
    icon: true,
    hoverLinks: [
      { text: "page 1", link: "/" },
      { text: "page 2", link: "/" },
      { text: "page 3", link: "/" },
      { text: "page 4", link: "/" },
    ],
  },
  { text: "contact", link: "/", icon: false },
];

export const propertyDetailContent = [
  {
    detail: "4 beds",
    icon: Bed,
  },
  {
    detail: "4 baths",
    icon: Bath,
  },
  {
    detail: "400 sqft",
    icon: Copy,
  },
];

export const DiscoverCitiesContent = [
  {
    title: "New York",
    properties: 8,
    image: "c1.webp",
  },
  {
    title: "chicago",
    properties: 2,
    image: "c2.webp",
  },
  {
    title: "los angeles",
    properties: 1,
    image: "c3.webp",
  },
  {
    title: "san diego",
    properties: 0,
    image: "c4.webp",
  },
  {
    title: "florida",
    properties: 3,
    image: "c5.webp",
  },
  {
    title: "miami",
    properties: 2,
    image: "c6.webp",
  },
];

export const RecommendedHomesContent = [
  {
    image: "product1.webp",
    title: "Skyper Pool Apartment",
    adress: "1020 Bloomingdale Ave",
    price: "$280,000",
    isForSale: true,
    isFeatured: false,
    isMonthly: false,
    details: [
      {
        detail: "4 beds",
        icon: Bed,
      },
      {
        detail: "4 baths",
        icon: Bath,
      },
      {
        detail: "400 sqft",
        icon: Copy,
      },
    ],
  },
  {
    image: "product2.webp",
    title: "North Dillard Street",
    adress: "1020 Bloomingdale Ave",
    price: "$280,000",
    isForSale: true,
    isFeatured: false,
    isMonthly: false,
    details: [
      {
        detail: "4 beds",
        icon: Bed,
      },
      {
        detail: "2 baths",
        icon: Bath,
      },
      {
        detail: "450 sqft",
        icon: Copy,
      },
    ],
  },
  {
    image: "product3.webp",
    title: "Eaton Garth Penthouse",
    adress: "1020 Bloomingdale Ave",
    price: "$250",
    isForSale: true,
    isFeatured: true,
    isMonthly: true,
    details: [
      {
        detail: "4 beds",
        icon: Bed,
      },
      {
        detail: "2 baths",
        icon: Bath,
      },
      {
        detail: "400 sqft",
        icon: Copy,
      },
    ],
  },
  {
    image: "product3.webp",
    title: "Eaton Garth Penthouse 2",
    adress: "1020 Bloomingdale Ave",
    price: "$180,000",
    isForSale: true,
    isFeatured: true,
    isMonthly: false,
    details: [
      {
        detail: "4 beds",
        icon: Bed,
      },
      {
        detail: "2 baths",
        icon: Bath,
      },
      {
        detail: "450 sqft",
        icon: Copy,
      },
    ],
  },
];

export const WhyChooseUsContent = [
  {
    icon: House,
    title: "Find your future home",
    description:
      "We help you find a new home by offering a smart real estate experience",
  },
  {
    icon: HousePlus,
    title: "Experienced agents",
    description: "Find an experienced agent who knows your market best",
  },
  {
    icon: School,
    title: "Buy or rent homes",
    description: "Millions of houses and apartments in your favourite cities",
  },
  {
    icon: LaptopMinimalCheck,
    title: "List your own property",
    description: "Sign up now and sell or rent your own properties",
  },
];

export const BestPropertiesShowcaseContent = [
  {
    img: "bp1.webp",
    alt: "home-interrior1",
    width: 600,
    height: 400,
  },
  {
    img: "bp1.webp",
    alt: "home-interrior2",
    width: 600,
    height: 400,
  },
];

export const PropertyHighlightCardContent = [
  {
    detail: "4 beds",
    icon: Bed,
  },
  {
    detail: "2 baths",
    icon: Bath,
  },
  {
    detail: "350 sqft",
    icon: File,
  },
];

export const ExpertiseStatsContent = [
  {
    stat: "$18M",
    statDiscription: "Owned from properties transactions",
  },
  {
    stat: "26k",
    statDiscription: "Properties for Buy",
  },
  {
    stat: "15k",
    statDiscription: "Properties for Sell",
  },
  {
    stat: "800",
    statDiscription: "Daily completed transactions.",
  },
];

export const TrustedByContent = [
  {
    src: "trust1.webp",
    alt: "trusted by amazon",
    width: 84,
    height: 26,
  },
  {
    src: "trust2.webp",
    alt: "trusted by amazon",
    width: 83,
    height: 21,
  },
  {
    src: "trust3.webp",
    alt: "trusted by amazon",
    width: 74,
    height: 23,
  },
  {
    src: "trust4.webp",
    alt: "trusted by amazon",
    width: 122,
    height: 25,
  },
  {
    src: "trust5.webp",
    alt: "trusted by amazon",
    width: 82,
    height: 26,
  },
  {
    src: "trust6.webp",
    alt: "trusted by amazon",
    width: 99,
    height: 31,
  },
];

export const RecentArticlesContent = [
  {
    date: "Apartment <span>•</span> March 19, 2024",
    title: "Housing Markets That Changed the Most This Week",
    image: "article1.webp",
  },
  {
    date: "Apartment <span>•</span>  March 19, 2024",
    title: "Read Unveils the Best Canadian Cities for Biking",
    image: "article2.webp",
  },
  {
    date: "Office <span>•</span>  March 19, 2024",
    title: "10 Walkable Cities Where You Can Live Affordably",
    image: "article3.webp",
  },
  {
    date: "Shop <span>•</span>  March 19, 2024",
    title: "New Apartment Nice in the Best Canadian Cities",
    image: "article4.webp",
  },
];

export const ExploreLinksWithAgentCTAContent = [
  {
    tab: "real estate",
    links: [
      "buy house ny",
      "sell property la",
      "rent apartment tx",
      "real estate agents",
      "house listings",
      "luxury homes",
      "condos for sale",
      "beachfront property",
      "cheap homes",
      "foreclosed houses",
      "open house",
      "property value",
      "investment property",
      "rental market",
      "first time buyer",
      "property taxes",
      "housing trends",
      "zoning info",
      "mortgage guide",
      "home loan",
      "property inspection",
      "home appraisal",
      "moving guide",
    ],
  },
  {
    tab: "new homes",
    links: [
      "new homes in ny",
      "builder homes",
      "modern houses",
      "smart homes",
      "eco-friendly homes",
      "urban homes",
      "custom homes",
      "affordable new homes",
      "townhouses",
      "new condo listings",
      "ready to move",
      "design trends",
      "open floor plan",
      "minimalist homes",
      "furnished options",
      "floor plan ideas",
      "interior themes",
      "garage options",
      "pet friendly homes",
      "kids play area",
      "energy rating",
    ],
  },
  {
    tab: "popular area",
    links: [
      "manhattan homes",
      "brooklyn listings",
      "queens apartments",
      "bronx rentals",
      "long island properties",
      "central park homes",
      "downtown la",
      "beverly hills homes",
      "miami beach condos",
      "austin suburbs",
      "houston downtown",
      "chicago lakeview",
      "seattle homes",
      "denver market",
      "dallas uptown",
      "atlanta midtown",
      "phoenix areas",
      "boston bay area",
      "orlando listings",
      "san francisco hills",
      "las vegas strip",
      "san diego coast",
      "portland living",
      "dc metro",
    ],
  },
  {
    tab: "real searches",
    links: [
      "cheap homes near me",
      "houses with pools",
      "3 bedroom homes",
      "studio apartments",
      "pet-friendly rentals",
      "furnished apartments",
      "luxury apartments",
      "homes with basement",
      "backyard homes",
      "near school homes",
      "quiet neighborhood",
      "downtown view",
      "gated community",
      "loft apartments",
      "corner house",
      "duplex homes",
      "townhomes",
      "rural property",
      "waterfront homes",
      "homes with garage",
      "solar powered homes",
      "smart lock homes",
      "modern interior",
    ],
  },
];

export const FooterLinksContent = [
  {
    tab: "discover",
    links: [
      "miami",
      "new york",
      "chicago",
      "florida",
      "los angeles",
      "san diego",
    ],
  },
  {
    tab: "quick links",
    links: [
      "about",
      "contact",
      "FAQ's",
      "blogs",
      "pricing plans",
      "privace policy",
      "terms and conditions",
    ],
  },
  {
    tab: "contact us",
    links: ["hi@justhome.com", "(123) 456-7890"],
  },
  {
    tab: "our adress",
    links: ["99 Fifth Avenue, 3rd Floor", "San Francisco, CA 1980"],
  },
];

export const SearchKeywordsContent = [
  "buy house ny",
  "sell property la",
  "rent apartment tx",
  "real estate agents",
  "house listings",
  "luxury homes",
  "condos for sale",
  "beachfront property",
  "cheap homes",
  "foreclosed houses",
  "open house",
  "property value",
  "investment property",
  "rental market",
  "first time buyer",
  "property taxes",
  "housing trends",
  "zoning info",
  "mortgage guide",
  "home loan",
  "property inspection",
  "home appraisal",
  "moving guide",

  "new homes in ny",
  "builder homes",
  "modern houses",
  "smart homes",
  "eco-friendly homes",
  "urban homes",
  "custom homes",
  "affordable new homes",
  "townhouses",
  "new condo listings",
  "ready to move",
  "design trends",
  "open floor plan",
  "minimalist homes",
  "furnished options",
  "floor plan ideas",
  "interior themes",
  "garage options",
  "pet friendly homes",
  "kids play area",
  "energy rating",

  "manhattan homes",
  "brooklyn listings",
  "queens apartments",
  "bronx rentals",
  "long island properties",
  "central park homes",
  "downtown la",
  "beverly hills homes",
  "miami beach condos",
  "austin suburbs",
  "houston downtown",
  "chicago lakeview",
  "seattle homes",
  "denver market",
  "dallas uptown",
  "atlanta midtown",
  "phoenix areas",
  "boston bay area",
  "orlando listings",
  "san francisco hills",
  "las vegas strip",
  "san diego coast",
  "portland living",
  "dc metro",

  "cheap homes near me",
  "houses with pools",
  "3 bedroom homes",
  "studio apartments",
  "pet-friendly rentals",
  "furnished apartments",
  "luxury apartments",
  "homes with basement",
  "backyard homes",
  "near school homes",
  "quiet neighborhood",
  "downtown view",
  "gated community",
  "loft apartments",
  "corner house",
  "duplex homes",
  "townhomes",
  "rural property",
  "waterfront homes",
  "homes with garage",
  "solar powered homes",
  "smart lock homes",
  "modern interior",
];
