import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Sections/Navbar'
import Footer from './Components/Footer';
import NotFound from './Components/Pages/404'
import Car from './Components/Pages/Car'
import Event from './Components/Pages/Event'
import Homestays from './Components/Pages/Homestays'
import Tour from './Components/Pages/Tour'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route exact path="/car" element={<Car />} ></Route>
        <Route exact path="/event" element={<Event />} ></Route>
        <Route exact path="/homestays" element={<Homestays />} ></Route>
        <Route exact path="/tour" element={<Tour />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
