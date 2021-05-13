import './styles/main.scss';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar';
import Hero from "./components/hero/Hero"

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Hero />
    </Fragment>
  )
}
export default App;
