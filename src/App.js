import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Sections/Home';
import Navbar from './Components/Sections/Navbar'
import NotFound from './Pages/404'
import Car from './Pages/Car'
import Event from './Pages/Event'
import Homestays from './Pages/Homestays'
import Tour from './Pages/Tour'
import Hotel from "./Pages/Hotel";
import PageLayout from "./Components/Sections/PageLayout";

function App() {
  return (
      <BrowserRouter>
        <Routes>
         <Route element={<PageLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/car" element={<Car />}/>
        <Route path="/event" element={<Event />} />
        <Route path="/homestays" element={<Homestays />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
