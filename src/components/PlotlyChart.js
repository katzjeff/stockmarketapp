// import React, { useState, useEffect } from "react";
// import axios from "axios";
import React from "react"
import Plot from "react-plotly.js";
// import {Plotly as PlotlyJS} from "plotly.js/auto";


class PlotlyChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          stockChartXValues: [],
          stockChartYValues: []
        }
      }
    
      componentDidMount() {
        this.fetchStock();
      }
    
      fetchStock() {
        const pointerToThis = this;
        console.log(pointerToThis);
        // const API_KEY = 'J9FYA1N5U8R69SZC';
       
        let API_Call = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=SHOP.TRT&outputsize=full&apikey=J9FYA1N5U8R69SZC";
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
    
        fetch(API_Call)
          .then(
            function(response) {
              return response.json();
            }
          )
          .then(
            function(data) {
              console.log(data);
    
              for (var key in data['Time Series (Daily)']) {
                stockChartXValuesFunction.push(key);
                stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
              }
    
              // console.log(stockChartXValuesFunction);
              pointerToThis.setState({
                stockChartXValues: stockChartXValuesFunction,
                stockChartYValues: stockChartYValuesFunction
              });
            }
          )
    }
    
      
    render() {
        const StockSymbol = "Shopify-Toronto";
          return (
          
          <div>
                <h1>Stock Market Trend for {StockSymbol}</h1>
            <Plot
              data={[
                {
                  x: this.state.stockChartXValues,
                  y: this.state.stockChartYValues,
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'red'},
                }
              ]}
              layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
            />
          </div>
        )
      }
    }
    
    export default PlotlyChart;