import './styles/main.scss';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar';
import Hero from "./components/hero/Hero";
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Contact />
      <Footer />
    </Fragment>
  )
}
export default App;
