import '../../styles/main.scss';
import { Fragment, useEffect } from 'react';
import NavBar from '../header/NavBar';
import Hero from "../hero/Hero";
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';
import Carousel from "../carousel/Carousel";
import { coinInfo } from "../../data/coinInfo/CoinInfo";

const App = ({ getBitcoinData, getBinanceCoinData, getEthereumData, getTetherData, getDogeCoinData, getBitcoinHealth, getBinanceCoinHealth, getEthereumHealth, getDogeCoinHealth, getTetherHealth }) => {

  // const getBitcoinDataMethod = getBitcoinData;
  // const getBinanceCoinDataMethod = getBinanceCoinData;
  // const getEthereumDataMethod = getEthereumData;
  // const getDogeCoinDataMethod = getDogeCoinData;
  // const getTetherDataMethod = getTetherData;

  // const getBitcoinHealthMethod = getBitcoinHealth;
  // const getBinanceCoinHealthMethod = getBinanceCoinHealth;
  // const getEthereumHealthMethod = getEthereumHealth;
  // const getDogeCoinHealthMethod = getDogeCoinHealth;
  // const getTetherHealthMethod = getTetherHealth;

  // useEffect(() => { 
    
  // getDogeCoinDataMethod();
  // getBitcoinDataMethod();
  // getBinanceCoinDataMethod();
  // getTetherDataMethod();
  // getEthereumDataMethod();
  // getBitcoinHealthMethod();
  // getBinanceCoinHealthMethod();
  // getEthereumHealthMethod();
  // getDogeCoinHealthMethod();
  // getTetherHealthMethod();

  // }, [getBitcoinDataMethod, getEthereumDataMethod, getDogeCoinDataMethod, getBinanceCoinDataMethod, getTetherDataMethod, getBitcoinHealthMethod , getBinanceCoinHealthMethod, getEthereumHealthMethod, getDogeCoinHealthMethod, getTetherHealthMethod])

  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Carousel coinList={ coinInfo }/>
      <Contact />
      <Footer />
    </Fragment>
  )
}
export default App;
