import { Carousel, Image } from 'react-bootstrap';
import {coinInformation} from '../data/coinInformation'
import Modal from './Modal'

const CoinsCarousel = () => {
    return (
        <section id="coins">
            <Carousel interval={null} className="carousel-application">
                {coinInformation.map((coin, index) => ( 
                    <Carousel.Item className="flex-column" key={ index }  >
                        <Image className="carousel-inner" src={coin.imagePath} />
                            <Carousel.Caption>
                                <p className="title_text">{coin.name}</p>
                                <Modal name={coin.name} description={coin.info} shortHand={coin.shortHand}/>
                            </Carousel.Caption>
                    </ Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default CoinsCarousel;