import { data } from '../../../data/json/data';
import { Bar } from "react-chartjs-2"

const BarChart = () => {
    const today = new Date().toISOString().slice(0, 10)

    const timeSeries = ("Time Series (Digital Currency Daily)");
    
    const bitCoin = data[timeSeries];
    
    const openingPrices = Object.values(bitCoin).map((date) => date['1a. open (CNY)'])
    
    const last30DaysPrices = openingPrices.filter((date, index) => index >= 970)
    
    const dates = Object.keys(bitCoin).map(date => date);
    
    const last30DaysDates = dates.filter((date, index) => index >= 970)
    
        const chartData = {
            labels: last30DaysDates,
            datasets: [
                {
                    label: 'Price',
                    data: last30DaysPrices,
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
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart',
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