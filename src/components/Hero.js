import React from 'react';
import styled from "styled-components";
import "./Hero.css";

const Section = styled.div`
    width: 100vw;
    height: 98vh;
    background: transparent;
    .hero {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .left {
      width: 50%;
      padding: 20px 70px;
      text-align: left;
      

      @media screen and (max-width: 960px) {
        display: flex;
      justify-content: center;
      flex-direction: column;
        width: 100%;
        height: 100%;
      }
      
      p, h3{
        color: #7573A4;
      }
      
      h1 {
        color: #fff;
        font-size: 3rem;
        margin: 12px 0;
      }
    }
    .right {
      width: 50%;
      padding: 20px 70px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 960px) {
        width: 100%;
        display: none;
      }

      img {
        object-fit: contain;
        width: 100%;
        height: 70%;
      }
    }
`;


function Hero() {
  return (
    <Section id='hero'>
        <div className="blob"></div>
        <div className="blob2"></div>
        <div className="hero">
          <div className="left">
            <p >WELCOME TO MY WORLD </p>
            <h1>Hello, I'm <span className='gradient'>Michelle</span></h1>
            <h3>a  <span className="gradient">front-end web developer.</span></h3>
            <p>I love to build beautiful, interactive and responsive things with code</p>
          </div>
          <div className="right">
            <img src="./images/web-development-application-design-illustration-pink-background_145666-1338-removebg-preview.png" alt="" />
          </div>
        </div>
    </Section>
  )
}

export default Hero