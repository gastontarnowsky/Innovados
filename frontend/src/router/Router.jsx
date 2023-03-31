import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UIProvider from '../contexts/ui/UIProvider';
import HomePage from '../pages/home/HomePage';
import EstimatePage from '../pages/estimate/EstimatePage';
import ServicesPage from '../pages/services/ServicesPage';

const router = () => {
  return (
    <BrowserRouter>
      <UIProvider>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/services'} element={<ServicesPage />} />
          <Route path={'/estimate'} element={<EstimatePage />} />
        </Routes>
      </UIProvider>
    </BrowserRouter>
  )
}

export default router