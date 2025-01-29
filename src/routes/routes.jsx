import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PagesCalculatorMats from '../pages/PagesCalculatorMats';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PagesCalculatorMats" element={<PagesCalculatorMats />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
