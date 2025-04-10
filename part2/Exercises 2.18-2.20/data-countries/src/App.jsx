import { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import CountryInfo from "./components/CountryInfo";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    console.log("Fetching all countries data...");
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCountries(filtered);
      setSelectedCountry(null);
    } else {
      setFilteredCountries([]);
      setSelectedCountry(null);
    }
  }, [searchQuery, countries]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
  };

  const renderCountryResults = () => {
    if (selectedCountry) {
      return <CountryInfo country={selectedCountry} />;
    }

    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length > 1) {
      return (
        <CountryList
          countries={filteredCountries}
          handleShowCountry={handleShowCountry}
        />
      );
    } else if (filteredCountries.length === 1) {
      return <CountryInfo country={filteredCountries[0]} />;
    }
    return null;
  };

  return (
    <div>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      {renderCountryResults()}
    </div>
  );
};

export default App;
