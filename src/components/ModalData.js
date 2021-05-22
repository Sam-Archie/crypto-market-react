import { Tabs, Tab, Accordion, Card, Spinner} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from '../axios';
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import HealthKey from './HealthKey';
import HealthScore from './HealthScore';


const ModalData = ({ description, shortHand }) => {
    const [key, setKey] = useState("7")
    const [coinPrices, setCoinPrices] = useState([]);
    const [datePoints, setDatePoints] = useState([]);
    const [healthScores, setHealthScores] = useState([]);
    const [apiReturn, setApiReturn] = useState(false);
    

    const getApiData = async () => {


        const priceReturn = await axios.get(`query?function=DIGITAL_CURRENCY_DAILY&symbol=${shortHand}&market=USD&apikey=F5YQIALXG6VW0QEW`);
        const healthReturn = await axios.get(`query?function=CRYPTO_RATING&symbol=${shortHand}&apikey=FT8LTPYM6HXLP8GP`);

        if (priceReturn || healthReturn === null) {
            console.log("error");
        }


        // Create a variable to use as a filter
        const timeSeries = "Time Series (Digital Currency Daily)";
        const rating = "Crypto Rating (FCAS)";

        // Filter the API return based on the above variable
        const filteredApiPriceData = priceReturn.data[timeSeries];
        const cryptoRatings = healthReturn.data[rating];

        // Access just the prices from the API return and put them into an array
        const historicOpeningPrices = Object.values(filteredApiPriceData).map((date) => date['1b. open (USD)']);
        // Access just the dates from the API return and store them in an array
        const dates = Object.keys(filteredApiPriceData).map(date => date);

        // Access just the datasets in the health return and store in an array
        const ratingFields = Object.keys(cryptoRatings)
        // Access just just scores in the health return and store in an array
        const ratingScores = Object.values(cryptoRatings)

        // Get todays date
        const today = new Date().toISOString().slice(0, 10);


    
      setCoinPrices(historicOpeningPrices);
      setDatePoints(dates);
      setHealthScores(ratingScores);
      
      setApiReturn(true);
    }
  
    useEffect(() => {
      getApiData() 
  
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
                        <Accordion defaultActiveKey="">
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
                        </Accordion>
                        <HealthScore scores={healthScores}/>
                        <HealthKey/>
                        </section>
                        </>
            }
  
        
            </section>
          );
          
      }

export default ModalData;