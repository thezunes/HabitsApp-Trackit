import axios from 'axios';
import { createContext, Component, useState } from 'react'
import { Route, Link, useActionData, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import Logo from '../assets/logo.svg'



export default function Cadastro() {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState ("")
  const navigate = useNavigate()

  function login(e){

    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const data = {email: email, password: password}

    const promise = axios.post(url, data)

    promise.then((s) => {console.log(s.data); navigate("/hoje")})
    promise.catch((err) => alert(err.response.data.message))

    e.preventDefault();
    console.log(data)
  }


    return (

    <Container>

    <img src={Logo}/>


    <form onSubmit={login}>

    <input data-test="email-input" placeholder='Email' type="email"  value={email} onChange={e => setEmail(e.target.value)} />

    <input data-test="password-input" placeholder='Senha' type="password" value={password} onChange={e => setPassword(e.target.value)} />

    <Enter data-test="login-btn" type="submit"> 
    <a> ENTRAR </a>
    </Enter>

    </form>


    

    <Link to="/cadastro">
    <Singin data-test="signup-link"> Não tem uma conta? Cadastre-se! </Singin>
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
  justify-content: center;
  margin-left: 36px;
  }
  
  `

const Enter = styled.button `
background: #52B6FF;
border-radius: 4.63636px;
width: 303px;
height: 45px;
margin-left: 36px;


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

const Singin = styled.div `

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












//AUTORIZAÇÃO 



// const config = { 

//   headers: { Authorization: `Bearer ${}`}
// }

//USAR NO USEFFECT