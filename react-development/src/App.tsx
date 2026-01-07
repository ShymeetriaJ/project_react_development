import { HashRouter, Routes, Route } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import { Home } from './pages/Home';
import { CountryDetail } from './pages/CountryDetail';

function App() {
  return (
      <HashRouter>
        <CountryProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<CountryDetail />} />
          </Routes>
        </CountryProvider>
      </HashRouter>
  );
}

export default App;
