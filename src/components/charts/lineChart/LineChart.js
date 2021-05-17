
import { Line } from "react-chartjs-2";
import { graphicalData } from "../../../common/commonData";

const LineChart = () => {
    
  const chartData = {
      labels: graphicalData.last30DaysDates,
      datasets: [
          {
              type: "line",
              label: 'Price',
              data: graphicalData.last30DaysPrices,
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
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
          
  return (
      <div>
          <Line data={chartData} options={options} />
      </div>
  );
};

export default LineChart;