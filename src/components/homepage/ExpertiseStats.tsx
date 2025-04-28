// components
import Stats from "@/components/Stats";
import { ExpertiseStatsContent } from "@/components/homepage/content/content";

const ExpertiseStats = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[30px] justify-items-center">
        {ExpertiseStatsContent.map((item, idx) => (
          <Stats
            key={idx}
            stat={item.stat}
            statDiscription={item.statDiscription}
            statStyle="text-accent-gold pb-1"
            statDiscriptionStyle="text-white"
          />
        ))}
      </div>
    </>
  );
};
export default ExpertiseStats;
