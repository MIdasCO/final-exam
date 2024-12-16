import React from 'react';
import Accordion from '../Accordion';
import './index.css';

function CryptoList({ cryptos }) {
  return (
    <div className="crypto-list">
      {cryptos.map((crypto) => (
        <Accordion key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
}

export default CryptoList;
