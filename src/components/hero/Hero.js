import React, { Fragment } from 'react';
import Image from 'react-bootstrap/Image';
import hero from "../../assets/images/hero-main.jpg";


const Hero = () => {

    return (
    <Fragment>
    
        <section id="hero">
            <p className="title_text title_text--small title_text--hero">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <Image className="hero-image" src={ hero }/>
    </Fragment>
    )   
}
export default Hero;