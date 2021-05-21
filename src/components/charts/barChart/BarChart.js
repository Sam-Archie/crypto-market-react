import { data } from '../../../data/json/data';
import { Bar } from "react-chartjs-2";
import { dateFilteredOpeningPrices, filteredDatesByDays, graphColors, borderColors } from "../../../common/commonData";

const BarChart = ({ days }) => {


  const chartData = {
      labels: filteredDatesByDays(days),
      datasets: [
          {
              label: 'Price',
              data: dateFilteredOpeningPrices(days),
              backgroundColor: "hsl(0, 100%, 50%, 0)",
              borderColor: borderColors(days),
              borderWidth: 2,
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
        display: false
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