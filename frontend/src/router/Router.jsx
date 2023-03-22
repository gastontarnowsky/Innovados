import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UIProvider from '../contexts/UIProvider';
import HomePage from '../pages/HomePage';


const router = () => {
  return (
    <UIProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UIProvider>
  )
}

export default router