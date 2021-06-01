import { Card, ProgressBar } from 'react-bootstrap';

const HealthScore = ({ scores }) => {

    
    const name = scores[1];
    const fcasRating = scores[2];
    const fcasScore = scores[3];
    const developerScore = scores[4];
    const marketMaturityScore = scores[5];
    const utilityScore = scores[6];
    const lastRefreshed = scores[7].split(" ")[0];

    const variant = score => {
       return  score > 900 ? "superb-progress-bar mb-4" : 
                    score > 750 ? "attractive-progress-bar mb-4" :
                        score > 650 ? "basic-progress-bar mb-4":
                            score > 500 ? "caution-progress-bar mb-4" : "fragile-progress-bar mb-4"
    }

    return (
        <>
            <h3 className="title_text title_text--modal mt-4 mb-2">{name} Rating</h3>
            <Card>
                <Card.Body>
                <h4 className="paragraph_text paragraph_text--small mb-4">The FCAS rating is <span className="paragraph_text paragraph_text--rating">{fcasRating}</span></h4>
                <p className="paragraph_text paragraph_text--small mb-0">FCAS score : {fcasScore}</p>
                <ProgressBar className={variant(fcasScore)} striped now={fcasScore / 10}/>
                <p className="paragraph_text paragraph_text--small mb-0">Developer Score: {developerScore}</p>
                <ProgressBar  className={variant(developerScore)} striped now={developerScore / 10}/>
                <p className="paragraph_text paragraph_text--small mb-0">Market Maturity Score: {marketMaturityScore}</p>
                <ProgressBar className={variant(marketMaturityScore)} striped now={marketMaturityScore / 10}/>
                <p className="paragraph_text paragraph_text--small mb-0">Utility Score: {utilityScore}</p>
                <ProgressBar striped className={variant(utilityScore)} now={utilityScore / 10}/>
                <p className="paragraph_text paragraph_text--small mb-0">Last Refreshed: {lastRefreshed}</p>
                </Card.Body>
            </Card>
        </>
           
    );
};

export default HealthScore;