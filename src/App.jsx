import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import ListYourTour from './pages/ListYourTour';
import DisplayTours from './pages/DisplayTours';
import SignIn from './pages/SignIn'
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/landing-page" element={<LandingPage/>}/>
      <Route path="/list-your-trip" element={<ListYourTour/>}/>
      <Route path="/display-tours" element={<DisplayTours/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
    </Routes>
  </BrowserRouter>
}

