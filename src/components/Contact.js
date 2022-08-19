import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from "emailjs-com";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";


const Contact = () => {
    const [fullName, setFullname] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const onchangeHandler = (e) => {
        switch (e.target.name) {
            case "fullName":
                setFullname(e.target.value);
                break;
            
            case "email":
                setEmail(e.target.value);
                break;

            case "subject":
                setSubject(e.target.value);
                break;
            
            case "message":
                setMessage(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_ozez6d9","template_drt9kr8", e.target, "RE6k-LQYV0gExCULF").then(res => (
            console.log(res)
        )).catch(err => console.log(err));
        setFullname('');
        setEmail("");
        setSubject("");
        setMessage("");
        console.log("hhjhbh");
        
    }
  return (
    <Container id="contact">
        <White>
        <Left>
            <h1>Let's talk</h1>
            <p>Feel free to contact me via email or fill the form</p>
            <p><AiFillMail style={{color : "#fff", width:"20px", height:"20px", marginRight:"10px"}}/> mbaangel2803@gmail.com</p>
            <p><MdLocationPin style={{color : "#fff", width:"20px", height:"20px", marginRight:"10px"}}/> Enugu, Nigeria</p>
            <div>
                <a href='https://github.com/Michelle031'><AiFillGithub style={{color : "#fff", width:"20px", height:"20px", marginRight:"10px"}}/></a>
                <a href='https://www.linkedin.com/in/angel-mba-michelle/' ><AiFillLinkedin style={{color : "#fff", width:"20px", height:"20px", marginRight:"10px"}}/></a>
            </div>
        </Left>
        <Right>
            <form onSubmit={handleSubmit}>
                <InputDiv>
                    <input type="text" placeholder="Full Name*" name="fullName" value={fullName} onChange={onchangeHandler}/>
                    <input type="text" placeholder="Email address*" name="email" value={email} onChange={onchangeHandler} />
                    <input type="text" placeholder="Subject" name="subject" value={subject} onChange={onchangeHandler}/>
                </InputDiv>
                <TextDiv>
                    <textarea rows="4" cols="50" name="message" value={message} onChange={onchangeHandler}></textarea>
                </TextDiv>
                <Button type="submit">
                        Shoot
                </Button>
            </form>
            
        </Right>
        </White>
    </Container>
  )
}

export default Contact;

const Container = styled.div`
    width: calc(100% - 70px);
    height: 60vh;
    padding: 70px;
    background: #171459;
    color: #fff;
    @media screen and (max-width: 960px) {
        height: auto;
        padding: 30px;
    }
`;
const White = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 960px) {
        flex-direction:  column;
    }   
`;
const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    h1 {
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 8px;
        font-size: 13px;
        display: flex;
        align-items: center;
    }
    div {
        margin-top: 10px;
    }
    @media screen and (max-width: 960px) {
        width: 100%;
        margin-bottom: 50px;
    }
`;
const Right = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;
const Button = styled.button`
    width: 200px;
    padding: 10px 20px;
    border: none;
    outline: none;    
    background: linear-gradient(to right, #FDB07A, #FD62A4);
    border-radius: 15px;
    color: #fff;
    font-weight: 700;
`;
const InputDiv = styled.div`
    input {
        width: 70%;
        margin-bottom: 20px;
        border-radius: 15px;
        border: none;
        outline: none;
        background: #fff;
        padding: 10px 15px;
        color: #02013D
    }
    input:focus {
        border: 1px solid  #02013D;
    }
`;
const TextDiv = styled.div`
    textarea {
        width: 70%;
        margin-bottom: 20px;
        border-radius: 15px;
        border: none;
        background: rgba(172,168,168,0.3);
        background: #fff;
        padding: 10px 15px;
        color: #02013D
    }
    textarea:focus {
        outline: none;
    }
`;