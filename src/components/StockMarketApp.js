import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

function StockMarketApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=J9FYA1N5U8R69SZC"
      )
          .then((response) => setData(response.data));
    //   console.log(data);
    }, []);
    
  return (
    <div>
      {data ? (
        <Line
          data={{
            labels: data.dates,
            datasets: [
              {
                label: "Stock Market Prices",
                data: data.high,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          }}
         
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default StockMarketApp;
