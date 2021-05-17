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

    filteredDates: (days) => dates.filter((date, index) => index < days).reverse(),

    filteredOpeningPrice: (days) => openingPrices.filter((date, index) => index < days).reverse(),

    todaysOpeningPrice: () => openingPrices.filter((date, index) => index === 0),  

    openingPrices: Object.values(bitCoin).map((date) => date['1b. open (USD)'])
    
}
 
export const priceComparison = () => {
    let ninetyPrices = graphicalData.filteredOpeningPrice(90);
    console.log(ninetyPrices)

    let colors = ninetyPrices.map((price, index) => {
        return price[index] < price[index + 1] ? "red" : "green"
    })
    return colors


    // let colors = [];

    // for(let i = openingPrices.length; i <= openingPrices.length && i > 910; i -= 1)
    // {
    //     console.log(openingPrices[i])

    //     openingPrices[i] > openingPrices[--i] ? colors.unshift("red") : 
    //         openingPrices[i] === openingPrices[--i] ? colors.unshift("black") : colors.unshift("green");
    // }
    // return colors;
}
