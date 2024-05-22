import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import TabsComponent from "../components/Dashboard/TabsComponent";
import axios from "axios";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchCoinMarkets = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            headers: {
              accept: "application/json",
            },
            params: {
              vs_currency: "usd", // Specify the currency (e.g., USD)
              order: "market_cap_desc", // Order by market cap descending
              per_page: 10, // Number of coins to return per page
              page: 1, // Page number
              sparkline: false, // Include sparkline data (true or false)
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoinMarkets();
  }, []);
 
  return (
    <div className="">
      <Navbar />
      <TabsComponent coins={coins} />
    </div>
  );
}

export default Dashboard;
