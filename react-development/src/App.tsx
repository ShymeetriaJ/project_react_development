import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import { Home } from './pages/Home';
import { CountryDetail } from './pages/CountryDetail';

function App() {
  return (
      <BrowserRouter>
        <CountryProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<CountryDetail />} />
          </Routes>
        </CountryProvider>
      </BrowserRouter>
  );
}

export default App;
