import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ListYourTour from './pages/ListYourTour.jsx';
import DisplayTours from './pages/DisplayTours.jsx';
import SupplierSignIn from './pages/SupplierSignIn.jsx';
import SupplierSignUp from './pages/SupplierSignUp.jsx';
import Header from './components/Header';
import SupplierHeader from './components/SupplierHeader.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {(location.pathname !== '/list-your-trip' && 
        location.pathname !== '/supplier-signin' &&
        location.pathname !== '/supplier-signup') && <Header />}
      {(location.pathname === '/list-your-trip' ||
        location.pathname === '/supplier-signin' ||
        location.pathname === '/supplier-signup') && <SupplierHeader />}
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/list-your-trip" element={<ListYourTour />} />
        <Route path="/display-tours" element={<DisplayTours />} />
        <Route path="/supplier-signin" element={<SupplierSignIn />} />
        <Route path="/supplier-signup" element={<SupplierSignUp />} />
      </Routes>
    </>
  );
}
