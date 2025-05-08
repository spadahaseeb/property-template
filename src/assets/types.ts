import { ReactElement, ReactNode } from "react";

export type LinksWrapperPropType = {
  data: {
    tab: string;
    links: string[];
  };
  className?: string;
};

export type ArticlePropType = {
  date: string;
  title: string;
  image: string;
};

export type ButtonPropType = {
  hover?: boolean;
  variant?: "v1" | "v2" | "v3" | "v4" | "v5" | "default";
  className?: string;
  buttonText?: string;
  buttonIcon?: ReactNode;
  buttonIconStyles?: string;
  isLinkEnable?: boolean;
  buttonLink?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export type FeatureItemPropType = {
  featureIcon: React.ReactNode;
  featureTitle: string;
  discription: string;
  className?: string;
};

export type HeadingPropsType = {
  className?: string;
  heading?: string;
  discription?: string;
  spacing?: string;
};

export type PropertyCardPropType = {
  image: string;
  title: string;
  adress: string;
  price: string;
  isForSale?: boolean;
  isFeatured?: boolean;
  isMonthly?: boolean;
  details: {
    detail: string;
    icon: ReactNode | any;
  }[];
};

export type propertyDetailPropsType = {
  className?: string;
  detail: string;
  icon: ReactNode;
};

export type PropertyHighlightCardPropsType = {
  isForSle?: boolean;
  isFeatured?: boolean;
  className?: string;
};

export type PropertyTagPropsType = {
  className?: string;
  variant?: "v1" | "v2";
  text: string;
};

export type StatsPropType = {
  statStyle?: string;
  statDiscriptionStyle?: string;
  stat: string;
  statDiscription: string;
  className?: string;
  children?: ReactNode;
};

export type ThumbnailPropType = {
  image: string;
  children?: React.ReactNode;
  className?: string;
  background?: boolean;
  forground?: boolean;
};

export type HeadingPropType = {
  heading?: string;
  discription?: string;
  Children?: string;
  className?: string;
  headingStyles?: string;
  discriptionStyles?: string;
};

export type PropertyAdressPropType = {
  title: string;
  adress: string;
  titleStyles?: string;
  adressStyles?: string;
  className?: string;
};

export type PropertyPricePropType = {
  className?: string;
  price: string;
  isMonthly: boolean;
};

export type PropertyDetailsPropType = {
  data: {
    detail: string;
    icon: ReactNode | any;
  }[];
  className?: string;
  priceStyles?: string;
  detailStyles?: string;
  veryChildStyles?: string;
};

export type PropertyHighlightCardPropType = {
  isForSle?: boolean;
  isFeatured?: boolean;
  className?: string;
  imgSrc: string;
  children?: ReactNode | ReactElement;
};

export type PropertyThumbSliderPropType = {
  className?: string;
  data: {
    img: string;
    alt: string;
    width: number | string;
    height: number | string;
  }[];
};

export type PropertyStatsCardPropType = {
  className?: string;
};

export type PropertySearchBarPropType = {
  isTabEnable: boolean;
};
