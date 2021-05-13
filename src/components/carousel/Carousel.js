import React, { Fragment } from 'react';
import { CarouselItem, Image, Modal } from 'react-bootstrap';

const Carousel = () => {
    return (
   <Fragment>
       <Carousel>
           <Carousel.Item />
                <Image />
            <CarouselItem.Caption>
                <p>Bitcoin</p>
                <p>Please click for further information</p>
                <Modal>

                </Modal>
            </CarouselItem.Caption>
       </Carousel>
   </Fragment>
    );
};

export default Carousel;