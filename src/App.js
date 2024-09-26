import './App.css';
import AboutPara from './components/AboutPara/AboutPara';
import AboutSlider from './components/AboutSlider/AboutSlider';
import AboutWrite from './components/AboutWrite/AboutWrite';
import InfluencerAndPlatforms from './components/InfluencerAndPlatforms/InfluencerAndPlatforms';
import Verticals from './components/Verticals/Verticals';

function App() {
  return (
    <div className="App">
      <InfluencerAndPlatforms/>
      <Verticals/>
      <AboutPara/>
      <AboutSlider/>
      <AboutWrite/>
    </div>
  );
}

export default App;
