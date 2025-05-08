import {
  Hospital,
  HousePlus,
  Warehouse,
  ChevronDown,
  NotepadText,
  House,
  Shield,
} from "lucide-react";

export const navigationContent = [
  { text: "home", icon: ChevronDown },
  { text: "listings", icon: ChevronDown },
  { text: "members", icon: ChevronDown },
  { text: "blog", icon: ChevronDown },
  { text: "pages", icon: ChevronDown },
  { text: "contact", icon: null },
];

export const PropertyButtonsContent = [
  {
    src: "#",
    text: "Modern Villa",
    buttonIcon: HousePlus,
  },
  {
    src: "#",
    text: "Apartment",
    buttonIcon: Hospital,
  },
  {
    src: "#",
    text: "Town House",
    buttonIcon: Warehouse,
  },
];

export const WhyChooseUsContent = [
  {
    icon: NotepadText,
    heading: "Wide Range of Properties",
    discription:
      "We offer expert legal help for all related property items in Dubai.",
  },
  {
    icon: House,
    heading: "Buy or Rent Homes",
    discription:
      "We sell your home at the best market price and very quickly as well.",
  },
  {
    icon: Shield,
    heading: "Trusted by Thousands",
    discription:
      "We offer you free consultancy to get a loan for your new home.",
  },
];

export const FeaturedPropertiesContent = {
  FeaturedPropertiesTabsContent: [
    { tab: "All Properties", type: "*" },
    { tab: "For Sale", type: "sale" },
    { tab: "For Rent", type: "rent" },
  ],

  FeaturedPropertiesGalleryContent: [
    {
      imgSrc: "property1.png",
      isForSale: true,
      isFeatured: true,
      title: "Luxury Family Home",
      adress: "1800-1818 79th St",
      price: "$395,000",
      beds: 4,
      tubs: 1,
      size: 400,
      type: "rent",
      isMonthly: false,
    },
    {
      imgSrc: "property1.png",
      isForSale: true,
      isFeatured: true,
      title: "Luxury Family Home2",
      adress: "1800-1818 79th St",
      price: "$395,000",
      beds: 4,
      tubs: 1,
      size: 400,
      type: "rent",
      isMonthly: false,
    },
    {
      imgSrc: "property1.png",
      isForSale: true,
      isFeatured: true,
      title: "Luxury Family Home3",
      adress: "1800-1818 79th St",
      price: "$395,000",
      beds: 4,
      tubs: 1,
      size: 400,
      type: "rent",
      isMonthly: true,
    },
    {
      imgSrc: "property1.png",
      isForSale: true,
      isFeatured: true,
      title: "Luxury Family Home4",
      adress: "1800-1818 79th St",
      price: "$395,000",
      beds: 4,
      tubs: 1,
      size: 400,
      type: "rent",
      isMonthly: false,
    },
    {
      imgSrc: "property1.png",
      isForSale: true,
      isFeatured: true,
      title: "Luxury Family Home5",
      adress: "1800-1818 79th St",
      price: "$395,000",
      beds: 4,
      tubs: 1,
      size: 400,
      type: "sale",
      isMonthly: true,
    },
    {
      imgSrc: "property1.png",
      isForSale: true,
      isFeatured: true,
      title: "Luxury Family Home6",
      adress: "1800-1818 79th St",
      price: "$395,000",
      beds: 4,
      tubs: 1,
      size: 400,
      type: "sale",
      isMonthly: false,
    },
  ],
};

export const DiscoverCitiesContent = [
  {
    img: "property1.png",
    city: "los angeles",
    properties: 1,
  },
  {
    img: "property1.png",
    city: "los angeles",
    properties: 43,
  },
  {
    img: "property1.png",
    city: "los angeles",
    properties: 8,
  },
  {
    img: "property1.png",
    city: "los angeles",
    properties: 2,
  },
  {
    img: "property1.png",
    city: "los angeles",
    properties: 4,
  },
  {
    img: "property1.png",
    city: "los angeles",
    properties: 5,
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

export const BestPropertiesContent = [
  {
    img: "bp1.webp",
    alt: "home-interrior",
    width: 600,
    height: 400,
  },
  {
    img: "bp1.webp",
    alt: "home-interrior",
    width: 600,
    height: 400,
  },
];

export const PropertyHighlightCardContent = {
  imgSrc: "bp3.webp",
  isForSale: true,
  isFeatured: true,
  title: "Villa One Hyde Park",
  adress: "2050 Bloomingdale Ave",
  price: "$120,000",
  beds: 4,
  tubs: 1,
  size: 400,
  type: "rent",
  isMonthly: false,
};

export const MeetTeemContent = [
  {
    imgSrc: "teem1.png",
    imgAlt: "team expert",
    expertName: "john powell",
    expertBio: "service support",
  },
  {
    imgSrc: "teem2.png",
    imgAlt: "team expert",
    expertName: "Thomas Powell",
    expertBio: "Marketing",
  },
  {
    imgSrc: "teem3.png",
    imgAlt: "team expert",
    expertName: "Tom Wilson",
    expertBio: "Designer",
  },
  {
    imgSrc: "teem4.png",
    imgAlt: "team expert",
    expertName: "Samuel Palmer",
    expertBio: "Marketing",
  },
];

export const PopularMarketsContent = [
  "The Villages, FL real estate",
  "New York, Real estate",
  "Madera, CA real estate",
  "Fontana, CA real estate",
  "Moreno Valley, CA real estate",
  "Aurora, IL real estate",
  "Perris, CA real estate",
  "Minnesota Lake, MN real estate",
  "Woodbridge, VA real estate",
];

export const ServicesContent = [
  {
    title: "Find Real Estate",
    discription:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
  {
    title: "Meet Realtor",
    discription:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
  {
    title: "Take The Keys",
    discription:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
];
