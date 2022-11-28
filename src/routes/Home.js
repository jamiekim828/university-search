import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);
  const [countryList, setCountryList] = useState([]);

  const getCountryList = async () => {
    const response = await fetch(`http://universities.hipolabs.com/search`);
    const json = await response.json();
    const filteredData = json.filter(
      (tag, index, array) =>
        array.findIndex((t) => t.country === tag.country) === index
    );
    const countryData = filteredData.map((o) => o.country);
    setCountryList(countryData);
    setLoading(false);
  };

  useEffect(() => {
    getCountryList();
  }, []);
  console.log(countryList);

  const handleOnChange = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  return (
    <div className='App'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='home'>
          <h1 className='country-name'>Countries List</h1>
          <div className='input-div'>
            <input
              className='search-input'
              type='text'
              onChange={handleOnChange}
              placeholder='Please type country name here...'
            />
            <Link to={`${country}`}>
              <button className='search-btn'>Search</button>
            </Link>
          </div>
          <div className='country-div'>
            {countryList.map((country, i) => (
              <div key={i} className='country'>
                <Link to={`/${country}`}>{country}</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
