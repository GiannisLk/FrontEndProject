import React, {useState} from 'react';
import { Link, Route, useNavigate, useLocation } from 'react-router-dom';


function Header() {

  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
 
  const handleGoBack = () => {
    navigate(-1); // This will navigate back one step in the history
  };

  function toggleFilterMenu() {
    var filterMenu = document.getElementById('filtermenu');
    filterMenu.style.display = filterMenu.style.display === 'none' || filterMenu.style.display === '' ? 'inline-flex' : 'none';
    // alert('Should show now')
  }

  // Close the filter menu if clicked outside of it
  document.addEventListener('click', function(event) {
    var filterMenu = document.getElementById('filtermenu');
    var filterButton = document.getElementById('filter');
    
    if(filterMenu){
    var filterButtonRect = filterButton.getBoundingClientRect();
    filterMenu.style.top = filterButtonRect.bottom - 32 +'px';
    filterMenu.style.left = `calc(100% + 10px)`;}

    if (filterMenu.style.display != 'none' && event.target !== filterMenu && event.target !== filterButton) {
      filterMenu.style.display = 'none';

    }
  });

  const lastPart = path.substring(path.lastIndexOf('/') + 1);
  const currentPage = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);  
  
  return (
    <div id='body'>
    <div id='header'>
        <h2 id='navbar1'>{currentPage}</h2>
        <div id='navbar2'>
          <div id='searchContainer'>
        <input id='navbar2' type='text' placeholder={'Search...'}/><img src='https://www.pinclipart.com/picdir/big/15-157992_lens-clipart-magnifier-magnifying-glass-icon-grey-png.png'></img></div>
        <div id='filterContainer'>
        <button id='filter' onClick={toggleFilterMenu}><svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.704"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bars-filter</title> <path d="M30 7.249h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM24 15.25h-16c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h16c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM19 23.25h-6.053c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h6.053c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path> </g></svg></button></div>
        <div id='filtermenu'>
          <ul>
            <li>Sort A to Z</li>
            <li>Sort Z to A</li>
            <li>Sort Largest to Smallest</li>
            <li>Sort by Refactoring Urgency</li>
          </ul>
        </div>
        </div>
       
        <h2 id='navbar3'>UserName <img id='profile' src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais'/></h2>
        
    </div>
    <div id='navBar'>
        <ul>
            <Link style={{ textDecoration: 'none' }} to={'dashboard'}><li className='navBarItem' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
              </svg>
              <br/>Home</li></Link>
            <li className='navBarItem back' onClick={handleGoBack} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <br/>Back</li>
            <Link style={{ textDecoration: 'none' }} to={'/'}><li className='navBarItem' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
              <br/>Log out</li></Link>
        </ul>
        </div>
    </div>
  )
}

export default Header