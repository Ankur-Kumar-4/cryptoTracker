import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import TabsComponent from "../components/Dashboard/TabsComponent";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import NoitemFound from "../components/Dashboard/NoitemFound";
import PaginationComponent from "../components/Dashboard/PaginationComponent";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [paginatedcoins, setPaginatedCoins] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearhChange = (e) => {
    setSearchParam(e.target.value);
  };
  console.log(searchParam);
  var filteredCoins = coins.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchParam.toLowerCase()) ||
      item.symbol.toLowerCase().includes(searchParam.toLowerCase())
    );
  });

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
              per_page: 100, // Number of coins to return per page
              page: 1, // Page number
              sparkline: false, // Include sparkline data (true or false)
            },
          }
        );
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoinMarkets();
  }, []);

  return (
    <div className="">
      <Navbar />
      <Search searchParam={searchParam} onSearhChange={onSearhChange} />
      {filteredCoins.length == 0 && searchParam != "" ? (
        <NoitemFound setSearchParam={setSearchParam} />
      ) : (
        <TabsComponent coins={searchParam ? filteredCoins : paginatedcoins} />
      )}

      {!searchParam && (
        <PaginationComponent page={page} handlePageChange={handlePageChange} />
      )}
    </div>
  );
}

export default Dashboard;
