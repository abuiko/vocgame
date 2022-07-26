
import styled from 'styled-components'
import image from '../../assets/bg.jpg'
import { Link } from 'react-router-dom'
import { device } from '../responsive'

export const Wrapper = styled.div`
    background-image:  linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    min-height: 100vh;
    padding-bottom: 50px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
`

export const Nav = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 60px;
`

export const Logo = styled.div``
export const Img = styled.img`
    width: 200px;
`
export const Rules = styled.p`
    color: #fff;
    font-family: 'Kodchasan', sans-serif;
    font-size: 19px;
    cursor: pointer;
`

export const Container = styled.div`
    padding-top: 90px;
    
    // margin: auto;
    padding-bottom: 20px; 
    
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
    padding: 10px;
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    background: rgba(255,255,255,0.8);
    border-radius: 3px;
`

export const Button = styled.button`
    
    padding: 10px;
    
    color: #F7FF9B;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #F7FF9B;
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

export const Result = styled.div`
    max-width: 1200px;
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
    width: 49%;
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