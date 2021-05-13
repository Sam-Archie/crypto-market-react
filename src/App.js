import './styles/main.scss';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar';
import Hero from "./components/hero/Hero";
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Footer />
    </Fragment>
  )
}
export default App;
