import { createContext, Component, useContext, useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import styled from "styled-components"
import Top from "../components/Top"
import Footer from "../components/Footer"
import Context from '../contexts/Context'
import axios from 'axios';
import PlusTask from '../components/PlusTask'
import AddTask from '../components/AddTask'

export default function Habitos() {

  const {userData, setUserData} = useContext(Context);
  const {habits, setHabits} = useContext(Context);
  const {newHabit, setNewHabit} = useState([]);
  const [addTaskContainer, setAddTaskContainer] = useState(false);
  const daysWeek = ["D", "S","T", "Q", "Q", "S", "S"]
  const [dayHabit, setDayHabit] = useState();
  

  

  
  useEffect(() =>{

    const token = localStorage.getItem(`teste`);
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  
    const promise = axios.get(url, config);
    promise.then(res => {

    setHabits(res.data); console.log(res.data);
    setDayHabit(res.data.days);
    console.log(dayHabit)})
    promise.catch(err => console.log(err.response))

  } ,[])

   return (
    
    <div>
        <Top/>
  
    <Container>
      <TopPage>
        <a> Meus hábitos </a>
        <PlusTask addTaskContainer={addTaskContainer} setAddTaskContainer={setAddTaskContainer}/>
      </TopPage>

      {addTaskContainer ? <AddTask setAddTaskContainer={setAddTaskContainer}/> : null}

      {habits.length === 0 ? 
  <NoTask addTaskContainer={addTaskContainer}> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoTask> :
  (
    <>
    {habits.map((h) => (
      <Tasks data-test="habit-container" key={h.id}>
        <Task>
          <a>{h.name}</a>
          <Icon><ion-icon name="trash-outline"></ion-icon></Icon>

        </Task>
        <Week data-test="habit-day">
          {daysWeek.map((d) => <Days key={d}>{d}</Days>
          )}
        </Week>
      </Tasks>
    ))}
  </>

  )
}
      
  
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
    flex-direction: column;
    align-items: center;
     
    `
    
  
   
const Tasks = styled.div `

background-color: #ffffff;
width: 340px;
height: 91px;
border-radius: 5px;
padding-left: 20px;
margin-top: 20px;

`

const Task = styled.div  `

display:flex;
justify-content: space-between;

a{ 

  width: 208px;
  height: 25px;
  left: 32px;
  top: 160px;

  font-family: 'Lexend Deca'; 
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;


}


`


const Week = styled.div `

display:flex;


`

const Days = styled.div `

margin-top: 8px;
width: 30px;
height: 30px;
left: 36px;
top: 218px;
box-sizing: border-box;
background: ${props => props.state === "selected" ? "black" : "#FFFFFF"};
border: 1px solid #D5D5D5;
border-radius: 5px;
display:flex;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
align-items: center;
justify-content: center;
margin-right: 4px;
color: #DBDBDB;
`



const NoTask = styled.a `

position: absolute;
width: 338px;
height: 74px;
margin-top: ${props => props.addTaskContainer ? "250px" : "70px"};
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;

`

const Icon = styled.div`

margin-right: 10px;
margin-top: 10px;

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