import { Tabs, Tab, Nav } from 'react-bootstrap';
import { useState } from 'react';
import BarChart from '../charts/barChart/BarChart';
import LineChart from '../charts/lineChart/LineChart';

const Coin = () => {

  const [key, setKey] = useState("line")

    return (
          <>
          <Tabs
          onSelect={(key) => setKey(key)}>
            <Tab eventKey="7" title="7 Days">
              <LineChart days={7}/>
            </Tab>
            <Tab eventKey="30" title="30 Days">
              <LineChart days={30}/>
            </Tab>
            <Tab eventKey="90" title="90 Days">
              <LineChart days={90}/>
            </Tab>
            </Tabs>
            <Tabs
          onSelect={(key) => setKey(key)}>
            <Tab eventKey="7" title="7 Days">
              <BarChart days={7}/>
            </Tab>
            <Tab eventKey="30" title="30 Days">
              <BarChart days={30}/>
            </Tab>
            <Tab eventKey="90" title="90 Days">
              <BarChart days={90}/>
            </Tab>
            </Tabs>
      
          </>
        );
        
    }
export default Coin;