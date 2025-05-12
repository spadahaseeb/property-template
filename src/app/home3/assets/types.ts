// Types.ts

import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";

export type PropertyCityCardPropType = {
  data: {
    imgSrc: string;
    title: string;
    discription: string;
  };
  className?: string;
  contentStyles?: string;
  contentInside?: boolean;
};

export type DiscoverDealsCardPropType = {
  data: {
    imgSrc: string;
    forSale?: boolean;
    isFeatured?: boolean;
    title: string;
    adress: string;
    detailsData: {
      detail: string;
      icon:
        | ReactNode
        | ForwardRefExoticComponent<
            Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
          >
        | any;
    }[];
    isMonthly?: boolean;
    price: string;
  };
};
