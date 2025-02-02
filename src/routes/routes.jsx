import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageCalculatorMatsRef from '../pages/PageCalculatorMatsRef';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageCalculatorMatsRef" element={<PageCalculatorMatsRef/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
