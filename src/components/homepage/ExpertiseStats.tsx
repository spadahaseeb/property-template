// components
import { ExpertiseStatsContent } from "@/assets/content";
import Stats from "@/components/shared/Stats";

const ExpertiseStats = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[30px] justify-items-center">
        {ExpertiseStatsContent.map((item) => (
          <Stats
            key={item.stat}
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
