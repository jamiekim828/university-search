import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './styles.css';

export default function Country() {
  const param = useParams();
  const country = param.country;

  const [universities, setUniversities] = useState([]);

  const getUniversitiesByCountry = async () => {
    const response = await fetch(
      `http://universities.hipolabs.com/search?country=${country}`
    );
    const json = await response.json();
    setUniversities(json);
  };

  useEffect(() => {
    getUniversitiesByCountry();
  }, []);

  //   const handleOnClick = () => {
  //     window.location.href = `/`;
  //   };

  return (
    <div>
      <h1 className='country-name'>{country}</h1>
      <Link to='/'>
        <button>Back to home</button>
      </Link>
      {universities.length === 0 ? (
        <p>Please wait...</p>
      ) : (
        universities.map((uni, index) => (
          <div key={index}>
            <h2>{uni.name}</h2>
            <a href={uni.web_pages}>Homepage</a>
          </div>
        ))
      )}
    </div>
  );
}
