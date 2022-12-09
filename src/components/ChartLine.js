import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

function ChartLine() {
    const [chartData, setChartData] = useState({});
    
    // API_KEY="J9FYA1N5U8R69SZC"

  useEffect(() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=J9FYA1N5U8R69SZC"
      )
      .then((response) => setChartData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Line
      data={{
        labels: chartData.labels,
        datasets: [
          {
            label: "IBM",
            data: chartData.data,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      }}
      height={400}
      width={600}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
}

export default ChartLine;
