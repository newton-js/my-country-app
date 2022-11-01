import { Link } from "react-router-dom";
const Countries = ({ countryName }) => {
  return (
    <div className="countries">
      {countryName?.map((country) => (
        <div className="countrylist" key={country.cca3}>
          <Link to={`/country/${country.cca3}`}>
            <div className="flag-container">
              <img src={country.flags.png}></img>
            </div>
            <div className="countryInfo">
              <h3>{country.name.common}</h3>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Countries;
