import { getQueries } from "@/lib/data";

const page = async () => {
  const queries = await getQueries();

  return (
    <div>
      {queries && (
        <div>
          {queries.map((query) => (
            <div key={query._id}>
              <h1>InputMessage : {query.message.inputMessage}</h1>
              <div>
                {console.log(JSON.parse(query.message.responseMessage))}
                <p>
                  Overview: {JSON.parse(query.message.responseMessage).Overview}
                </p>
                {/* <p>
                  Key Features :
                  {JSON.parse(query.message.responseMessage)[
                    "Key Features"
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </p> */}
                {/* <p>
                  Roadmap :
                  {JSON.parse(query.message.responseMessage)["Roadmap"].map(
                    (item) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </p>
                <p>
                  Tech Stack Suggestions :
                  <p>
                    Frontend :
                    {JSON.parse(query.message.responseMessage)[
                      "Tech Stack Suggestions"
                    ].Frontend.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </p>
                  <p>
                    Backend :
                    {JSON.parse(query.message.responseMessage)[
                      "Tech Stack Suggestions"
                    ].Backend.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </p>
                  <p>
                    Database :
                    {
                      JSON.parse(query.message.responseMessage)[
                        "Tech Stack Suggestions"
                      ].Database
                    }
                  </p>
                  <p>
                    Natural Language Processing :
                    {
                      JSON.parse(query.message.responseMessage)[
                        "Tech Stack Suggestions"
                      ]["Natural Language Processing"]
                    }
                  </p>
                </p> */}

                <p>
                  Monetization Strategy :
                  {
                    JSON.parse(query.message.responseMessage)[
                      "Monetization Strategy"
                    ]
                  }
                </p>

                <p>
                  Marketing Strategy :
                  {
                    JSON.parse(query.message.responseMessage)[
                      "Marketing Strategy"
                    ]
                  }
                </p>
              </div>
              <br />
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
