import React, { useState, useEffect } from 'react';
import './components/Accordion';
import Typography from './components/Typography';
import Search from './components/Search';
import CryptoList from './components/Crypto-list';

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [isLoading] = useState(false);

  useEffect(() => { fetchCryptoData(); }, []);

  const fetchCryptoData = async () => {
      const response = await fetch('https://api.coinlore.net/api/tickers/');
      const data = await response.json();
      setCryptos(data.data);
      setFilteredCryptos(data.data);
  };

  const handleSearch = (query) => {
    const filtered = cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(query.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCryptos(filtered);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h1">Crypto Tracker</Typography>
      <Search onSearch={handleSearch} />
      <button onClick={fetchCryptoData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Update Data'}
      </button>
      <CryptoList cryptos={filteredCryptos} />
    </div>
  );
}

export default App;
