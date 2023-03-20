import { createContext, Component } from 'react'
import { Route } from 'react-router-dom';
import styled from "styled-components"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from "../routes/styles.css"


export default function Footer() {

  const percentage = "20"

    return (
        <Container>

        <a> Hábitos</a>
    <Progress>
    <CircularProgressbar value={percentage} background={true} text='Hoje' backgroundPadding={6}
            styles={buildStyles({
                textSize: '18px', 
                backgroundColor: '#52B6FF',
                textColor:"#FFFFFF",
                trailColor:"#52B6FF",
                pathColor:"#FFFFFF",
                pathTransitionDuration: 1,

            })} />
    </Progress>
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
const Progress = styled.div `

width: 90px;
height: 91px;
margin-bottom: 40px;
`