import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Chart as ChartJs } from "chart.js/auto";
import { convertNumber } from "../../functions/convertNumber";
import Loader from "../common/Loader";

function Chart({
  chartData = { labels: [], datasets: [] },
  multiAxis,
  pricetype,
}) {
  // Options for the chart

  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      crypto1: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: function (value, index, ticks) {
            if (pricetype == "prices") {
              return "$" + value.toLocaleString();
            } else {
              return "$" + convertNumber(value);
            }
          },
        },
      },
      crypto2: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          callback: function (value, index, ticks) {
            if (pricetype == "prices") {
              return "$" + value.toLocaleString();
            } else {
              return "$" + convertNumber(value);
            }
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

Chart.propTypes = {
  chartData: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        data: PropTypes.arrayOf(PropTypes.number),
        borderColor: PropTypes.string,
        backgroundColor: PropTypes.string,
      })
    ).isRequired,
  }),
  multiAxis: PropTypes.bool,
};

export default Chart;
