import axios from 'axios';
import { createContext, Component, useState, useEffect } from 'react'
import { Route, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import Logo from '../assets/logo.svg'
import {ThreeDots} from 'react-loader-spinner'

export default function Cadastro() {

  


  const [form, setForm] = useState ({email: "", name: "",image: "",password: ""})
  const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
  const navigate = useNavigate()
  const [disabledButtom, setDisabledButtom] = useState(false)
  const [loading, setLoading] = useState(false)
  const [disabledInput, setDisabledInput] = useState(false)

  useEffect(() => {if(form.password !== "" && form.email !== "" && form.name !== "" && form.image !== "") {setDisabledButtom(false)} else {setDisabledButtom(true)}}, [form.email, form.password, form.name, form.image])
 
  function handleChange(e){

    console.log(e.target.name)
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)

    if(form.email !== "" && form.name !== "" && form.password !== "" && form.image !== ""){setDisabledButtom(false)}
    else {setDisabledButtom(true)}

  }

  function signup(e) {
    setDisabledInput(true)
    setLoading(true)
    setDisabledButtom(true)


    const body = form;

    const request =  axios.post(url, body)
    e.preventDefault(); 

    request.then(r => {navigate("/"); setLoading(false); })
    
    request.catch((err) => {
 
      setLoading(false)
      setDisabledInput(false)
      alert(err.response.data.message)
      console.log(err.response.data.message)
      setDisabledButtom(false)

    });    
    
  }
 
    return (
      <Container>
        <img src={Logo} />

        <form onSubmit={signup}> 

        
        <input 
        disabled={disabledInput}
        placeholder='Email'
        type="email"
        value={form.email}
        name={"email"}
        onChange={handleChange}
        required
        data-test="email-input"
         
        />
        
        <input
        
        disabled={disabledInput}
        placeholder='Senha'
        type="password"
        value={form.password}
        name={"password"}
        onChange={handleChange}
        data-test="passwords-input"
        required

        />  
  
        <input 
        disabled={disabledInput}
        placeholder='Nome' 
        type="text" 
        name={"name"}
        value={form.name}
        onChange={handleChange}
        data-test="user-name-input"
        required

        />
  
        <input 
        disabled={disabledInput}
        placeholder='Foto' 
        type="url"
        value={form.profilePic}
        name={"image"}
        onChange={handleChange}
        data-test="user-image-input"
        required
        
        />

        <Enter loading={loading} disabledButtom={disabledButtom} disabled={disabledButtom} type="submit">

        {!loading ? <a> CADASTRAR </a> : <ThreeDots align-items="center"
      height="80" 
      width="80" 
      radius="9"
      margin-bottom="20px"
      color="#ffffff" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}/>}
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

const Enter = styled.button `
background: ${props => props.disabledButtom ? "gray" : "#52B6FF"};
border-radius: 4.63636px;
width: 303px;
height: 45px;
display:flex;
justify-content: center;
align-items: center;

:disabled {

background-color: ${props => props.loading ? "#52B6FF" : "#ffffff"};

}

a{

width: 64px;
height: 26px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: ${props => props.disabledButtom ? "A9A9A9" : "#ffffff"};;
margin-right: 60px;

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