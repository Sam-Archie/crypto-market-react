import { ProgressBar } from 'react-bootstrap';


const HealthKey = () => {
    return (
        <div className="mt-4">
            <h3 className="title_text title_text--modal">Indicators</h3>
            <div>
                <p className="paragraph_text--small">Superb 900-1000</p>
                <ProgressBar striped className="superb-progress-bar" now={90}/>
                <p className="paragraph_text--small">Attractive 750-899</p>
                <ProgressBar striped className="attractive-progress-bar" now={80}/>
                <p className="paragraph_text--small">Basic 650-749</p>
                <ProgressBar striped className="basic-progress-bar" now={70}/>
                <p className="paragraph_text--small">Caution 500-649</p>
                <ProgressBar striped className="caution-progress-bar" now={60}/>
                <p className="paragraph_text--small">Fragile &#60; 500</p>
                <ProgressBar striped className="fragile-progress-bar" now={50}/>
            </div>              
            
    
        </div>
           
    );
};

export default HealthKey;