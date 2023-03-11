import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { FixedBack } from "./components/FixedBack";
import { Theme } from './components/Theme'
import { About } from './components/About'
import { Connect } from './components/Connect'
import { Footer } from './components/Footer'
import { Copyright } from './components/Copyright'
import { Test } from './components/Test'
import { Team } from './components/Team';
import { MainTheme } from './components/MainTheme';
import { Conference } from './components/Conference';
import { Carousel } from './components/Carousel';
import { Speakers } from './components/Speakers';
import ParticleBackground from './components/ParticleBackground';
import { Navbaar } from './components/Navbaar';
import NewsletterSubscribe from './components/NewsletterSubscribe';
// import {createBrowserHistory} from 'history';

// export const customHistory = createBrowserHistory(); 
function App() {
  return (
    <div className="App">

      <Navbaar />

      <Switch>
        <Route exact path='/'>
          <ParticleBackground />
          <Banner />
          <FixedBack />
          <Theme />
          <About />
          {/* <Test/> */}
          <Connect />
          
          <Footer />
          {/* <Copyright />  */}
        </Route>
        <Route path='/conferences'>
          <MainTheme />
          <Conference />

        </Route>
        <Route path='/team'>
          <Team />
        </Route>
        <Route path='/gallery'>
          <Carousel />
          <Speakers />
        </Route>



      </Switch>




      {/* <Skills />
      <Projects /> */}

    </div>
  );
}

export default App;
