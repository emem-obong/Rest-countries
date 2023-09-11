import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [allCountries, setAllcountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log(data);
      setAllcountries(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const filterByRegion = (region) => {
    const newCountries = allCountries.filter(
      (eachcountry) => eachcountry.region === region
    );
    console.log(newCountries);
    setFilteredCountries(newCountries);
  };

  const filterBySearch = (search) => {
    const newNation = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(search)
    );
    console.log(newNation);
    setFilteredCountries(newNation)
  };

  return (
    <>
      <Router>
        <Navbar darkMode={darkMode}  setDarkMode={setDarkMode}/>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                allCountries={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
                isLoading={isLoading}
                filterbyRegion={filterByRegion}
                filterBySearch ={filterBySearch}
                darkMode={darkMode}
              />
            }
          />
          <Route path="/:countryName" element={<CountryDetail />} darkMode={darkMode} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
