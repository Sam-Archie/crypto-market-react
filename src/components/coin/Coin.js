import axios from '../../../src/axios'
import React from 'react';
import { useState, useEffect } from 'react';

const Coin = () => {

    const [coinData, setCoinData] = useState([])

    useEffect(() => {axios.get("query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=FT8LTPYM6HXLP8GP").then(({ data }) => {
        console.log(data)
        setCoinData(data)
    })}, [])
    console.log(coinData)
    return (
        <>
            
        </>
    );
};

export default Coin;