import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
// component

// types
type StatsPropType = {
  statStyle?: string;
  statDiscriptionStyle?: string;
  stat: string;
  statDiscription: string;
  className?: string;
  children?: ReactNode;
};

export const Stats = ({
  statStyle,
  statDiscriptionStyle,
  stat,
  statDiscription,
  className,
  children,
}: StatsPropType) => {
  return (
    <div className={twMerge("text-center", className)}>
      <h5 className={twMerge("text-[40px] font-medium", statStyle)}>{stat}</h5>
      <p className={twMerge("text-[15px] font-normal", statDiscriptionStyle)}>
        {statDiscription}
      </p>

      {children && children}
    </div>
  );
};

export default Stats;
