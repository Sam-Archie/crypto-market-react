import { Accordion, Card, ProgressBar } from 'react-bootstrap';


const HealthKey = () => {
    return (
        <div className="mt-4">
            <Accordion >
                <h3 className="title_text title_text--modal ">Legend</h3>
                <Card>
                <Accordion.Toggle className="mb-4 mt-4 mx-4 button btn-outline-dark" eventKey="0">
                    Display Indicator Legend
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p className="paragraph_text paragraph_text--small mb-0">Superb 900-1000</p>
                            <ProgressBar striped className="superb-progress-bar mb-4" now={90}/>
                            <p className="paragraph_text paragraph_text--small  mb-0">Attractive 750-899</p>
                            <ProgressBar striped className="attractive-progress-bar mb-4" now={80}/>
                            <p className="paragraph_text paragraph_text--small  mb-0">Basic 650-749</p>
                            <ProgressBar striped className="basic-progress-bar mb-4" now={70}/>
                            <p className="paragraph_text paragraph_text--small  mb-0">Caution 500-649</p>
                            <ProgressBar striped className="caution-progress-bar mb-4" now={60}/>
                            <p className="paragraph_text paragraph_text--small  mb-0">Fragile &#60; 500</p>
                            <ProgressBar striped className="fragile-progress-bar mb-4" now={50}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>              
            
    
        </div>
           
    );
};

export default HealthKey;