import { data } from "../data/json/data"

export const coinPrices = () => data[timeSeries()]

export const openingPrices = () => Object.values(coinPrices()).map((date) => date['1b. open (USD)']);

export const today = () => new Date().toISOString().slice(0, 10);

export const timeSeries = () => "Time Series (Digital Currency Daily)";

export const coinInformation = () => data[timeSeries];

export const dates = () => Object.keys(coinPrices()).map(date => date);

export const filteredDays = days => dates().filter((date, index) => index < days).reverse();

export const filteredByDaysOpeningPrice = days => openingPrices().filter((date, index) => index < days).reverse();

export const todaysOpeningPrice = () => openingPrices().filter((date, index) => index === 0);
 
export const graphColors = (days) => {

       let ninetyPrices = filteredByDaysOpeningPrice(days + 1);
    const colors = ninetyPrices.map((price, index) =>  {
        if (index === 0) return;
        return +ninetyPrices[index - 1] < +price ? "hsl(137, 62%, 35%, 0.55)" : "hsl(0, 80%, 48%, 0.55)"
    })
    colors.shift();
    return colors
};


export const borderColors = (days) => {

       let ninetyPrices = filteredByDaysOpeningPrice(days + 1);
    const colors = ninetyPrices.map((price, index) =>  {
        if (index === 0) return;
        return +ninetyPrices[index - 1] < +price ? "hsl(137, 62%, 35%, 0.8)" : "hsl(0, 80%, 48%, 0.8)"
    })
    colors.shift();
    return colors
};


// describe("testing price comparison", () => {
//     it("works for ninety days", () => {
//         const result = priceComparison(90);
//         expect(result).toHaveLength(90);
//     })

// })