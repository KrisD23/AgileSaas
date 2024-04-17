import { checkPremiumUser } from "@/lib/action";
import RoadmapFormComponent from "./RoadmapFormComponent";

const page = async () => {
  const premiumUser = await checkPremiumUser();

  return (
    <div>
      {premiumUser ? <RoadmapFormComponent /> : <div>Gareeb hai tu!</div>}
    </div>
  );
};

export default page;
