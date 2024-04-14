import { getQueries } from "@/lib/data";

const page = async () => {
  const queries = await getQueries();
  return <div>Querry page</div>;
};

export default page;
