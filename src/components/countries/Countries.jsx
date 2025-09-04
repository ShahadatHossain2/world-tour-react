import { useEffect, useState } from "react";
import Country from "./Country";
import "./Country.css";
import Visited from "./Visited";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/all?fields=name,cca2,capital,region,flags`
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    const allVisited = [...visitedCountries, country];
    setVisitedCountries(allVisited);
  };

  const handleVisitedFlags = (flags) => {
    const newFlags = [...visitedFlags, flags];
    setVisitedFlags(newFlags);
  };

  return (
    <div>
      <h3>Visited Countries : {visitedCountries.length}</h3>
      <div className="country-container">
        {visitedCountries.map((country) => (
          <Visited key={country.cca2} country={country}></Visited>
        ))}
      </div>
      <h3>Visited Flags</h3>
      <div className="country-container flags-container">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      <h3>All Countries: {countries.length}</h3>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            key={country.cca2}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
