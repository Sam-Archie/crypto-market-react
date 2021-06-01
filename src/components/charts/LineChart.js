import { Line } from "react-chartjs-2";

const LineChart = ({days, dates, prices}) => {

    const filteredDatesByDays = days => dates.filter((date, index) => index < days).reverse();
    const dateFilteredOpeningPrices = days => prices.filter((date, index) => index < days).reverse();
    const todaysOpeningPrice = () => prices.filter((date, index) => index === 0);

    
        const borderColors = (days) => {
        const prices = dateFilteredOpeningPrices(days + 1);
    
        const borderColors = prices.map((price, index) =>  {
            if (index === 0) return;
            return +prices[index - 1] < +price ? "hsl(137, 62%, 35%, 0.8)" : "hsl(0, 80%, 48%, 0.8)";
        })
        
        borderColors.shift();
        return borderColors
    };

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