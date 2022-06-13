import React from 'react';
import styled from "styled-components";

const Blt = styled.div`
  height: 3px;
  background: linear-gradient(to bottom left, #FDB07A , #FD62A4);
  width: ${({width}) => width ? width : "30px"};
  margin-right: 10px;
`;

function Bullet({width}) {
  return (
    <Blt width={width}></Blt>
  )
}

export default Bullet