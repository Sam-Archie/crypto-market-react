import { data } from "../data/json/data"

export const coinPrices = () => data[timeSeries()]

export const openingPrices = () => Object.values(coinPrices()).map((date) => date['1b. open (USD)']);

export const today = () => new Date().toISOString().slice(0, 10);

export const timeSeries = () => ("Time Series (Digital Currency Daily)");

export const coinInformation = () => data[timeSeries];

export const dates = () => Object.keys(coinPrices()).map(date => date);

export const filteredDays = days => dates().filter((date, index) => index < days).reverse();

export const filteredByDaysOpeningPrice = days => openingPrices().filter((date, index) => index < days).reverse();

export const todaysOpeningPrice = () => openingPrices().filter((date, index) => index === 0);
 
export const priceComparison = () => {
    let ninetyPrices = filteredByDaysOpeningPrice(90);
    console.log(ninetyPrices)
    let colors = ninetyPrices.map((price, index) => {
         return +price[index] < +price[index + 1] ? "red" : "green"
    })
    

    console.log(colors)
    // let colors = [];

    // for(let i = openingPrices.length; i <= openingPrices.length && i > 910; i -= 1)
    // {
    //     console.log(openingPrices[i])

    //     openingPrices[i] > openingPrices[--i] ? colors.unshift("red") : 
    //         openingPrices[i] === openingPrices[--i] ? colors.unshift("black") : colors.unshift("green");
    // }
    // return colors;
}
