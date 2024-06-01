import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import TabsComponent from "../components/Dashboard/TabsComponent";
import { get100Coins } from "../functions/get100Coins";

function WatchlistPage() {
  const [coins,setCoins]=useState();
  useEffect(()=>{
  getData();
  },[])

  const getData= async()=>{
    const responce = await get100Coins();
    setCoins(responce.data)
    console.log(responce.data)
  }
  
  return (
    <div>
      <Navbar />
      {/* <TabsComponent coins={coins}/> */}
    </div>
  );
}

export default WatchlistPage;