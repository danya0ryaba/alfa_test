import React from 'react'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'

export const Error: React.FC = () => {

    const back = useNavigate();

    return <>
        <Button onClick={() => back(-1)}>back</Button>
        <h1>Error</h1>
        <span>Такого адреса не существует</span>
    </>
}
