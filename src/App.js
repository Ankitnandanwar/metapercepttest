import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Cards/>
    </div>
  );
}

export default App;
