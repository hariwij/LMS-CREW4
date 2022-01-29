import {Container, Form} from "react-bootstrap";
// import React from "react";
import '../styles/components/_BookForm.scss'
import { Trash2,Plus,Edit,XCircle} from 'react-feather';
import Select from "react-select/base";
import React, { Component } from 'react';

const BookForm : React.FC = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];
    return(
        <Form className='dataFormContainer'>
            <div className='formHeading'>
                <h2 >Create Book</h2>
                <XCircle style={{width:'2rem',height:'2rem'}}/>
            </div>
            <label>Title of the book
                <input type='text' name='title'/>
            </label>
            <label>ISBN
                <input type='text' name='isbn'/>
            </label>
            <label>Author
                {/*<Select options={options} />*/}
                <input type='text' name='author'/>
            </label>
            <button className='btn-primary'> Create </button>

        </Form>

    )
}

export default BookForm 