import axios from 'axios';
import { createContext, Component, useContext, useEffect, useState } from 'react'
import context from "react-context";
import styled from "styled-components";
import Context from '../contexts/Context'


export default function AddTask(props) {

const {habitName, setHabitName} = useContext(Context);
const days = ["D.0", "S.1", "T.2", "Q.3", "Q.4", "S.5", "S.6"];
const [daysSelected, setDaysSelected] = useState([]);
const numberDay = daysSelected.map((day) => parseInt(day.split(".")[1]));
const token = localStorage.getItem('token');
const {userData, setUserData} = useContext(Context);


 console.log(token)

function sendNewTask (event){
    
event.preventDefault();
const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`
    }}

const body = {
	name: habitName,
	days: numberDay  
}

const promise = axios.post(url, body, config)
promise.then(res => 
    
 {console.log("sucesso");
 cancel(); props.setRender(...props.render, 1);
}
    
    )
    promise.catch(err => console.log(err.response.data.message))

console.log("chegou")

}


function cancel (){ props.setAddTaskContainer(false)}


function addTaskName(n) {

    setHabitName(n.target.value);
    console.log(habitName)
}

function addDays(t) {
    const index = daysSelected.indexOf(t);
    if (index === -1) {
      setDaysSelected([...daysSelected, t]);
      console.log(numberDay)
    } else {
      const newDaysSelected = [...daysSelected];
      newDaysSelected.splice(index, 1);
      setDaysSelected(newDaysSelected);
    }
  }

return (

<Container data-test="habit-create-container">

    <form>

<input data-test="habit-name-input" required value={habitName} onChange={addTaskName} placeholder="nome do hábito" />
<Week>

{days.map(e => <Days data-test="habit-day"
state = {(daysSelected.includes(e) ? "selecionado" : "disponivel")}
onClick={() => addDays(e)}>{e.split('.')[0]}</Days>
 )}

</Week>

<Buttons>
    <Cancelar data-test="habit-create-cancel-btn" onClick={cancel}> Cancelar </Cancelar>
    <Salvar data-test="habit-create-save-btn" disabled={habitName.length === 0 ? true : false}onClick={sendNewTask}>Salvar</Salvar>
</Buttons>

</form>

</Container>

);
}

const Container = styled.div`

flex-direction: column;
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
margin-top: 20px;

input{

width: 303px;
height: 45px;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin: 18px 0 0 18px;
left: 47px;
top: 174px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: black;

::placeholder{

    color: #DBDBDB;

}
}

`

const Buttons = styled.div`

display:flex;
justify-content: end;
margin: 36px 16px 0 0;
align-items: center;

`

const Cancelar = styled.a ` 

width: 69px;
height: 20px;
left: 165px;
top: 284px;
margin-right: 24px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;

text-align: center;

color: #52B6FF;

`


const Salvar = styled.button `

width: 84px;
height: 35px;
left: 257px;
top: 277px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;

/* identical to box height */
text-align: center;
color: #FFFFFF;
background: #52B6FF;
border-radius: 4.63636px;


`


const Week = styled.div `

display:flex;
justify-content: center;

`

const Days = styled.div `

margin-top: 8px;
width: 30px;
height: 30px;
left: 36px;
top: 218px;
box-sizing: border-box;
background: ${props => props.state === "selecionado" ? "#CFCFCF" : "#ffffff"};
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
color: ${props => props.state === "selecionado" ? "#ffffff" : "#CFCFCF"};
`