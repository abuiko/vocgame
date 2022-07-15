import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { ImCross } from 'react-icons/im'
import Rule1 from '../../assets/rule1.png'
import Rule2 from '../../assets/rule2.png'


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
const Header = styled.h2`
    font-size: 2.5rem;
    color: #fff;
`
const Desc = styled.p`
   text-align: center;
   color: #fff; 
   padding: 2rem 0rem; 
`
const Rule = styled.img`
    width: 100%;
    object-fit: cover;
    
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
                <Header>Rules</Header>
                <Desc>
                    Fill in word and its translation, then press ADD to
                    add them to the vocabulary When the vocabulary is created,
                    press START GAME to proceed
                </Desc>
                <Rule src={Rule1} alt="rule desc" />
                <Desc>
                    Your goal is to destroy all falling asteroids before they hit the ground by typing the translation to the words, one at a time.
                    Type, then hit ENTER.  If it’s NOT correct,  asteroid will keep falling,
               </Desc>
                <Rule src={Rule2} alt="rule desc" />
                <IconWrap onClick={() => props.handleRules()}>
                    <Icon />
                </IconWrap>
            </Wrapper>
        </Overlay>
    )
}

export default Rules
