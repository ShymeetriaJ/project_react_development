import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import { Home } from './pages/Home';
import { CountryDetail } from './pages/CountryDetail';

function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
}

export default App;
