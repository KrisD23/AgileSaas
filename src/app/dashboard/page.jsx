import { checkAndCreateUser } from "./test";

const page = async () => {
  await checkAndCreateUser();
  return <div>DashboardPage</div>;
};

export default page;
