import { useState } from "react";
import "./Country.css";
const Country = (props) => {
  const { country, handleVisitedCountries, handleVisitedFlags } = props;
  const { flags, name, region, cca2 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`countryStyle ${visited && "visited"}`}>
      <h4>{name?.common}</h4>
      <img src={flags.png} alt={flags.alt} />
      <p>Region: {region}</p>
      <p>Code: {cca2}</p>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>
      <button onClick={() => handleVisitedFlags(flags.png)}>
        Visited Flags
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visi ted" : "Going"}</button>
      {visited ? "I have visited this country!!" : "I will visit!!"}
    </div>
  );
};

export default Country;
