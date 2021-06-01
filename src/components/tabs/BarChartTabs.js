import React from 'react';
import BarChart from '../charts/BarChart';
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from "react";

const BarChartTabs = ({coinPrices, dates }) => {
    return (
    <Tabs>
        <Tab eventKey="7" title="7 Days">
        <BarChart days={7} dates={dates} prices={coinPrices}/>
        </Tab>
        <Tab eventKey="30" title="30 Days">
        <BarChart days={30} dates={dates} prices={coinPrices}/>
        </Tab>
        <Tab eventKey="90" title="90 Days">
        <BarChart days={90} dates={dates} prices={coinPrices}/>
        </Tab>
    </Tabs>
    );
};

export default BarChartTabs;