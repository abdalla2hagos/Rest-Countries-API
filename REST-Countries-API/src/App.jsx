import React from 'react'
import MainPage from './MainPage'
import FilterBy from './FilterBy'
import MoreDeatils from './MoreDeatils'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import SharedLayout from './SharedLayout'
import { nanoid } from 'nanoid'

export default function App(){
  const [countries, setCountries] = useState([])
  const [formData, setFormData] = useState('')
  const [filter, setFilter] = useState('')
  const [filterAndSearch, setFilterAndSearch] = useState()
  
  useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => setCountries(res))
  },[])
  
  function handleValue(e){
    setFormData(e.target.value.trim().toLowerCase())
    setFilterAndSearch(true)
  }

  function handleClick(e){
    if(!e.target.dataset.name) return
    setFilter(e.target.dataset.name.toLowerCase())
    setFilterAndSearch(false)
  } 
  // reset search input and filterby results when clicking the back btn
  function resetInputAndFilter(){
    setFormData('')
    setFilter('')
  }
  
//   function AddId(){
//     console.log(countries)
//     setCountries(prev => prev.map(country => [...country, country.push(nanoid())]  )
//     )
// }

  // const main = countries.map(country => {
  //   return  <Main {...country}/>
  // })
  
  const filterByRegion = countries.filter(country => {
    const region = country.region.toLowerCase()
    return region.startsWith(filter)
  })
  .map(country => <MainPage key={nanoid()} {...country}/>)


  const filterBySearch = countries.filter(country => {
    if(formData === '') return true
    const name = country.name.common.toLowerCase()
    return name.startsWith(formData)
  })
  .map(country => <MainPage key={nanoid()} {...country}/>)

  return(
      <Routes>
        <Route path='/' element={<SharedLayout />}>
            <Route index element={ 
              <div className="container">    
                <FilterBy handleValue={handleValue} handleClick={handleClick} formData={formData}/>

                <div className="grid">
                  {filterAndSearch ? filterBySearch : filterByRegion}
                </div>
              </div>
            }/>
            <Route path='/:moreDeatilsId' element={<MoreDeatils countries={countries} resetInputAndFilter={()=> resetInputAndFilter()}/>}/>
          </Route>
        </Routes>
  )

}
