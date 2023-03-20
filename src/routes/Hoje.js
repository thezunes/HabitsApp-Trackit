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


    <Habit>

      <HabitNameRecord>

        <HabitName> Ler 1 capítulo de livro </HabitName>
          <a>Sequência atual: 3 dias</a>
          <a>Seu recorde: 5 dias</a>
      </HabitNameRecord>
    
    <Verify/>

    </Habit>


  </Container>

  <Footer/>

  </div>
);
}



const Container = styled.div `
  
  background-color: #F2F2F2;
  width: 375px;
  height: 632px;
  display: flex;
  padding-top: 60px;
  flex-direction:column;
   
  `

const TopPage = styled.div `

display:flex;
justify-content: space-between;
flex-direction: column;
margin-top: 20px;
margin-left: 16px;

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
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #BABABA;
margin-bottom: 700px;
}


`

const Habit = styled.div `

width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;

`
const Verify = styled.div `

box-sizing: border-box;
position: absolute;
width: 69px;
height: 69px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;

`

const HabitNameRecord = styled.div `

display:flex;
flex-direction: column;

`

const HabitName = styled.a `

width: 208px;
height: 25px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;



`