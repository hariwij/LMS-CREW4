import {Container, Form} from "react-bootstrap";
import '../styles/components/_BookForm.scss'
import { Trash2,Plus,Edit,XCircle} from 'react-feather';
import Select from "react-select/base";
import React, { Component } from 'react';

const AuthorForm: React.FC = () => {
    return(
    <Form className='dataFormContainer'>
        <div className='formHeading'>
            <h2 >Create Author</h2>
            <XCircle style={{width:'2rem',height:'2rem'}}/>
        </div>
        <label>Name of author
            <input type='text' name='title'/>
        </label>
        <button className='btn-primary'> Create </button>

    </Form>
    )
}

export default AuthorForm 