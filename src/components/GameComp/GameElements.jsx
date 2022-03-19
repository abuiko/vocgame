import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`
    height: 100vh;
    display: flex;
    position: relative;
    width: 100%;
    
`
export const Left = styled.div`
    background: #000;
    width: 300px;
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
