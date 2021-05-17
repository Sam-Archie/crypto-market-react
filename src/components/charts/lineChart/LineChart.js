
import { Tab, Tabs } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { graphicalData } from "../../../common/commonData";

const LineChart = ({ days }) => {

  const chartData = {
      labels: graphicalData.filteredDates(days),
      datasets: [
          {
              type: "line",
              label: 'Price',
              data: graphicalData.filteredOpeningPrice(days),
              fill: false,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                ],
          }
      ]
  }
  
  const options = {
    plugins: {
        title: {
        display: true,
        text: `Todays Opening Price: ${graphicalData.todaysOpeningPrice()} USD`,
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],

      x: {
        ticks: {
          beginAtZero: true,
          // maxTicksLimit: 30
            }
        }
    }
  
  };
          
  return (
      <div>
 
        <Line data={chartData} options={options} />

      </div>
  );
};

export default LineChart;