import './styles/main.scss';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar';
import Hero from "./components/hero/Hero";
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Carousel from "./components/carousel/Carousel";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Carousel />
      <Contact />
      <Footer />
    </Fragment>
  )
}
export default App;
