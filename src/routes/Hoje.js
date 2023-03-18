import { createContext, Component } from 'react'
import { Route } from 'react-router-dom';
import styled from "styled-components"
import Top from "../components/Top"
import Footer from "../components/Footer"

export default function Hoje() {

return (
  
  <div>
      <Top/>

  <Container>
    <TopPage>
      <a> Meus hábitos </a>
      <Plus> + </Plus>
    </TopPage>


  </Container>

  <Footer/>

  </div>
);
}

const Container = styled.div `
  
  background-color: #F2F2F2;
  max-width: 375px;
  height: 632px;
  display: flex;
  padding-top: 110px;
   
  `
  
const Plus = styled.button `
display:flex;
justify-content: center;
align-items: center;
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
margin-right: 18px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26.976px;
text-align: center;
color: #ffffff;
margin-left: 140px;
`

const TopPage = styled.div `

display:flex;
justify-content: space-between;

a{

width: 148px;
height: 29px;
left: 17px;
top: 98px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
margin-left: 18px;
}

`