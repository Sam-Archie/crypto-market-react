import { data } from '../../../data/json/data';
import { Bar } from "react-chartjs-2";
import { filteredByDaysOpeningPrice, priceComparison, filteredDays } from "../../../common/commonData";

const BarChart = ({ days }) => {


  const chartData = {
      labels: filteredDays(days),
      datasets: [
          {
              label: 'Price',
              data: filteredByDaysOpeningPrice(days),
              backgroundColor: priceComparison(),
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
          }
      ]
  }
  
  const options = {
      indexAxis: 'x',
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
          text: 'A Chart of Bars',
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