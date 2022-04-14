import React, { useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { ImCross } from 'react-icons/im'


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
    position: relative;
    box-sizing: border-box;
    animation: ${fadeInAnimation} 1s linear;
    -webkit-box-shadow: -1px 1px 39px -5px rgba(142,63,255,0.81); 
    box-shadow: -1px 1px 39px -5px rgba(142,63,255,0.81);
    background: rgba(0,0,0,0.8);
    width: 50%;
    height: 60%;
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
    margin-bottom: 40px;
    text-align: center;
    line-height: 29px;
    font-size: 19px;
    
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

const Rules = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Overlay>
            <Wrapper>
                <Title>RULES</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Desc>
                <IconWrap onClick={() => handleToggle()}>
                    <Icon />
                </IconWrap>

            </Wrapper>
        </Overlay>
    )
}

export default Rules
