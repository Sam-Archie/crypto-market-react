import Image from 'react-bootstrap/Image';
import hero from "../assets/images/hero-main.jpg";


const Hero = () => {

    return (
    <>
        <section id="hero">
            <p className="title_text title_text--small title_text--hero">Investing in Cryptocurrency is growing in popularity as more and more companies support payments using them. This app provides some key information on some of the largest mainstream currencies so you can make informed decisions with your investments.<br/>
            Check out the data in the coins section to get up to date market information on Bitcoin, Ethereum, Binance-Coin, Tether and Dogecoin.</p>

            <p className="title_text--small title_text--hero hero_text_alternate">Investing in Cryptocurrency is growing in popularity as more and more companies support payments using them. This app provides some key information on some of the largest mainstream currencies so you can make informed decisions with your investments.</p>
        </section>
        <Image className="hero-image" src={ hero }/>
    </>
    )   
}
export default Hero;