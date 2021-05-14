import React, { Fragment } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import CoinModal from "../coinModal/CoinModal";

const applciationCarousel = ({coinList}) => {

    return (
   <>
       <Carousel className="carousel-application">
           {coinList.map((coin, index) => (
               <Carousel.Item className="flex-column" key={ index }>
                   <Image className="carousel-images carousel-inner img" src="https://place-puppy.com/300x300" />
                    <Carousel.Caption>
                        <p className="title_text">{coin}</p>
                    </Carousel.Caption>
                    <CoinModal coin={coin}/>
            </ Carousel.Item>
           ))}
       </Carousel>
   </>
    );
};

export default applciationCarousel;