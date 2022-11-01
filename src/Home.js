import { useState, useEffect } from "react";
import UseFetch from "./useFetch";
import Countries from "./Countries";
import { HiSearch } from "react-icons/hi";

const Home = () => {
  const [search, setSearch] = useState("");
  const { data, isPending, error } = UseFetch(
    "https://restcountries.com/v3.1/all"
  );
  const [currentCountries, setCurrentCountries] = useState(null);
  const [firstValue, setfirstValue] = useState(null);
  const [countinents, setCountinents] = useState("");

  useEffect(() => {
    if (countinents && countinents !== "All") {
      fetch(`https://restcountries.com/v3.1/region/${countinents}`)
        .then((res) => {
          if (!res.ok) {
            throw Error("unable to fetch");
          }
          return res.json();
        })
        .then((data) => {
          setCurrentCountries(data);
          setfirstValue(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [countinents]);

  useEffect(() => {
    if (!countinents || countinents === "All") {
      setCurrentCountries(data);
      setfirstValue(data);
    }
  }, [data, countinents]);

  useEffect(() => {
    var values = [];
    if (search === "") {
      setCurrentCountries(firstValue);
    } else {
      firstValue?.map((value) => {
        if (
          value.name.common
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        ) {
          values.push(value);
        }
      });
      setCurrentCountries(values);
    }
  }, [search]);

  const countinentArray = [
    { value: "All", display: "Filter by Region" },
    { value: "Africa", display: "Africa" },
    { value: "America", display: "America" },
    { value: "Asia", display: "Asia" },
    { value: "Europe", display: "Europe" },
    { value: "Oceania", display: "Oceania" },
  ];

  return (
    <div className="countrybox">
      <div className="upperline">
        <div className="forInput">
          <HiSearch />
          {currentCountries && (
            <input
              className="input"
              placeholder="Search for a country..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
        </div>
        <div className="forSelect">
          <select
            value={countinents}
            onChange={(e) => setCountinents(e.target.value)}
          >
            {countinentArray.map((each) => (
              <option value={each.value}> {each.display} </option>
            ))}
          </select>
        </div>
      </div>
      {isPending ? (
      //   <div  className='loader__container'>
      // <div className="loader"></div>
      //   </div>
      <p>Loading...</p>
      ) : (
        <Countries countryName={currentCountries}></Countries>
      )}
    </div>
  );
};

export default Home;
