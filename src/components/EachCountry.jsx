import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EachCountry = ({ country }) => {
  const capital = country.capital ? country.capital[0] : country.name.common;
  const topLevelDomain = country.tld ? country.tld[0] : "No Domain";
  const currencyText = country.currencies
    ? Object.values(country.currencies)[0].name
    : "No Currency For This Country";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "No Official Language";

  const borders = country.borders
    ? country.borders.map((border) => {
        return <p  className="bg-element px-4 py-1 rounded-1" key={border}>{border}</p>;
      })
    : "No Border For This Country";

    const navigate =useNavigate()
  return (
    <div className="bg-main-color custom-text-white text-start px-5 py-5 each-country">
      <div onClick={()=>{
        navigate (-1)
      }} className=" back-btn d-flex gap-3 bg-element align-items-center mb-5 py-2 px-4 rounded-2 shadow">
        <BsArrowLeft className="fs-3 custom-text-white" />
        <p className="m-0">Back</p>
      </div>
      {/* =============================== */}
      <div className="d-md-flex gap-5">
        <img
          className="w-100 mt-2"
          src={country.flags.png}
          alt={country.flags.alt}
        />
        <div>
          <h3 className="mt-5 mb-4">{country.name.common}</h3>
          <div className="d-flex flex-column flex-xl-row gap-4  ">
            <div className="w-100">
              <p>
                <b>Population:</b>
                {country.population.toLocaleString()}
              </p>
              <p>
                <b>Region:</b>
                {country.region}
              </p>
              <p>
                <b>Sub-region:</b>
                {country.subregion}
              </p>
              <p>
                <b>capital:</b>
                {capital}
              </p>
            </div>
            <div>
              <p>
                <b>Top Level Domain:</b>
                {topLevelDomain}
              </p>
              <p>
                <b>currencies:</b>
                {currencyText}
              </p>
              <p>
                <b>Language:</b>
                {languages}
              </p>
            </div>
          </div>
          {/* ==================================== */}
        <div>
          <b>Border Countries:</b>
          <div className="d-flex gap-3 mt-4">{borders}</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EachCountry;
