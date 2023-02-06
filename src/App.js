import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { FixedBack } from "./components/FixedBack";
import {Theme} from './components/Theme'
import {About} from './components/About'
import {Connect} from './components/Connect'
import {Footer} from './components/Footer'
import {Copyright} from './components/Copyright'
import {Test} from './components/Test'
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="App">
      <ParticleBackground/>
      <NavBar/>
      
      <Banner />
      <FixedBack/>
      <Theme/>
      <About/>
      {/* <Test/> */}
      <Connect/>
      <Footer/>
      <Copyright />
    
      
      
      {/* <Skills />
      <Projects /> */}
    
    </div>
  );
}

export default App;
