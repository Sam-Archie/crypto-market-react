import './styles/main.scss';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar';
import Hero from "./components/hero/Hero";
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Carousel from "./components/carousel/Carousel";

const App = () => {

const coinList = ["Bitcoin", "Etherium", "Binance Coin", "Tether", "Cardano", "Dogecoin"];

  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Carousel props={ coinList }/>
      <Contact />
      <Footer />
    </Fragment>
  )
}
export default App;
