import React from 'react';
import styled from "styled-components";

const Btn = styled.button`
    width:${({width})=>width ? width : ''};
    height:${({height})=> height ? height : ''};
    padding:${({padding})=>padding ? padding : ''};
    border-radius:${({radius})=>radius ? radius : '8px'};
    cursor:pointer;
    color:${({color})=>color ? color : "#fff"};
    background:${({background })=>background ? background : ""};
    border:${({border})=>border ? border : 'none'};
    outline:${({outline})=> outline ? outline : 'none'};
    transition: background .5s ease-in;
    box-shadow:${({shadow})=> shadow ? shadow : ""};
    top:${({top})=>top ? top : ''};
    margin: ${({margin})=> margin ? margin : ''};
  :hover {
    transform: scale(1.05);
    border: 2px solid ${({color})=>color ? color : "#fff"};
    transition: 0.6s ease-out;
  }
`;

function Button({
    children,
    background,
    fontWeight,
    fontSize,
    color,
    padding,
    height,
    width,
    radius,
    border,
    outline,
    top,
    shadow,
    margin,
    type,
    onClick}) {
  return (
    <Btn  background={background} fontSize={fontSize} margin={margin
    }fontWeight={fontWeight} color={color} padding={padding} height={height} width={width} 
    radius={radius} border={border} outline={outline} top={top} shadow={shadow} type={type} onClick={onClick}
     >{children}</Btn>
  )
}

export default Button

