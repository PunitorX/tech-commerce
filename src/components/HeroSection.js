import React, {useState} from 'react'
import './HeroSection.css'
import SearchBar from './SearchBar';

function HeroSection({
  header,
  headDesc
}) {

  const [click, setClick] = useState(false);
  const [searchBar, setSearchBar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const closeMobile = () => setClick(false);

  // return (
  //   <>
  //       <div className='home-section'>
  //         <div>
  //           <div className='home-container'>
  //             <div className="home-heading">
  //               {header}
  //             </div>
  //             <div className="home-desc">
  //               {headDesc}
  //             </div>
  //             <div className="home-search">
  //              <SearchBar placeholder='Enter an Item...'/>
  //             </div>
  //           </div>
  //         </div>            
  //       </div> 

  //       <div className="half-section">

  //         <div className="half-card">
  //           <div className="half-display">

  //           </div>
  //           <div className="half-display">
              
  //           </div>
  //           <div className="half-display">
              
  //           </div>
  //         </div>

  //       </div>      
  //   </>
  // )
}

export default HeroSection
