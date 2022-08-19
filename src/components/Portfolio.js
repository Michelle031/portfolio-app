import React from 'react';
import styled from "styled-components";
import  {projects}  from '../projects';
import Image from './Image';

const PDiv = styled.div`
  max-width: 100vw;
  height: auto;
  background-color: #02013D;
  padding: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    padding: 30px;
  }


  h1 {
      color: white;
      font-size: 2.5rem;
  }
  p{
      color: #ddd;
  }
  .gradient {
    font-weight: 700;
    background-image: linear-gradient(to right, #FDB07A , #FD62A4);
    background-clip: text;
    background-size: 100%;
    color: transparent;
  }
  .images {
      display: flex;
      flex-wrap: wrap;
      column-gap: 1.5rem;
      max-width: 100%;
      padding: 20px;

      @media screen and (max-width: 960px) {
        padding: 10px;
      }
  }
`;

function Portfolio() {
  return (
    <PDiv id="portfolio">
        <h1>My Creative <span className='gradient'>Portfolio</span></h1>
        <p>These are some of the projects I have worked on</p>
        <div className="images">
            {projects.map((project) => (
                <Image key={project.name} title={project.name} desc={project.desc} img={project.image} live={project.live_url} code={project.code_url} tools={project.tools}/>
            )
            )}
        </div>
    </PDiv> 
  )
}

export default Portfolio;