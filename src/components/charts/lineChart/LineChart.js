import { Line } from "react-chartjs-2";
import { Provider } from "react-redux";
import { borderColors, dateFilteredOpeningPrices, filteredDatesByDays, graphColors, todaysOpeningPrice } from "../../../common/commonData";

const LineChart = ({ days }) => {

  const chartData = {
      labels: filteredDatesByDays(days),
      datasets: [
          {
              type: "line",
              label: false,
              data: dateFilteredOpeningPrices(days),
              fill: false,
              backgroundColor: borderColors(days),
                borderColor: [
                  "lightgrey"
                ],
          }
      ]
  }
  
  const options = {
    plugins: {
        title: {
        display: true,
        text: `Todays Opening Price: ${+todaysOpeningPrice()} USD`,
      },
      legend: {
        display: false
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
        {
          scaleLabel: {
          display: true,
          labelString: 'USD'
        },
        }
      ],
      
      xAxes: [
        {
        ticks: {
          beginAtZero: true,
            }
        },
        {
          scaleLabel: {
          display: true,
          labelString: 'Dates'
        },
        }
      ]
    }
  
  };
          
  return (
      <div>
        <Line data={chartData} options={options} />
      </div>
  );
};

export default LineChart;