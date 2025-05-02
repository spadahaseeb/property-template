import { twMerge } from "tailwind-merge";

// types
interface LinksWrapperPropType {
  data: {
    tab: string;
    links: string[];
  };
  className?: string;
}

const LinksWrapper = ({ data, className }: LinksWrapperPropType) => {
  return (
    <>
      <div className={twMerge("", className)}>
        <h6 className="font-medium text-[19px] text-white text-opacity-[47%] capitalize pb-[29px]">
          {data && data.tab}
        </h6>

        <ul>
          {data &&
            data.links.map((item) => (
              <li key={item} className="block list-none mb-[12px]">
                <a
                  href="#"
                  className="inline-reset text-white capitalize text-[15px] font-normal w-[max-content]"
                >
                  {item}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default LinksWrapper;
