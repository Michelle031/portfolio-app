import React, { useState } from "react";
import styled from "styled-components";
import { IoIosGlobe } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";

const Image = ({ title, desc, img, live, code, tools }) => {
  const [hover, setHover] = useState(false);
  const handleOn = () => setHover(true);
  const handleOut = () => setHover(false);
  return (
    <Container hover={hover} onMouseOver={handleOn} onMouseOut={handleOut} img={img} >
        
        {hover && 
               (<Disappear>
            <div className="links">
            <a href={live} target="_blank"><IoIosGlobe style={{color : "#fff", width:"30px", height:"30px", marginRight:"10px"}}/></a>
            <a href={code} target="_blank"><AiFillGithub style={{color : "#fff", width:"30px", height:"30px", marginRight:"10px"}}/></a>
        </div>
            <Details>
            <h2>{title}</h2>
            <p className="desc">{desc}</p>
            <div className="tools">
              {tools?.map((tool) => (
                <p>{tool}</p>
              ))}
            </div>
          </Details>
        </Disappear>
      )}
    </Container>
  );
};

export default Image;

const Container = styled.section`
  background: ${(props) =>
    props.hover
      ? `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${props.img})`
      : `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 40%;
  height: 300px;
  border-radius: 9px;
  break-inside: avoid;
  padding: 1.4rem 2rem;
  margin: 0 0 1.4rem 0;
  transition: all ease-in 0.4s;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 1rem 1.5rem;
  }
`;

const Disappear = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  padding: 10px 0;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: end;

  h2,
  p {
    padding: 0;
    margin: 0;
    margin-bottom: 12px;
    color: #fff;
  }
  p {
    font-size: 0.9rem;
    color: #fff;
  }

  .tools {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    p {
      padding: 5px 10px;
      border-radius: 13px;
      background-color: #171459;
      margin-right: 8px;
      margin-bottom: 8px;
      font-size: 9px;
    }
  }
`;
