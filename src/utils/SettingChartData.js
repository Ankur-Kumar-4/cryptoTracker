import { convertDate } from "./convertDate";

export const SettingChartData = (setChartData, chartData1, chartData2,crypto1Name,crypto2Name) => {
  if (chartData2) {
    setChartData({
      labels: chartData1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label: crypto1Name,
          data: chartData1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          borderColor: "#3a80e9",
          pointRadius: 1,
          yAxisID: "crypto1",
        },
        {
          label: crypto2Name,
          data: chartData2.map((price) => price[1]),
          borderColor: "#61c96f",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          borderColor: "#61c96f",
          pointRadius: 1,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: chartData1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: chartData1.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(58,128,233,0.1)",
          borderColor: "#3a80e9",
          pointRadius: 1,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
