import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Sections/Navbar'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
