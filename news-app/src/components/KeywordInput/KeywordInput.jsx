import React, { useState } from 'react';

function KeywordInput({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    onSearch(keyword);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); 
    }
  };

  return (
    <div className='keyword-input'>
        <div className="search-icon">
            <i className="fa fa-search"></i>
        </div>
        <input
            className='text'
            type="text"
            placeholder="Enter a keyword"
            value={keyword}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
        />
        <button className='search-button' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default KeywordInput;
