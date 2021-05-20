import { Tabs, Tab, Accordion, Button, Card, TabContainer} from 'react-bootstrap';
import { useState } from 'react';
import BarChart from '../charts/barChart/BarChart';
import LineChart from '../charts/lineChart/LineChart';
import HealthKey from '../healthKey/HealthKey';

const Coin = ({ info, healthData }) => {

  const [key, setKey] = useState("7")
    return (
        <section className="modal_container">
          <article className="mt-4 mb-4">
            <h2 className="title_text title_text--modal">Overview</h2>
            <p className="paragraph_text--small">
                {info}
            </p>
          </article>

          <section className="pt-4">
            <Accordion defaultActiveKey="">
                  <h3 className="title_text title_text--modal">Price Information</h3>
                  <p>A collection of historical opening prices in USD over the last 7, 30 and 90 day periods.</p>
              <Card>

                <Accordion.Toggle className="mb-4 mt-4 mx-4 button btn-success" eventKey="0">
                  Display as Line Chart
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Tabs id="linecharts" defaultActiveKey="7"
                    activeKey={key}
                    onSelect={(key) => setKey(key)}
                    >
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
                  </Card.Body>
                </Accordion.Collapse>
                  <Accordion.Toggle className="mb-4 mt-4 mx-4 button btn-success" eventKey="1">
                    Display as Bar Chart
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Tabs
                        // onSelect={(key) => setKey(key)}
                        >
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
                    </Card.Body>
                  </Accordion.Collapse>
              </Card>
            </Accordion>
            <HealthKey/>
          </section>

      
          </section>
        );
        
    }
export default Coin;