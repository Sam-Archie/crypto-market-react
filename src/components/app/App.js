import '../../styles/main.scss';
import { Fragment, useEffect } from 'react';
import NavBar from '../header/NavBar';
import Hero from "../hero/Hero";
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';
import Carousel from "../carousel/Carousel";

const App = ({ getBitcoinData }) => {

  const getBitcoinDataMethod = getBitcoinData;

  useEffect(() => { 
    
      getBitcoinDataMethod();

  }, [getBitcoinDataMethod])

const coinList = ["Bitcoin", "Etherium", "Binance Coin", "Tether", "Cardano", "Dogecoin"];

  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Carousel coinList={ coinList }/>
      <Contact />
      <Footer />
    </Fragment>
  )
}
export default App;
