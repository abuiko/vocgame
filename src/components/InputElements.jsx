
import styled from 'styled-components'
import image from '../assets/bg.jpg'

export const Wrapper = styled.div`
    background-image:  linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
export const Container = styled.div`
    
    width: 650px;
    margin: auto;
    min-height: 100vh;   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   
`
export const Form = styled.div`
    background: rgba(0,0,0,0.7);
    border: none;
    border-radius: 10px;
    padding: 50px 35px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Text = styled.input`
    margin-right: 10px;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    background: rgba(255,255,255,0.8);
    border-radius: 3px;
`

export const Button = styled.button`
    width: 120px;
    padding: 10px;
    border: 1px solid #8E3FFF;
    color: white;
    font-size: 16px;
    background: #8E3FFF;
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
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;  
   
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px 40px;
    box-sizing: border-box; 
    background: rgba(0,0,0,0.7);
    border-radius: 5px;
    border: none;
    color: #fff;
    
   
`
export const Left = styled.div``
export const Right = styled.div``

export const Icons = styled.div`
    font-size: 22px;
`

export const Submit = styled.button`
    width: 150px;
    padding: 10px;
    border: 1px solid #8E3FFF;
    color: #fff;
    font-size: 16px;

    background: #8E3FFF;
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: transparent;
        color: #fff;
        border: 1px solid #fff;
    }
`