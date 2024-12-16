import React, { useState } from 'react';
import './index.css';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search">
      <input type="text" value={query} onChange={handleChange} placeholder="Dima bayke pishite..." />
    </div>
  );
}

export default Search;
