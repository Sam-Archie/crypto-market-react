import { data } from "../data/json/data"

export const timeSeries = "Time Series (Digital Currency Daily)";

export const coinInformation = data[timeSeries];

export const historicOpeningPrices = Object.values(coinInformation).map((date) => date['1b. open (USD)']);

export const today = new Date().toISOString().slice(0, 10);

export const dates = Object.keys(coinInformation).map(date => date);

export const filteredDatesByDays = days => dates.filter((date, index) => index < days).reverse();

export const dateFilteredOpeningPrices = days => historicOpeningPrices.filter((date, index) => index < days).reverse();

export const todaysOpeningPrice = () => historicOpeningPrices.filter((date, index) => index === 0);
 
export const graphColors = (days) => {
    const prices = dateFilteredOpeningPrices(days + 1);

    const graphColors = prices.map((price, index) =>  {
        if (index === 0) return;
        return +prices[index - 1] < +price ? "hsl(137, 62%, 35%, 0.55)" : "hsl(0, 80%, 48%, 0.55)"
    })

    graphColors.shift();
    return graphColors
};

export const borderColors = (days) => {
    const prices = dateFilteredOpeningPrices(days + 1);

    const borderColors = prices.map((price, index) =>  {
        if (index === 0) return;
        return +prices[index - 1] < +price ? "hsl(137, 62%, 35%, 0.8)" : "hsl(0, 80%, 48%, 0.8)"
    })
    
    borderColors.shift();
    return borderColors
};


// describe("testing price comparison", () => {
//     it("works for ninety days", () => {
//         const result = priceComparison(90);
//         expect(result).toHaveLength(90);
//     })

// })