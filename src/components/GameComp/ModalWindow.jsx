import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'


const fadeInAnimation = keyframes`
    0% {
      opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  `

const Overlay = styled.div`
    background: rgba(0,0,0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease-in-out; 
`
const Wrapper = styled.div`
    box-sizing: border-box;
    animation: ${fadeInAnimation} 1s linear;
    -webkit-box-shadow: -1px 1px 39px -5px rgba(142,63,255,0.81); 
    box-shadow: -1px 1px 39px -5px rgba(142,63,255,0.81);
    background: rgba(0,0,0,0.5);
    width: 50%;
    height: 350px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 55px;
    
`
const Title = styled.h2`
    color: #fff;
    font-size: 32px;
    margin-bottom: 30px;
    font-weight: normal;
`
const Desc = styled.p`
    color: #fff;
    margin-bottom: 30px;
    text-align: center;
    line-height: 24px;
    font-size: 18px;
    
`
const StartBtn = styled.button`
    background: rgb(142,63,255);
   
    border: 1px solid #8E3FFF;
    color: #fff;
    padding: 10px 30px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px; 
`


const ModalWindow = (props) => {

    return (
        <Overlay>
            <Wrapper>
                <Title>{props.title}</Title>
                <Desc>{props.desc}</Desc>
                <StartBtn onClick={() => props.getStart()}>Get Started</StartBtn>
            </Wrapper>
        </Overlay>
    )
}

export default ModalWindow
