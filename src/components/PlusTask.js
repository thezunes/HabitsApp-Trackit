import React, { useContext, useState } from "react";
import styled from "styled-components";
import AddTask from "../components/AddTask"

export default function PlusTask(props) {

const [OpenNew, setOpenNew] = useState(false);


function Add (){   props.addTaskContainer ? props.setAddTaskContainer(false) : props.setAddTaskContainer(true) }

  

return(

<Plus data-test="habit-create-btn" onClick={Add}> + </Plus>

)
}



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
  
  