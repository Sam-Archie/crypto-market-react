import { Tabs, Tab, Accordion, Button} from 'react-bootstrap';
import { useState } from 'react';
import BarChart from '../charts/barChart/BarChart';
import LineChart from '../charts/lineChart/LineChart';

const Coin = ({ info, healthData }) => {

  const [key, setKey] = useState("line")
  
    return (
        <section className="modal_container">
          <article className="mt-4 mb-4">
            <h2>Overview</h2>
            <p className="paragraph_text--small">
                {info}
            </p>
          </article>

          <section className="pt-4">
            <Accordion defaultActiveKey="0">
                <Accordion.Toggle className="mb-4" as={Button} variant="link" eventKey="0">
                  Show Graphs
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Tabs
                  onSelect={(key) => setKey(key)}>
                    <Tab eventKey="7" title="7 Days">
                      <LineChart className="mt-4 mb-4" days={7}/>
                    </Tab>
                    <Tab eventKey="30" title="30 Days">
                      <LineChart days={30}/>
                    </Tab>
                    <Tab eventKey="90" title="90 Days">
                      <LineChart days={90}/>
                    </Tab>
                  </Tabs>
                </Accordion.Collapse>
            </Accordion>
          </section>
            {/* <Tabs
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
            </Tabs> */}
      
          </section>
        );
        
    }
export default Coin;