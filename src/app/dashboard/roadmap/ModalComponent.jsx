import React from "react";

const Card = ({ title, content }) => {
  const renderContent = (data) => {
    if (typeof data === "string") {
      return <p className="mb-4">{data}</p>;
    } else if (Array.isArray(data)) {
      return (
        <ul className="list-disc list-inside">
          {data.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      );
    } else if (typeof data === "object") {
      return (
        <div className="grid grid-cols-1 gap-4">
          {Object.keys(data).map((key, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{key}</h3>
              {renderContent(data[key])}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md"
      style={{ minWidth: "1000px" }}
    >
      {/* <h2 className="text-xl font-semibold mb-4">{title}</h2> */}
      {renderContent(content)}
    </div>
  );
};

const ModalComponent = (data) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.keys(data).map((key, index) => (
        <Card key={index} title={key} content={data[key]} />
      ))}
    </div>
  );
};

export default ModalComponent;
