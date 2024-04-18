import { checkPremiumUser } from "@/lib/action";
import RoadmapFormComponent from "./RoadmapFormComponent";
import RoadmapUnsubscribe from "@/components/roadmap-unsubscribed";

const page = async () => {
  const premiumUser = await checkPremiumUser();

  return (
    <div>{premiumUser ? <RoadmapFormComponent /> : <RoadmapUnsubscribe />}</div>
  );
};

export default page;
