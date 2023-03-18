import { createContext, Component } from 'react'
import { Route } from 'react-router-dom';
import styled from "styled-components"



export default function Top() {

    return (
    <>
        <TopPage>
          <a>TrackIt</a>
          <img src="https://assets1.ignimgs.com/2017/03/28/persona5-1280-3-1490728399817_160w.jpg?width=1280" alt="logoprofile"/>
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

  