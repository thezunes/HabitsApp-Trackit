import { createContext, Component } from 'react'
import Login from "./routes/Login"
import Cadastro from "./routes/Cadastro"
import Habitos from "./routes/Habitos"
import Hoje from "./routes/Hoje"
import Historico from "./routes/Historico"
import Top from "./components/Top.js"
import Footer from "./components/Footer.js"
import Context from "./contexts/Context.js"

import styled from "styled-components"
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'


export default function App() {

  const [userData, setUserData] = useState({})
  const [habits, setHabits] = useState([])
  const [habitName, setHabitName] = useState([])

  
  
  return (
    <Context.Provider value={{userData, setUserData, habits, setHabits, habitName, setHabitName}}>

    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/hoje" element={<Hoje/>}/>
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/habitos" element={<Habitos/>} />
      <Route path="/historico" element={<Historico/>} />
    </Routes>


    </BrowserRouter>

    </Context.Provider>

  )
}

