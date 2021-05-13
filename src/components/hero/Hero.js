import React from 'react';
import Image from 'react-bootstrap/Image';
import hero from "../../assets/images/hero-main.jpg"


const Hero = () => {
    return (
        <>
            <Image fluid src={ hero }/>
        </>
    )   
}
export default Hero;