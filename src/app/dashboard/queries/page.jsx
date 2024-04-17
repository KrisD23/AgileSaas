import { getQueries } from "@/lib/data";
import QuerryCard from "./QuerryCard";

const page = async () => {
  const queries = await getQueries();
  console.log("queries:", queries);

  return (
    <div className="flex flex-col h-[90vh]  items-center gap-10">
      <h1 className="text-3xl">All the queries.</h1>
      <div className="flex flex-col gap-10">
        {queries.map((query, index) => (
          <QuerryCard
            key={index}
            idea={query["message"]["inputMessage"]}
            desc={query["message"]["responseMessage"]["details"]["description"]}
            id={query._id}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
