// components

// types
type featureItemPropType = {
  featureIcon: React.ReactNode;
  featureTitle: string;
  discription: string;
};

const FeatureItem = ({
  featureIcon,
  featureTitle,
  discription,
}: featureItemPropType) => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-[320px]">
      <span className="mb-[26px] inline-reset">{featureIcon}</span>
      <h5 className="font-roboto font-medium text-[20px] leading-[22.8px] pb-[14px]">
        {featureTitle}
      </h5>
      <p className="font-normal font-roboto text-[15px] leading-[28.5px]">
        {discription}
      </p>
    </div>
  );
};

export default FeatureItem;
