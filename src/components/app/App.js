import '../../styles/main.scss';
import { Fragment, useEffect } from 'react';
import NavBar from '../header/NavBar';
import Hero from "../hero/Hero";
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';
import Carousel from "../carousel/Carousel";
import { coinInfo } from "../../data/coinInfo/CoinInfo";

const App = ({ getBitcoinData, getBinanceCoinData, getEthereumData, getTetherData, getDogeCoinData }) => {

  const getBitcoinDataMethod = getBitcoinData;
  const getBinanceCoinDataMethod = getBinanceCoinData;
  const getEthereumDataMethod = getEthereumData;
  const getDogeCoinDataMethod = getDogeCoinData;
  const getTetherDataMethod = getTetherData;

  console.log(coinInfo)
  // useEffect(() => { 
    
  //     getDogeCoinDataMethod();
  //     getBitcoinDataMethod();
  //     getBinanceCoinDataMethod();
  //     getTetherDataMethod();
  //     getEthereumDataMethod();

  // }, [getBitcoinDataMethod, getEthereumDataMethod, getDogeCoinDataMethod, getBinanceCoinDataMethod, getTetherDataMethod])

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
