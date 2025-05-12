import { LucideProps } from "lucide-react";

import {
  ForwardRefExoticComponent,
  ReactElement,
  ReactNode,
  RefAttributes,
} from "react";

export type FindDreamHouseCardPropType = {
  className?: string;
  data: {
    imgSrc: string;
    title: string;
    discription: string;
  };
};

export type RecentPropertyCardPropType = {
  className?: string;
  data: {
    imgSrc: string;
    title: string;
    adress: string;
    price: string;
    isMonthly: boolean;
    isForSle: boolean;
    isFeatured: boolean;
    details: {
      detail: string;
      icon: ReactNode | ReactElement | any;
    }[];
  };
};

export type BuySellCtaCardPropType = {
  className?: string;
  data: {
    imgSrc: string;
    title: string;
    discription: string;
    buttonText: string;
    buttonIcon: ForwardRefExoticComponent<
      | (Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>)
      | ReactElement
      | ReactNode
      | any
    >;
    buttonLink: string;
  };
};
