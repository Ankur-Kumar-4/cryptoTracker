import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/coins/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { getChartData } from "../functions/getChartData";
import Loader from "../components/common/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/coins/CoinInfo";
import { SettingChartData } from "../functions/SettingChartData";
import Chart from "../components/coins/Chart";
import ToggleButtons from "../components/coins/ToggleButtons";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  const handleDaysChange = async (event) => {
    isLoading(true);
    setDays(event.target.value);
    const chartData1 = await getChartData(
      crypto1,
      event.target.value,
      priceType
    );
    const chartData2 = await getChartData(
      crypto2,
      event.target.value,
      priceType
    );
    SettingChartData(setChartData, chartData1, chartData2, crypto1, crypto2);
    isLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const coinData1 = await getCoinData(crypto1);
    if (coinData1) {
      const coinData2 = await getCoinData(crypto2);
      coinObject(setCrypto1Data, coinData1);
      coinObject(setCrypto2Data, coinData2);
      if (coinData2) {
        const chartData1 = await getChartData(crypto1, days, priceType);
        const chartData2 = await getChartData(crypto2, days, priceType);
        SettingChartData(
          setChartData,
          chartData1,
          chartData2,
          crypto1,
          crypto2
        );
        setIsLoading(false);
      }
    }
  };

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const coinData = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, coinData);
      const chartData1 = await getChartData(crypto1, days, priceType);
      const chartData2 = await getChartData(crypto2, days, priceType);
      SettingChartData(setChartData, chartData1, chartData2, crypto1, crypto2);
    } else {
      setCrypto1(event.target.value);
      const coinData = await getCoinData(event.target.value);

      coinObject(setCrypto1Data, coinData);
    }

    setIsLoading(false);
  };

  const handlePriceTypeChange = async (event, newtype) => {
    setIsLoading(true);
    setPriceType(newtype);
    const chartData1 = await getChartData(crypto1, days, newtype);
    const chartData2 = await getChartData(crypto2, days, newtype);
    SettingChartData(setChartData, chartData1, chartData2, crypto1, crypto2);
    setIsLoading(false);
  };

  return (
    <div>
     
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex items-center gap-8 px-12 mt-6">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              setCrypto1={setCrypto1}
              setCrypto2={setCrypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noptag={true}
            />
          </div>
          <div className="bg-darkgrey text-white w-[95%] h-[9.5lvh] mx-auto md:w-[93%] md:h-[6rem] rounded-xl pt-3 md:pt-3 mt-5">
            <div className="">
              <List coin={crypto1Data} />
            </div>
          </div>
          <div className="bg-darkgrey text-white w-[95%] h-[9.5lvh] mx-auto md:w-[93%] md:h-[6rem] rounded-xl pt-3 md:pt-3 mt-5">
            <div className="">
              <List coin={crypto2Data} />
            </div>
          </div>
          <div className="bg-darkgrey text-white w-[95%] md:w-[93%] mt-6 mx-auto  rounded-xl ps-5 py-3">
            <div className="flex items-center  md:justify-center md:mb-4 mb-10 ">
              <ToggleButtons
                handlePriceTypeChange={handlePriceTypeChange}
                priceType={priceType}
              />
            </div>

            <Chart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <CoinInfo coinData={crypto1Data} />
          <CoinInfo coinData={crypto2Data} />
        </>
      )}
    </div>
  );
}

export default ComparePage;
