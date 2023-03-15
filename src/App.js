import { createContext, Component } from 'react'
import Login from "./routes/Login"
import Cadastro from "./routes/Cadastro"
import Habitos from "./routes/Habitos"
import styled from "styled-components"
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'


export default function App() {
  
  
  return (
    <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/habitos" element={<Habitos/>} />
    </Routes>

    </BrowserRouter>
  )
}

