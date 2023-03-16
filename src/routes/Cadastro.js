import axios from 'axios';
import { createContext, Component, useState, useEffect } from 'react'
import { Route, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import Logo from '../assets/logo.svg'




export default function Cadastro() {


  const [form, setForm] = useState ({email: "", name: "",image: "",password: ""})
  const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
  const navigate = useNavigate()

  function handleChange(e){

    console.log(e.target.name)
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)

  }

  function signup(e) {

    const request =  axios.post(url, form)
    e.preventDefault();

    request.then(r => navigate("/"))
    
    request.catch((err) => {
 
      console.log(err.response.data.message)
    });    
    
  }
 
    return (
      <Container>
        <img src={Logo} />

        <form onSubmit={signup}> 

        
        <input 

        placeholder='Email'
        type="email"
        value={form.email}
        name={"email"}
        onChange={handleChange}
        required
        data-test="email-input"
         
        />
        
        <input
        
        
        placeholder='Senha'
        type="password"
        value={form.password}
        name={"password"}
        onChange={handleChange}
        data-test="passwords-input"
        required

        />  
  
        <input 
        placeholder='Nome' 
        type="text" 
        name={"name"}
        value={form.name}
        onChange={handleChange}
        data-test="user-name-input"
        required

        />
  
        <input 
        placeholder='Foto' 
        type="url"
        value={form.profilePic}
        name={"image"}
        onChange={handleChange}
        data-test="user-image-input"
        required
        
        />

        <Enter type="submit">
        <a> CADASTRAR </a>
        </Enter>

        </form>


        
        <Link to="/">
        <Login data-test="login-link"> Já tem uma conta? Faça login! </Login>
        </Link>
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

  input {

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

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

const Login = styled.div `

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