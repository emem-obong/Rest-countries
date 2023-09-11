import React from 'react'
import Search from '../components/Search'
import Countries from '../components/Countries'
import Loading from '../utils/Loading'


const Homepage = ({allCountries,isLoading , filterbyRegion, filterBySearch, darkMode}) => {
  return (
    <div>
      <Search filterByRegion={filterbyRegion} filterBySearch={filterBySearch}/>
      {isLoading && <Loading/>}
      {!isLoading && <Countries allCountries={allCountries}/>}
      
    </div>
  )
}

export default Homepage