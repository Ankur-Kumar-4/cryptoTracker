import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/coins/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getChartData } from "../functions/getChartData";
import Chart from "../components/coins/Chart";
import SelectDays from "../components/coins/SelectDays";
import { SettingChartData } from "../functions/SettingChartData";
import ToggleButtons from "../components/coins/ToggleButtons";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(7);
  const [chartdata, setChartData] = useState({});
  // const pricetypeArray = ["prices", "market_caps", "total_volumes"];
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    const coinData = await getCoinData(id);
    if (coinData) {
      coinObject(setCoinData, coinData);
      const chartData = await getChartData(id, days, priceType);
      if (chartData) {
        SettingChartData(setChartData, chartData);
        setIsLoading(false);
      }
    }
  };

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const chartData = await getChartData(id, event.target.value, priceType);
    if (chartData) {
      SettingChartData(setChartData, chartData);
      setIsLoading(false);
    }
  };
  const handlePriceTypeChange = async (event, newtype) => {
    setIsLoading(true);
    setPriceType(newtype);
    const chartData = await getChartData(id, days, priceType);
    if (chartData) {
      SettingChartData(setChartData, chartData);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="bg-darkgrey text-white w-[95%] h-[9.5lvh] mx-auto md:w-[93%] md:h-[6rem] rounded-xl pt-3 md:pt-3 mt-5">
            <div className="">
              <List coin={coinData} />
            </div>
          </div>
          <div className="bg-darkgrey text-white w-[95%] md:w-[93%] mt-6 mx-auto  rounded-xl ps-5 py-3">
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <div className="flex items-center  md:justify-center md:mb-4 mb-10 ">
              <ToggleButtons
                handlePriceTypeChange={handlePriceTypeChange}
                priceType={priceType}
              />
            </div>

            <Chart chartData={chartdata} priceType={priceType} />
          </div>
          <CoinInfo coinData={coinData} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
