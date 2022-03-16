
import styled from 'styled-components'


export const Container = styled.div`
    min-height: 100vh;   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    margin: auto;
`
export const Form = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Text = styled.input`
    margin-right: 10px;
    padding: 10px 10px 10px 2px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 16px;
`

export const Button = styled.button`
    width: 100px;
    padding: 10px;
    border: 1px solid #000;
    color: white;
    
    background: #000;
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #fff;
        color: #000;
    }
`

export const Result = styled.div`
    width: 100%;
    margin-top: 50px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 15px 0px;
   
`
export const Left = styled.div``
export const Right = styled.div``

export const Icons = styled.div`
    font-size: 22px;
`

export const Submit = styled.button`
    width: 100px;
    padding: 10px;
    border: 1px solid green;
    color: white;

    background: green;
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #fff;
        color: green;
    }
`