import styled from 'styled-components'
import image from '../../assets/bg.jpg'
import { Link } from 'react-router-dom'
import { device } from '../responsive'

// parent container
export const Wrapper = styled.div`
    background-image:  linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    min-height: 100vh;
    box-sizing: border-box;
    width: 100%;
    display: flex;
`

// left column 
export const Container = styled.div`
    padding: 50px 0px 20px;
    width: 30%;
    background: rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
`

export const Logo = styled.div`
    margin-bottom: 2rem;
    text-align: center;
`
export const Img = styled.img`
    width: 250px;
`
export const Rules = styled.p`
    color: #D4C4F5;
    font-family: 'Kodchasan', sans-serif;
    font-size: 13px;
    cursor: pointer;
    text-decoration: underline;
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 10px;
    padding: 50px 35px;
    box-sizing: border-box;
    width: 450px; 
`
export const Text = styled.input`
    margin-bottom: 1rem;
    padding: 15px;
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    background: rgba(255,255,255,0.8);
    border-radius: 3px;
`
export const Button = styled.button`
    padding: 15px;
    color: #D4C4F5;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #D4C4F5;
    background: transparent;
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: transparent;
        color: #fff;
        border: 1px solid #fff;
    }
`


// right column
export const Vocabulary = styled.div`
    width: 70%;
`

export const Result = styled.div`
    width: 100%;
    display: flex;
    margin: 20px auto;
    padding: 0px 20px;
    flex-wrap: wrap;
    box-sizing: border-box;

    @media screen and ${device.laptop} {
        padding: 0px 10px;
    }
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 5px 10px 5px;
    padding: 15px 40px;
    box-sizing: border-box; 
    background: rgba(0,0,0,0.5);
    border-radius: 5px;
    border: none;
    color: #fff;

    @media screen and ${device.laptop} {
        width: 100%;
        padding: 15px 35px;
    }

`
export const Left = styled.div`
    font-size: 20px;
`
export const Right = styled.div`
    font-size: 20px;
`

export const Icons = styled.div`
    font-size: 22px;
`

export const Submit = styled(Link)`
    text-decoration: none;
    width: 150px;
    padding: 10px;
    display: block;
    text-align: center;
    margin: 30px auto 0px;
    color: #fff;
    font-size: 16px;
     background: transparent;
    color: #fff;
    border: 1px solid #fff;  
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    &:hover {
        font-weight: bolder;
        width: 160px;
    }
`