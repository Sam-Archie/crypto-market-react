import { Card, ProgressBar } from 'react-bootstrap';
import {ratingScores, ratingFields, cryptoRatings} from '../../common/healthData'; 


const Health = () => {

    const name = ratingScores[1];
    const fcasRating = ratingScores[2];
    const fcasScore = ratingScores[3];
    const developerScore = ratingScores[4];
    const marketMaturityScore = ratingScores[5];
    const utilityScore = ratingScores[6];
    const lastRefreshed = ratingScores[7].split(" ")[0];

    const variant = score => {
       return  score > 900 ? "superb-progress-bar" : 
                    score > 750 ? "attractive-progress-bar" :
                        score > 650 ? "basic-progress-bar" :
                            score > 500 ? "caution-progress-bar" : "fragile-progress-bar"
    }

    return (
        <>
            <h3 className="title_text title_text--modal mt-4">{name} Rating</h3>
            <p>FCAS rating : {fcasRating}</p>
            <p>FCAS score : {fcasScore}</p>
            <ProgressBar className={variant(fcasScore)}striped now={fcasScore / 10}/>
            <p>Developer Score: {developerScore}</p>
              <ProgressBar  className={variant(developerScore)} striped now={developerScore / 10}/>
            <p>Market Maturity Score: {marketMaturityScore}</p>
              <ProgressBar className={variant(marketMaturityScore)} striped now={marketMaturityScore / 10}/>
            <p>Utility Score: {utilityScore}</p>
              <ProgressBar striped className={variant(utilityScore)} now={utilityScore / 10}/>
            <p>Last Refreshed: {lastRefreshed}</p>
        </>
           
    );
};

export default Health;

 
// export const healthData = {
//     "Crypto Rating (FCAS)": {
//         "1. symbol": "BTC",
//         "2. name": "Bitcoin",
//         "3. fcas rating": "Attractive",
//         "4. fcas score": "894",
//         "5. developer score": "848",
//         "6. market maturity score": "877",
//         "7. utility score": "956",
//         "8. last refreshed": "2021-05-19 00:00:00",
//         "9. timezone": "UTC"
//     }
// }