import Link from "next/link";

const QuerryCard = ({ idea, desc, data }) => {
  return (
    <div className="card w-[800px] bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title"> IDEA : {idea}</h2>
        <p className="line-clamp-2"> Response : {desc}</p>
        <div className="card-actions justify-end">
          <button className="btn">
            <Link href={`/dashboard/queries/${data._id}`}>Read more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuerryCard;
