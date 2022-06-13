import React, { useState } from 'react'
import styled from 'styled-components';
import Button from './Button';

import { Link, animateScroll as scroll} from 'react-scroll';


const NavDiv = styled.div`
   background: ${({navbar}) => navbar ? "darkslateblue" : "transparent"};
   position: fixed; 
   top: 0;
   height: 60px;
   padding: 0px 70px;
   color: #fff;
   display: flex;
   width: 100vw;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 960px) {
     justify-content: space-between;
     max-width: 100vw;
     padding: 0 30px;
   }

   .nav__logo {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   .box {
     width: 30px;
     height: 30px;
     border-radius: 7px;
     margin-right: -10px;
     background: linear-gradient(to bottom left, #FDB07A , #FD62A4);
   }
   

   .nav__items {
     list-style: none;
     display: flex;
     flex: 1;
     justify-content: center;
     align-items: center;

     @media screen and (max-width: 960px) {
       display: none;
     }
   }

     .nav__item {
       margin: 0 15px;
       cursor: pointer;
       transition: all ease-in;
       
     }
     .nav__item:hover {
       padding: 8px 0;
      border-bottom: 3px solid #FD62A4;
      border-bottom: 3px solid #FD62A4;font-weight: 700;
      background-image: linear-gradient(to right, #FDB07A , #FD62A4);
      -webkit-background-clip: text;
      background-size: 100%;
      color: transparent;
     }
     .active {
      padding: 8px 0;
      border-bottom: 3px solid #FD62A4;font-weight: 700;
      background-image: linear-gradient(to right, #FDB07A , #FD62A4);
      -webkit-background-clip: text;
      background-size: 100%;
      color: transparent;
     }
    
   
`;

function Nav() {

  const [navbar, setNavbar] = useState(false);

  const changeBack = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBack);

  return (
    <NavDiv navbar={navbar}>
        <div className="nav__logo" onClick={() => scroll.scrollToTop()}>
          <div className="box"></div>
          <i>Elle</i>
        </div>
        <ul className="nav__items">
          <li className="nav__item"><Link to="hero" activeClass="active" smooth spy duration={500} >Home</Link></li>
          <li className="nav__item"><Link to="about" activeClass="active" smooth spy duration={500} >About Me</Link></li>
          <li className="nav__item"><Link to="portfolio" activeClass="active" smooth spy duration={500} >Portfolio</Link></li>
          
        </ul>
        <Link to="contact" smooth duration={1000}>
        <Button 
        width={"100px"} 
        height={"35px"}
        padding={"8px"}
        background={"#fff"}
        color={"#02013D"}
        margin={"0 150px 0 0"}
        >Contact Me</Button>
        </Link>
    </NavDiv>
  )
}

export default Nav