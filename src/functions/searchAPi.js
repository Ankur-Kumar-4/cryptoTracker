import axios from "axios";

export const searchApi = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-pro-api-key": "CG-AFawzJGisPLiqrEykS3Ds2Ei",
    },
  };

  axios
    .get("https://pro-api.coingecko.com/api/v3/search?query=bitcoin", options)
    .then((response) => {
      //   console.log(response.data)
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
