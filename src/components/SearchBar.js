import React from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder}) {
  return (
    <> 
    <div className="search-main">
        <div className="searchBar">
            <input type="text" className='searchBar-one' placeholder={placeholder}/>
            <div className="searchIcon"><SearchIcon /></div>
        </div>       
    </div>
    </>
  )
}

export default SearchBar