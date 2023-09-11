import React, { useState } from "react";

import {BiSearchAlt2} from 'react-icons/bi'

import Dropdown from "./Dropdown";

const Search = ({filterByRegion, filterBySearch}) => {
  const [userInput, setUserInput]=useState('')
  return (
    <div className="px-5 py-3 bg-main-color custom-text-white d-md-flex align-items-md-center justify-content-md-between">
      <form action="" className="position-relative">
        <BiSearchAlt2 className="fs-1 position-absolute search-icon ms-5"/>
        <input
        onChange={(event)=>{
          setUserInput(event.target.value)
          filterBySearch(event.target.value.trim().toLowerCase())

        }}
          className="w-100 bg-element border-0  py-3 rounded-2 custom-text-white"
          type="text"
          placeholder="Search for a country..."
        />
      </form>

      <Dropdown filterByRegion={filterByRegion}/>
    </div>
  );
};

export default Search;
