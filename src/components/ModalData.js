import { Tabs, Tab, Accordion, Card, Spinner} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from '../axios';
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import HealthKey from './HealthKey';
import HealthScore from './HealthScore';
import ErrorPage from "./ErrorPage"

const ModalData = ({ description, shortHand }) => {
    //State

    const [key, setKey] = useState("7")
    const [coinPrices, setCoinPrices] = useState([]);
    const [datePoints, setDatePoints] = useState([]);
    const [healthScores, setHealthScores] = useState([]);
    const [apiReturn, setApiReturn] = useState(false);
    const [healthDataSuccess, setHealthDataSuccess] = useState(false)
    const [priceDataSuccess, setPriceDataSuccess] = useState(false)
    
//Api calls

    const getApiHealthData = async () => {
        
        try {
            const healthReturn = await axios.get(`query?function=CRYPTO_RATING&symbol=${shortHand}&apikey=FT8LTPYM6HXLP8GP`);
            if(healthReturn === Object.keys(healthReturn).length === 0 && healthReturn.constructor === Object) {
                setHealthDataSuccess(false);
            } else {
                const rating = "Crypto Rating (FCAS)";
                const cryptoRatings = await healthReturn.data[rating];
                const ratingScores = await Object.values(cryptoRatings);
                setHealthScores(ratingScores);
                setApiReturn(true);
                setHealthDataSuccess(true); 
            }
        }
        catch(error) {
            console.log(error)
        }
    }
    
    const getPriceApiData = async () => {
        try {
            const priceReturn = await axios.get(`query?function=DIGITAL_CURRENCY_DAILY&symbol=${shortHand}&market=USD&apikey=F5YQIALXG6VW0QEW`);
            if (priceReturn === Object.keys(priceReturn).length === 0 && priceReturn.constructor === Object) {
                setPriceDataSuccess(false)
            } else {
                const timeSeries = "Time Series (Digital Currency Daily)";
                const filteredApiPriceData = await priceReturn.data[timeSeries];
                const dates = await Object.keys(filteredApiPriceData).map(date => date);
                const historicOpeningPrices = await Object.values(filteredApiPriceData).map((date) => date['1b. open (USD)']);
                setCoinPrices(historicOpeningPrices);
                setDatePoints(dates);
                setApiReturn(true);
                setPriceDataSuccess(true)
            }
        }
        catch(error) {
            console.log(error);
        }
    }  
  
    //Functions called on render
    useEffect(() => {
      getPriceApiData();
      getApiHealthData();
  
    },[])

    
      return (
        <section className="modal_container">
            {!apiReturn ? 
                <>
                    <Spinner className="mx-4" animation="border" variant="secondary"/>
                    <p className="title_text title_text--modal mt-4">Loading</p>
                </> : 
                    <>
                        <article className="mt-4 mb-4">
                        <h2 className="title_text title_text--modal">Overview</h2>
                        <p className="paragraph_text paragraph_text--small">
                            {description}
                        </p>
                        </article>

                        <section className="pt-4">
            
                        {priceDataSuccess ? <Accordion defaultActiveKey="">
                                <h3 className="title_text title_text--modal">Price Information</h3>
                                <p className="paragraph_text paragraph_text--small mb-2">A collection of historical opening prices in USD over the last 7, 30 and 90 day periods.</p>
                            <Card>
            
                            <Accordion.Toggle className="mb-4 mt-4 mx-4 button btn-outline-dark" eventKey="0">
                                Display as Line Chart
                            </Accordion.Toggle>
            
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <Tabs id="linecharts" defaultActiveKey="7"
                                activeKey={key}
                                onSelect={(key) => setKey(key)}
                                >
                                    <Tab eventKey="7" title="7 Days">
                                    <LineChart className="mt-4 mb-4" days={7} dates={datePoints} prices={coinPrices}/>
                                    </Tab>
                                    <Tab eventKey="30" title="30 Days">
                                    <LineChart days={30} dates={datePoints} prices={coinPrices}/>
                                    </Tab>
                                    <Tab eventKey="90" title="90 Days">
                                    <LineChart days={90} dates={datePoints} prices={coinPrices}/>
                                    </Tab>
                                </Tabs>
                                </Card.Body>
                            </Accordion.Collapse>
                                <Accordion.Toggle className="mb-4 mt-4 mx-4 button btn-outline-dark" eventKey="1">
                                Display as Bar Chart
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Tabs
                                    >
                                    <Tab eventKey="7" title="7 Days">
                                    <BarChart days={7} dates={datePoints} prices={coinPrices}/>
                                    </Tab>
                                    <Tab eventKey="30" title="30 Days">
                                    <BarChart days={30} dates={datePoints} prices={coinPrices}/>
                                    </Tab>
                                    <Tab eventKey="90" title="90 Days">
                                    <BarChart days={90} dates={datePoints} prices={coinPrices}/>
                                    </Tab>
                                </Tabs>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion> : <ErrorPage />}
                     {healthDataSuccess ? <HealthScore scores={healthScores}/> : <ErrorPage />}
                        <HealthKey/>
                        </section>
                        </>
            }
            </section>
          );
          
      }

export default ModalData;