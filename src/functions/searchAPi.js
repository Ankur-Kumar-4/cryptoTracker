import axios from "axios";
export const searchApi = async () => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=bitcoin`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
