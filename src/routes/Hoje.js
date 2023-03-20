import { createContext, Component, useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import styled from "styled-components"
import Top from "../components/Top"
import Footer from "../components/Footer"
import dayjs from "dayjs";



export default function Hoje() {
  
  const[date,setDate]=useState(dayjs().locale('pt-br').format('dddd, DD/MM'));
  require('dayjs/locale/pt-br');
  dayjs().locale('pt-br');

  useEffect(()=>{
    let text=date[0].toUpperCase();
    for(let i=1;i<date.length;i++){
        text+=date[i];
    }
    setDate(text);
    
},[date]);

return (
  
  <div>
      <Top/>

  <Container>
    <TopPage>
      <h3>{date}</h3>
      <a> Nenhum hábito concluído ainda</a>
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
  padding-top: 60px;
   
  `

const TopPage = styled.div `

display:flex;
justify-content: space-between;
flex-direction: column;

h3{

width: 100%;
height: 29px;
left: 17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;

}

a{

width: 100%;
height: 22px;
left: 17px;
font-family: 'Lexend Deca';
font-style: normal;
/* font-weight: 400; */
font-size: 17.976px;
line-height: 22px;
color: #BABABA;
margin-bottom: 700px;
}


`