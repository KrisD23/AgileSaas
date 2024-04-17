import { getQuerry } from "@/lib/data";
import ModalComponent from "../../roadmap/ModalComponent";

const SingleQuerryPage = async ({ params }) => {
  const { id } = params;
  const { message } = await getQuerry(id);
  console.log("result:", message);

  return (
    <div className="flex  flex-col mx-auto w-[800px]">
      <div>Hello hunny Bunny!</div>
      <ModalComponent data={message} />
    </div>
  );
};

export default SingleQuerryPage;
