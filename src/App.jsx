import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import ListYourTour from './pages/ListYourTour';

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/landing-page" element={<LandingPage/>}/>
      <Route path="/list-your-trip" element={<ListYourTour/>}/>
    </Routes>
  </BrowserRouter>
}

