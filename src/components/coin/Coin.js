import React from 'react';
import {data} from '../../data/json/data'


const Coin = () => {
        const today = new Date().toISOString().slice(0, 10)
        const timeSeries = ("Time Series (Digital Currency Daily)");

        const bitCoin = data[timeSeries];

        const openingPrices = Object.values(bitCoin).map((date, index) => {
            return date['1a. open (CNY)']
        })

        const dates = Object.keys(bitCoin).map(date => {
            return date;
        })
        
        console.log(openingPrices);
        console.log(dates);
    
        return (
            <>
            </>
        );
    
    }



export default Coin;