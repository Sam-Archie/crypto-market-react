import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import CoinModal from "../coinModal/CoinModal";
import { cryptoRatings } from "../../common/healthData";

const applciationCarousel = ({ coinList }) => {

    return (
   <section id="coins">
       <Carousel className="carousel-application">
           {coinList.map((coin, index) => ( 
               <Carousel.Item className="flex-column" key={ index }>
                   <Image className="carousel-inner" src={coin.imagePath} />
                    <Carousel.Caption>
                        <p className="title_text">{coin.name}</p>
                        <CoinModal coin={coin.name} info={coin.info} healthData={cryptoRatings}/>
                    </Carousel.Caption>
            </ Carousel.Item>
           ))}
       </Carousel>
   </section>
    );
};

export default applciationCarousel;