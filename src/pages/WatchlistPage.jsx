import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import TabsComponent from "../components/Dashboard/TabsComponent";
import { get100Coins } from "../services/get100Coins";
import Loader from "./../components/common/Loader";

function WatchlistPage() {
  const [coins, setCoins] = useState([]);
  const [wishListedData, SetWishListedData] = useState(() => {
    return localStorage.getItem("wishlist");
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const responce = await get100Coins();
    setCoins(getWishlistedCoins(responce.data, wishListedData));
    setIsLoading(false);
  };

  const getWishlistedCoins = (data, wishlist) => {
    return data.filter((coin) => wishlist.includes(coin.id));
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TabsComponent coins={coins} />
        </>
      )}
    </div>
  );
}

export default WatchlistPage;
