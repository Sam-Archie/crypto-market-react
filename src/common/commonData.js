import { data } from "../data/json/data"

const timeSeries = ("Time Series (Digital Currency Daily)");

const bitCoin = data[timeSeries];

const openingPrices = Object.values(bitCoin).map((date) => date['1b. open (USD)'])

const last30DaysPrices = openingPrices.filter((date, index) => index < 30).reverse();

const dates = Object.keys(bitCoin).map(date => date);

const last30DaysDates = dates.filter((date, index) => index < 30).reverse();
    
export const graphicalData = {

    today: new Date().toISOString().slice(0, 10),

    timeSeries: ("Time Series (Digital Currency Daily)"), 

    coinInformation: data[timeSeries],

    dates: Object.keys(bitCoin).map(date => date),

    last30DaysDates: dates.filter((date, index) => index < 30).reverse(),   

    last30DaysPrices: openingPrices.filter((date, index) => index < 30).reverse(),

    openingPrices: Object.values(bitCoin).map((date) => date['1b. open (USD)'])
    
}