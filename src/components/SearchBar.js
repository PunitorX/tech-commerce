import React from 'react'
import './SearchBar.css'

const searchSTYLES = ['search-primary', 'search-secondary'];
const searchSIZE = ['search-medium', 'search-large','search-mobile'];
const searchCOLOR = ['search-primary']

export const SearchBar = ({children, type, onClick, inputStyle, inputSize, inputColor}) => {
    const checkInputStyle = searchSTYLES.includes(inputStyle) ? inputStyle : searchSTYLES[0];

    const checkInputSize = searchSIZE.includes(inputSize) ? inputSize : searchSIZE[0];

    const checkinputColor = searchCOLOR.includes(inputColor) ? inputColor : searchCOLOR[0];

    return (
      <searchBar className={`search ${checkInputStyle} ${checkInputSize} ${checkinputColor}`} onClick={onClick} type={type}>{children}</searchBar>
    );
}



// function SearchBar() {
//   return (
//     <> 
//     <div className="search-main">
//         <div className="search-container">
//             <div className="search-search">
//                 <input type="text" className='search-input' placeholder='Search'/>
//                 <label htmlFor="" className='search-label'></label>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

export default SearchBar