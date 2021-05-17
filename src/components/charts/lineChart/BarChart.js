import { data } from '../../../data/json/data';
import { Bar } from "react-chartjs-2";
import { graphicalData } from "../../../common/commonData";

const BarChart = () => {
   
  const chartData = {
      labels: graphicalData.last30DaysDates,
      datasets: [
          {
              label: 'Price',
              data: graphicalData.last30DaysPrices,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
          }
      ]
  }
  
  const options = {
      indexAxis: 'y',
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'ChartJS Bar Chart',
        },
        legend: {
          position: 'right',
        },
      },
    };
          
    return (
        <div>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;