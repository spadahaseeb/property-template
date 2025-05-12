// Types.ts
import { ReactNode } from "react";

// Root Layout
export type RootLayoutPropType = {
  children: Readonly<React.ReactNode>;
};

// PropertyButton
export type PropertyButtonPropType = {
  src: string;
  text: string;
  buttonIcon?: ReactNode;
  className?: string;
  ButtonIconStyles?: string;
};

// Heading
export type HeadingPropType = {
  heading?: string;
  discription?: string;
  Children?: ReactNode;
  className?: string;
  headingStyles?: string;
  discriptionStyles?: string;
};

// Thumbnail
export type ThumbnailPropType = {
  image: string;
  children?: React.ReactNode;
  className?: string;
  background?: boolean;
  forground?: boolean;
};

// Tag
export type TagPropType = {
  className?: string;
  variant?: "v1" | "v2";
  text: string;
};

// FeaturedPropertyCard
export type FeaturedPropertyCardPropType = {
  imgSrc: string;
  isForSale: boolean;
  isFeatured: boolean;
  title: string;
  adress: string;
  price: string;
  beds: number;
  tubs: number;
  size: number;
  type: string;
  isMonthly: boolean;
};

// Stats
export type StatsPropType = {
  statStyle?: string;
  statDiscriptionStyle?: string;
  stat: string;
  statDiscription: string;
  className?: string;
  children?: ReactNode;
};

// PropertyHighlightCard
export type PropertyHighlightCardPropType = {
  isForSle?: boolean;
  isFeatured?: boolean;
  className?: string;
};

// PropertyDetails
export type PropertyDetailsPropType = {
  data: FeaturedPropertyCardPropType;
  className?: string;
  priceStyles?: string;
  adressStyles?: string;
};

export type TeemCardPropType = {
  imgSrc: string;
  imgAlt: string;
  expertName: string;
  expertBio?: string;
  className?: string;
};
