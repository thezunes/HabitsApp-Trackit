import { createContext, Component } from 'react'
import { Route } from 'react-router-dom';
import styled from "styled-components"



export default function Footer() {

    return (
        <Container>

        <a> Hábitos</a>
        <a> Histórico</a>


      </Container>
    );
  }
  

const Container = styled.div `

width: 375px;
height: 70px;
background-color: #ffffff;
position: fixed;
bottom: 0;
display: flex;
justify-content: space-around;
align-items: center;

a{ 

width: 68px;
height: 22px;
left: 36px;
top: 619px;
color: #52B6FF;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;

}



`
  
 