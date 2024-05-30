import axios from "axios";
export const getChartData = async (id, days, pricetype) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
      {
        headers: {
          accept: "application/json",
        },
        params: {
          vs_currency: "usd",
          days: days,
          interval: "daily",
        },
      }
    );

    return response.data[pricetype];
  } catch (error) {
    console.log(error);
  }
};
