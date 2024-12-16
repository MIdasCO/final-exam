import React, { useState } from 'react';
import './index.css';

function Accordion({ crypto }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);
  const priceChangeColor = crypto.percent_change_24h > 0 ? 'green' : 'red';

  return (
    <div className="accordion">
      <div onClick={toggleAccordion} className="accordion-title">
        {crypto.name} ({crypto.symbol})
        <span className="accordion-icon">
          {isOpen ? ' - ' : ' + '}
        </span>
      </div>
      {isOpen && (
        <div className="accordion-details">
          <div><strong>Symbol:</strong> {crypto.symbol}</div>
          <div><strong>Price USD:</strong> ${crypto.price_usd}</div>
          <div><strong>Price BTC:</strong> {crypto.price_btc}</div>
          <div className="tooltip-container">
            <strong>Market Cap USD:</strong> ${crypto.market_cap_usd}
            <div className="tooltip-text"> The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price.</div>
          </div>
          <div><strong>Percentage Change 24H:</strong> <span style={{ color: priceChangeColor }}>{crypto.percent_change_24h}%</span></div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
