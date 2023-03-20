import axios from 'axios';
import {createContext, Component, useState, useEffect, useContext } from 'react'
import { Route, Link, useActionData, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import Logo from '../assets/logo.svg'
import {ThreeDots} from "react-loader-spinner"
import Context from '../contexts/Context'


export default function Cadastro() {

  const {userData, setUserData} = useContext(Context)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState ("")
  const navigate = useNavigate()
  const [disabledButtom, setDisabledButtom] = useState(true)
  const [loading, setLoading] = useState(false)
  const [disabledInput, setDisabledInput] = useState(false)
  localStorage.removeItem(`token`);
  localStorage.removeItem(`image`);


  useEffect(() => {if(password !== "" && email !== "") {setDisabledButtom(false)} else {setDisabledButtom(true)} }, [password,email])


   

  function login(e){

    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const data = {email: email, password: password}

    setLoading(true)
    setDisabledInput(true)
    setDisabledButtom(true)
    
   

    const promise = axios.post(url, data)

    promise.then((res) => {
       
      const newUserData={
        image:res.data.image,
        token:res.data.token
    };
      setUserData(newUserData);
      navigate("/habitos"); 
      setLoading(false);
      localStorage.setItem(`token`,JSON.stringify(userData.token));
      localStorage.setItem(`image`,JSON.stringify(userData.image));
      
    })

      promise.catch((err) => {
      
    alert(err.response); 
    setLoading(false); 
    setDisabledInput(false);
    setDisabledButtom(false)
  
  })

    e.preventDefault();
   }


    return (

    <Container>

    <img src={Logo}/>


    <form onSubmit={login}>

    <input disabled={disabledInput}  data-test="email-input" placeholder='Email' type="email"  value={email} onChange={e => setEmail(e.target.value)} />

    <input disabled={disabledInput} data-test="password-input" placeholder='Senha' type="password" value={password} onChange={e => setPassword(e.target.value)} />

    <Enter loading={loading} disabledButtom={disabledButtom} disabled={disabledButtom} data-test="login-btn" type="submit"> 
    {!loading ? <a> ENTRAR </a>
    : <ThreeDots 
      align-items="center"
      height="80" 
      width="80" 
      radius="9"
      margin-bottom="20px"
      color="#ffffff" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
      />}

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
display:flex;
justify-content: center;
align-items: center;

:disabled {
  background: ${props => props.loading ? "#52B6FF" : "#ffffff;"}
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
color: ${props => !props.disabledButtom ? "#ffffff" : "#A9A9A9"};
margin-right: 26px;

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