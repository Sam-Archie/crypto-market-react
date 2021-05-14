import React from 'react';


const Coin = () => {
        const today = new Date().toISOString().slice(0, 10)
        const timeSeries = ("Time Series (Digital Currency Daily)");
        // console.log(timeSeries);
        // console.log(timeSeries[`${today}`])
        // console.log(timeSeries[`${today}`]["1a. open (USD)"])
        // console.log(timeSeries[`${today}`]["2a. high (USD)"])
        // console.log(timeSeries[`${today}`]["3a. low (USD)"])
        // console.log(timeSeries[`${today}`]["4a. close (USD)"])
        // console.log(timeSeries[`${today}`]["5. volume"])
        // console.log(timeSeries[`${today}`]["6. market cap (USD)"])
    return (
        <>
        </>
    );
};

export default Coin;