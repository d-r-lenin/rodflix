import React from 'react';
import { FiInbox, FiSearch } from "react-icons/fi";


import './Bar.scss';

const Bar = () => {
  return (
    <div className="top-bar">
        <div className="top-bar__container">
            <div className="top-bar__logo-holder" >
                  <FiInbox className='top-bar__logo' />
            </div>
            <div className='top-bar__search-bar-holder'>
                  <input className='top-bar__search-bar' type="text" placeholder="Search" />
                <FiSearch className='top-bar__search-icon' />
            </div>
        </div>
    </div>
  )
}

export default Bar