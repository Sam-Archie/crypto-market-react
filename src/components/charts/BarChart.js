import { Bar } from "react-chartjs-2";

const BarChart = ({ days, prices, dates }) => {

    const filteredDatesByDays = days => dates.filter((date, index) => index < days).reverse();
    const dateFilteredOpeningPrices = days => prices.filter((date, index) => index < days).reverse();
    const todaysOpeningPrice = () => prices.filter((date, index) => index === 0);

    
        const borderColors = (days) => {
        const prices = dateFilteredOpeningPrices(days + 1);
    
        const borderColors = prices.map((price, index) => {
            if (index === 0) return;
            return +prices[index - 1] < +price ? "hsl(137, 62%, 35%, 0.8)" : "hsl(0, 80%, 48%, 0.8)"
        })
        
        borderColors.shift();
        return borderColors
    };

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
            text: `Todays Opening Price: ${+todaysOpeningPrice()} USD`,
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