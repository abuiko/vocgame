import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { ImCross } from 'react-icons/im'
import RulesImg from '../../assets/rules.png'


const fadeInAnimation = keyframes`
    0% {
      opacity: 0;
    }
    50% {
        opacity: 0.7;
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
    position: relative;
    box-sizing: border-box;
    animation: ${fadeInAnimation} 1s linear;
    -webkit-box-shadow: -1px 1px 39px -5px rgba(142,63,255,0.81); 
    box-shadow: -1px 1px 39px -5px rgba(142,63,255,0.81);
    background: rgba(0,0,0,0.8);
    width: 700px;
    height: 80%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 55px;
    
`
const Desc = styled.img`
   width: 100%;
   height: 100%;
   object-fit: contain;
    
`
const IconWrap = styled.div`
    position: absolute;
    top: 5%;
    right: 5%;
    transform: translate(-5%, -5%);
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Icon = styled(ImCross)`
    color: #fff;
    position: absolute;
    top: 5%;
    right: 5%;
    transform: translate(-5%, -5%);
`

const Rules = (props) => {


    return (
        <Overlay>
            <Wrapper>

                <Desc src={RulesImg} alt="rules to the game" />
                <IconWrap onClick={() => props.handleRules()}>
                    <Icon />
                </IconWrap>

            </Wrapper>
        </Overlay>
    )
}

export default Rules
