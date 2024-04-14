import { Answer } from "./models";

export const getQueries = async () => {
  try {
    await connectToDb();
    const queries = await Answer.find();
    return queries;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when getting queries");
  }
};
