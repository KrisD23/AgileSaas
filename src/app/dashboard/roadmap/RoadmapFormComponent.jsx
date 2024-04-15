"use client";

function RoadmapFormComponent() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Generate. Refine. Create.</h1>
        <p className="mb-6">
          Generate and refine your product and startup roadmaps with ease.
        </p>

        <div className=" text-white p-4 rounded-lg mb-6 w-[800px]">
          <input
            type="text"
            placeholder="An ecommerce store for snowboards "
            className="bg-gray-800 p-2 rounded-lg ring-1 placeholder:text-center ring-gray-600 w-full mb-2"
          />
          {/* <div className="flex items-center justify-between ">
            <div>
              <button className="btn btn-ghost ">Image</button>
              <button className="btn btn-ghost ">Public</button>
            </div>
            <div>
              <button className="btn btn-primary  ">Speed</button>
              <button className="btn btn-secondary  ">Quality</button>
            </div>
          </div> */}
        </div>

        {/* Breadcrumb navigation */}
        <nav className="text-gray-600">
          Product / Startup / Saas → Roadmap / Plan → AgileDev
        </nav>
      </div>
    </div>
  );
}

export default RoadmapFormComponent;
