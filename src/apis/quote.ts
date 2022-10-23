import axios from "axios";

const quotesURL = process.env.REACT_APP_QUOTES_API;

const client = axios.create({
  baseURL: quotesURL,
});

export const getQuote = async () => {
  try {
    const { data } = await client.get("/random");

    return data.content;
  } catch (error) {
    throw new Error("Oops, Something went wrong");
  }
};
