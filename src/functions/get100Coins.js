import axios from "axios";
export const get100Coins = () => {
  try {
    const response = axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        headers: {
          accept: "application/json",
        },
        params: {
          vs_currency: "usd", // Specify the currency (e.g., USD)
          order: "market_cap_desc", // Order by market cap descending
          per_page: 100, // Number of coins to return per page
          page: 1, // Page number
          sparkline: false, // Include sparkline data (true or false)
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
