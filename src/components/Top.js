import { createContext, Component, useContext } from 'react'
import { Route } from 'react-router-dom';
import styled from "styled-components"
import Context from "../contexts/Context"



export default function Top() {

  const { userData, setUserData} = useContext(Context)
  const image = localStorage.getItem(`image`);


    return (
    <>
        <TopPage>
          <a>TrackIt</a>
          <img src={image} alt="logoprofile"/>
        </TopPage>

    </>
    );
  }
  

const TopPage = styled.div`

display: flex;
width: 375px;
height: 70px;
position:fixed;
top: 0;
background-color: #126ba5;
align-items: center;
justify-content: space-between;

a{

  width: 97px;
  height: 49px;
  left: 18px;
  top: 10px;
  color: #ffffff;
  font-family: 'Playball';
  font-style: normal;
  font-weight: 400;
  font-size: 38.982px;
  line-height: 49px;
  margin-left: 18px;

}

img{

  width: 51px;
  height: 51px;
  left: 306px;
  top: 9px;
  margin-right: 18px;
  border-radius: 98.5px;

}

`

  