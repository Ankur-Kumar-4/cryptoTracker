import React, { useEffect, useState } from "react";

import TabsComponent from "../components/Dashboard/TabsComponent";

import Search from "../components/Dashboard/Search";
import NoitemFound from "../components/Dashboard/NoitemFound";
import PaginationComponent from "../components/Dashboard/PaginationComponent";
import Loader from "../components/common/Loader";
import BackToTopBtn from "../components/common/BackToTopBtn";
import { get100Coins } from "../functions/get100Coins";
import { searchApi } from "../functions/searchAPi";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
  const handleSearch = async () => {
    const data = await searchApi(searchParam);
    console.log(data);
  };

  useEffect(() => {
    getdata();
  }, [page]);

  const getdata = async () => {
    setIsLoading(true);
    const coins100 = await get100Coins(page);
    console.log(coins100);
    if (coins100) {
      setCoins(coins100.data);
      setPaginatedCoins(coins100.data);
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="">
          <BackToTopBtn />
          {/* <Search
            handleSearch={handleSearch}
            searchParam={searchParam}
            onSearhChange={onSearhChange}
          /> */}
          {searchParam != "" ? (
            <NoitemFound setSearchParam={setSearchParam} />
          ) : (
            <TabsComponent coins={paginatedcoins} />  
          )}

          {!searchParam && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Dashboard;
