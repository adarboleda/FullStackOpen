import React from "react";

const CountryList = ({ countries, handleShowCountry }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.cca3}>
          {country.name.common}
          <button onClick={() => handleShowCountry(country)}>show</button>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
