import styled from 'styled-components'
import { Link } from 'react-router-dom'
import image from '../../assets/bg.jpg'
export const Container = styled.div`
    height: 100vh;
    display: flex;
    position: relative;
    width: 100%;
    overflow: hidden;
    
    
`
export const Left = styled.div`
    background: #000;
    flex: 1;
    padding: 30px 20px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Top = styled(Link)`
    text-decoration: none;

    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const Center = styled.div`
    
`
export const Score = styled.div`
    text-align: center;
    
`
export const Title = styled.h2`
    color: #fff;
    margin-top: 0px;
    
`
export const Count = styled.p`
    color: #fff;
    font-size: 38px;
    margin-top: 20px;
`
export const Icon = styled.div`
    color: #8E3FFF;
    margin-right: 15px;
`
export const Text = styled.p`
    font-size: 18px;
`
export const Bottom = styled.div`
    text-align: center;
`
export const Resume = styled.button`
    background: rgb(142,63,255);
    background: linear-gradient(48deg, rgba(142,63,255,1) 34%, rgba(0,219,255,1) 190%);
    border: 1px solid #8E3FFF;
    color: #fff;
    padding: 10px 30px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px; 

`
export const Right = styled.div`
    flex: 5;
    border: 2px solid #333;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image:  linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),url(${image});
`

export const Form = styled.div`
    position: absolute;
    bottom: 6%;
    left: 50%;
    transform: translate(-50%, -6%);
`
export const Input = styled.input`
    width: 500px;
    padding: 15px 10px 15px 30px;
    border: 2px solid #fff;
    border-radius: 5px;
    background: rgba(0,0,0,0.6);
    color: #fff;
    font-size: 18px;
`
export const Set = styled.ul`
        width: 100%;
        height: 100%;
        position: absolute;
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
`

export const Wrap = styled.div`
        position: absolute;
        width: 200px;
        height: 170px;
       
`
export const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

export const Word = styled.li`
        color: white;
        font-size: 20px; 
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);  
`
