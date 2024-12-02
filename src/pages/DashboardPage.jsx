import React, { useEffect, useState } from "react";

import TabsComponent from "../components/Dashboard/TabsComponent";
import PaginationComponent from "../components/Dashboard/PaginationComponent";
import Loader from "../components/common/Loader";
import BackToTopBtn from "../components/common/BackToTopBtn";
import { get100Coins } from "../services/get100Coins";
function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paginatedcoins, setPaginatedCoins] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
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
    console.log();
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="">
          <BackToTopBtn />

          <TabsComponent coins={paginatedcoins} />

          <PaginationComponent
            page={page}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
}

export default Dashboard;
