import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ListYourTour from './pages/ListYourTour.jsx';
import DisplayTours from './pages/DisplayTours.jsx';
import SupplierSignIn from './pages/SupplierSignIn.jsx';
import SupplierSignUp from './pages/SupplierSignUp.jsx';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/landing-page" element={<LandingPage/>}/>
      <Route path="/list-your-trip" element={<ListYourTour/>}/>
      <Route path="/display-tours" element={<DisplayTours/>}/>
      <Route path="/supplier-signin" element={<SupplierSignIn/>}/>
      <Route path="/supplier-signup" element={<SupplierSignUp/>}/>
    </Routes>
  </BrowserRouter>
}

