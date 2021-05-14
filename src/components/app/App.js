import '../../styles/main.scss';
import { Fragment, useEffect } from 'react';
import NavBar from '../header/NavBar';
import Hero from "../hero/Hero";
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';
import Carousel from "../carousel/Carousel";

const App = ({ getBitcoinData, getBinanceCoinData, getEthereumData, getTetherData, getDogeCoinData }) => {

  const getBitcoinDataMethod = getBitcoinData;
  const getBinanceCoinDataMethod = getBinanceCoinData;
  const getEthereumDataMethod = getEthereumData;
  const getDogeCoinDataMethod = getDogeCoinData;
  const getTetherDataMethod = getTetherData;

  useEffect(() => { 
    
      getDogeCoinDataMethod();
      getBitcoinDataMethod();
      getBinanceCoinDataMethod();
      getTetherDataMethod();
      getEthereumDataMethod();

  }, [getBitcoinDataMethod, getEthereumDataMethod, getDogeCoinDataMethod, getBinanceCoinDataMethod, getTetherDataMethod])

const coinList = ["Bitcoin", "Ethereum", "Binance Coin", "Tether", "Dogecoin"];

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
