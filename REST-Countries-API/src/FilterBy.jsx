import { useState } from "react"


export default function FilterBy(props){
    const [toggleFilterBy, setToggleFilterBy] = useState(false)

    function handleChagne(e){
        e.preventDefault()
    }

    function handleFilterByClick(e){
        setToggleFilterBy(prev => !prev)
        document.addEventListener('click', event=> {
            if(!event.target.closest('.filter')) return setToggleFilterBy(false)
        })
    }

    const styles ={
        display: toggleFilterBy ? 'block' : 'none'
    }
    
    return(
        <div className="filterBy flex">
              <form className="form" action="#" onSubmit={handleChagne}>
                  <input onChange={props.handleValue} type="text" name="country" id="country" value={props.formData.country} placeholder="Search for a country..." />
              </form>

              <div className="filterBy__region">
                      <button className="filter flex" onClick={handleFilterByClick}>
                          <span>Filter By Region</span>
                          <svg width="20" height="20"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="var(--dark-blue)">
                              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>
                          </svg>
                      </button>

                  <ul role="list" className="countries_region" style={styles} onClick={props.handleClick}>
                      <li><button data-name="africa">Africa</button></li>
                      <li><button data-name="america">America</button></li>
                      <li><button data-name="asia">Asia</button></li>
                      <li><button data-name="europe">Europe</button></li>
                      <li><button data-name="oceania">Oceania</button></li>
                  </ul>
              </div>
          </div>
    )
}