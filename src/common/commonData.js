import { data } from "../data/json/data"

const timeSeries = ("Time Series (Digital Currency Daily)");

const bitCoin = data[timeSeries];

const openingPrices = Object.values(bitCoin).map((date) => date['1b. open (USD)']);

const lastNumOfPrices = (days) => openingPrices.filter((date, index) => index < days).reverse(); 

const dates = Object.keys(bitCoin).map(date => date);

const lastNumOfDays = (days) => dates.filter((date, index) => index < days).reverse();

const todaysOpeningPrice = () => openingPrices.filter((date, index) => index === 0)
    
export const graphicalData = {

    today: new Date().toISOString().slice(0, 10),

    timeSeries: ("Time Series (Digital Currency Daily)"), 

    coinInformation: data[timeSeries],

    dates: Object.keys(bitCoin).map(date => date),

    lastNumOfDays: (days) => dates.filter((date, index) => index < days).reverse(),
    lastNumOfPrices: (days) => openingPrices.filter((date, index) => index < days).reverse(),
    todaysOpeningPrice: () => openingPrices.filter((date, index) => index === 0),  

    openingPrices: Object.values(bitCoin).map((date) => date['1b. open (USD)'])
    
}