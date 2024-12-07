import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Form } from '../components/Form';

export const CreateProduct: React.FC = () => {

    const back = useNavigate();

    return <>
        <Button clickFunction={() => back(-1)}>back</Button>
        <Form />
    </>
}