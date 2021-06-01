import React from 'react';
import LineChart from '../charts/LineChart';
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from "react";
 
const LineChartTabs = ({ coinPrices, dates }) => {
   const [key, setKey] = useState("7")

    return (
        <Tabs id="linecharts" defaultActiveKey="7"
        activeKey={key}
        onSelect={(key) => setKey(key)}>
            <Tab eventKey="7" title="7 Days">
            <LineChart className="mt-4 mb-4" days={7} dates={dates} prices={coinPrices}/>
            </Tab>
            <Tab eventKey="30" title="30 Days">
            <LineChart days={30} dates={dates} prices={coinPrices}/>
            </Tab>
            <Tab eventKey="90" title="90 Days">
            <LineChart days={90} dates={dates} prices={coinPrices}/>
            </Tab>
        </Tabs>
    );
};

export default LineChartTabs;