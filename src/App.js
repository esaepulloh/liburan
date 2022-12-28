import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/LandingPage.css"
import Intro from "./components/Intro"
import ArungJeram from "./components/ArungJeram"
import Niagara from "./components/Niagara"
import KoraKora from "./components/KoraKora"
import Hysteria from "./components/Hysteria"

function App() {
  return (
  <div>
    {/* intro section */}
    <div className="myBG">  
      <NavigationBar />
      <Intro />
    </div>
    {/* end of intro */}

    <div className="niagara">
      <Niagara/>
    </div>

    <div className="korakora">
      <KoraKora/>
    </div>
    
    <div className="arungjeram">
      <ArungJeram/>
    </div>

    <div className="hysteria">
      <Hysteria/>
    </div>
  </div>
  );
}

export default App;
