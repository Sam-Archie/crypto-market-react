import React, { Fragment } from 'react';
import { CarouselItem, Button, Carousel, Image, Modal } from 'react-bootstrap';
import CoinData from "../coinData/CoinData";

const applciationCarousel = (coinList) => {
 console.log(coinList)
    return (
   <>
       <Carousel>
           {coinList.props.map((coin, index) => (
               <Carousel.Item key={ index }>
                   <Image src="https://place-puppy.com/300x300" />
                <Carousel.Caption>
                    <p>{coin}</p>
                </Carousel.Caption>
            </ Carousel.Item>
           ))}
       </Carousel>
   </>
    );
};

export default applciationCarousel;