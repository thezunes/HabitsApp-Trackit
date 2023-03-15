import { createContext, Component } from 'react'
import { Route } from 'react-router-dom';
import styled from "styled-components"
import Logo from '../assets/logo.svg'

export default function Cadastro() {
    return (

    <Container>

    <img src={Logo}/>
    <Email placaholder="Email" />

    <Password placaholder="Senha"/>

    <Enter> 
    <a> ENTRAR </a>
    </Enter>

    <Singin> Não tem uma conta? Cadastre-se! </Singin>
   
    </Container>


    );
  }
  



const Container = styled.div `
  
  background-color: #ffffff;
  max-width: 375px;
  height: 632px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {

    margin-top: 68px;
    margin-bottom:32px;

  }
  
  `

const Email = styled.input `

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
box-sizing: border-box;
width: 303px;
height: 45px;
margin-bottom: 6px;

  `

const Password = styled.input `

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
box-sizing: border-box;
width: 303px;
height: 45px;
margin-bottom: 6px;

  
`

const Enter = styled.button `
background: #52B6FF;
border-radius: 4.63636px;
width: 303px;
height: 45px;

a{

width: 64px;
height: 26px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;

}

`

const Singin = styled.a `

width: 232px;
height: 17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
margin-top: 26px;

`