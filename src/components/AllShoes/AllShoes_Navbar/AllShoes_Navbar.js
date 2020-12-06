import React, { useState } from 'react';
import {NavLink } from 'react-router-dom';

import './AllShoes_Navbar.css';

const AllShoes_Navbar = ({ title, pathGym, pathJordan, pathWalking, pathFootball, pathAthletics, pathBasketball }) => {

  const [shoesBar, ] = useState(false);


  return (
    <>
      <div className="allShoesNavbar">
        <span className="allShoesNavbar__section">{title} Shoes</span>
        <div className="allShoesNavbar__category">
          <NavLink activeClassName="allShoesNavbar__active" to={pathGym} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar__items">Gym</span>
          </NavLink>
          <NavLink activeClassName="allShoesNavbar__active" to={pathAthletics} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar__items">Tennis</span>
          </NavLink>
          <NavLink activeClassName="allShoesNavbar__active" to={pathJordan} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar__items">Jordan</span>
          </NavLink>
          <NavLink activeClassName="allShoesNavbar__active" to={pathWalking} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar__items">Running</span>
          </NavLink>
          <NavLink activeClassName="allShoesNavbar__active" to={pathFootball} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar__items">Football</span>
          </NavLink>
          <NavLink activeClassName="allShoesNavbar__active" to={pathBasketball} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar__items">Basketball</span>
          </NavLink>
        </div>
      </div>

      <div className={shoesBar ? 'allShoesNavbar2 active' : 'allShoesNavbar2'}>
      <span className="allShoesNavbar2__section">{title} Shoes</span>
        <div className="allShoesNavbar2__category">
          <NavLink activeClassName="allShoesNavbar2__active" to={pathGym} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar2__items">Gym</span>
          </NavLink>
          <NavLink activeClassName="allShoesNavbar2__active" to={pathAthletics} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar2__items">Tennis</span>
          </NavLink>
          <NavLink activeClassName="allShoesNavbar2__active" to={pathJordan} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar2__items">Jordan</span>
          </NavLink>
          <NavLink activeClassName="allShoesNavbar2__active" to={pathWalking} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar2__items">Running</span>
          </NavLink>
          <NavLink activeClassName="allShoesNavbar2__active" to={pathFootball} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar2__items">Football</span>
          </NavLink>
          <NavLink activeClassName="allShoesNavbar2__active" to={pathBasketball} style={{textDecoration: 'none'}} >
            <span className="allShoesNavbar2__items">Basketball</span>
          </NavLink>
        </div>
      </div>S
    </>
  );
}

export default AllShoes_Navbar;