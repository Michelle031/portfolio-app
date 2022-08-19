import React from 'react';
import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si"
import Bullet from './Bullet';
import Button from './Button';
import { Link } from 'react-router-dom';


const Aboutdiv = styled.div`
    max-width: 100vw;
    height: auto;
    background: #171459;
    padding: 70px;
    @media screen and (max-width: 960px) {
        padding: 30px;
    }

    header {
        display: flex;
        align-items: center;
    }
    .image {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        box-shadow: inset 10px 10px 10px rgba(0,0,0,0.1),
                    15px 25px 10px rgba(0,0,0,0.15),
                    15px 20px 10px rgba(0,0,0,0.1),
                    inset -10px -10px 15px rgba(255,255,255,0.9)
        ;
        margin-bottom: 10px;
        
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .about__icons {
        display: flex;
        align-items: center;
        padding: 10px 0;

        * {
            width: 30px;
            height: 30px;
            color: #ddd;
            margin-right: 15px;
        }
    }

    p{
        color: #ddd;
        max-width: 50%;
        font-size: 1rem;
        line-height: 1.5;
    }
    h1 {
        color: #fff;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 960px) {
        p {
            max-width: 100%;
            line-height: 2;
        }
    }
`;

function About() {
    return (
        <Aboutdiv id='about'>
            <header>
                <Bullet width={"70px"} />
                <p>About</p>
            </header>
            <h1>Get a closer look at who I am</h1>
            <div className="image">
                <img src="./images/IMG_9596.jpeg" alt="me" />
            </div>
            <div className="skills">
                <header>
                    <Bullet />
                    <p>Skills & Tools</p>
                </header>
                <div className="about__icons">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaSass />
                    <FaReact />
                    <SiNextdotjs />
                    <SiTailwindcss />
                    <SiTypescript />
                </div>
                <div className="about__tools">
                    <p>Dev Tools: Git, Github, Gitlab, Visual Studio Code, Terminal </p>
                </div>
            </div>
            <div className="desc">
                <header>
                    <Bullet />
                    <p>Who am I</p>
                </header>
                <p>I am Angel Mba, a self-taught front-end web developer currently studying Electronic Engineering at University of Nigeria, Nsukka. <br />
                    I learnt the basics of web development in 2020 during the pandemic. Since then, I have enjoyed bringing beautiful design to life and continued to improve and broaden my skillset.
                    <br />
                    I believe that with hardwork, creativity, dedication and discipline I can bring out the best in any project I work on.
                </p>
            </div>
            <a href="/Mba-Angel.pdf" download>
                <Button background={"linear-gradient(to right, #FDB07A , #FD62A4)"} border={"2px solid #fff"}>
                    Download CV
                </Button>
            </a>
        </Aboutdiv>
    )
}

export default About