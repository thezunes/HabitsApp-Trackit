import { createContext, Component } from 'react'
import Login from "./routes/Login"
import Cadastro from "./routes/Cadastro"
import Habitos from "./routes/Habitos"
import Hoje from "./routes/Hoje"
import Historico from "./routes/Historico"
import Top from "./components/Top.js"
import Footer from "./components/Footer.js"
import styled from "styled-components"
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'


export default function App() {
  
  const path=window.location.pathname;
  
  return (
    <BrowserRouter>

    {path !== "/" && "/cadastro" ? <Top/> : null}
    
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/habitos" element={<Habitos/>} />
      <Route exact path="/hoje" element={<Hoje/>} />
      <Route path="/historico" element={<Historico/>} />
    </Routes>

    {path !== "/" && "/cadastro" ? <Footer/> : null}

    </BrowserRouter>
  )
}

