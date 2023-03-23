import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UIProvider from '../contexts/ui/UIProvider';
import HomePage from '../pages/home/HomePage';

const router = () => {
  return (
    <BrowserRouter>
      <UIProvider>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
        </Routes>
      </UIProvider>
    </BrowserRouter>
  )
}

export default router