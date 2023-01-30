import axios from "axios";

const quotesURL = import.meta.env.VITE_QUOTES_API;

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
