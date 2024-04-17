import Link from "next/link";

const QuerryCard = ({ idea, desc, id }) => {
  return (
    <div className="card w-[800px] bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title"> IDEA : {idea}</h2>
        <p className="line-clamp-2"> Response : {desc}</p>
        <div className="card-actions justify-end">
          <Link className="btn  " href={`/dashboard/queries/${id}`}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuerryCard;
