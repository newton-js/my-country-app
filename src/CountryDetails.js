import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import UseFetch from "./useFetch";
import { BiArrowBack } from "react-icons/bi";

const CountryDetails = () => {
  const { cca3 } = useParams();
  const {
    data: thisCountry,
    isPending,
    error,
  } = UseFetch("https://restcountries.com/v3.1/alpha/" + cca3);
  const history = useNavigate();
  const country = thisCountry && thisCountry[0];
  const handleBackClick = () => {
    history(-1);
  };

  const handleBorder = (border) => {
    history("/country/" + border);
    console.log(border, 'to the border countries')
  };

  console.log(thisCountry, "hgjhlihikhoj");
  return (
    <div className="countryDetails">
      <div className="backarrow" onClick={handleBackClick}>
        <BiArrowBack className='arrowIcon' />
       <div>Back</div>
      </div>
      <div className="detailsBox">
        <div className="forImage">
          <img src={country?.flags.png}></img>
        </div>
        <div className="details">
          <div className="detailsName">
            <h2>{country?.name.common}</h2>
          </div>
          <div className="detailsInfo">
            <div className="detailsLeft">
              {country && <p>Native Name: {country.name.official}</p>}
              <p>Population: {country?.population}</p>
              <p>Region: {country?.continents}</p>
              <p>Sub Region: {country?.subregion}</p>
              <p>Capital: {country?.capital}</p>
            </div>
            <div className="detailsRight">
              <p>Top Level Domain: {country?.tld} </p>
              <p>
                Currencies:{" "}
                {country && Object.values(country?.currencies)[0].name}
              </p>
              <p>Language(s): {country && Object.values(country?.languages).join(',')}</p>
            </div>
          </div>
          <div className="border">
            <p>Border Countries: </p>
            {country && country.borders ? (
              country.borders.map((border) => (
                <div className="borderCountry" key={border.cca3}>
                  <button onClick={() => handleBorder(border)}>{border}</button>
                </div>
              ))
            ) : (
              <p>None</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
