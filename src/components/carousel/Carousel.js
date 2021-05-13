import React, { Fragment } from 'react';
import { CarouselItem, Button, Carousel, Image, Modal } from 'react-bootstrap';
import CoinData from "../coinData/CoinData";

const applciationCarousel = (coinList) => {

    return (
   <>
       <Carousel className="carousel-application">
           {coinList.props.map((coin, index) => (
               <Carousel.Item className="flex-column" key={ index }>
                   <Image className="carousel-images carousel-inner img" src="https://place-puppy.com/300x300" />
                    <Carousel.Caption>
                        <p className="paragraph_text">{coin}</p>
                    </Carousel.Caption>
            </ Carousel.Item>
           ))}
       </Carousel>
   </>
    );
};

export default applciationCarousel;