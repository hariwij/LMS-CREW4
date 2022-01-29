import {Container, Form} from "react-bootstrap";
import React from "react";
import '../styles/components/_BookForm.scss'
import { Trash2,Plus,Edit,XCircle} from 'react-feather';

const BookForm : React.FC = () => {
    return(
        <Form className='dataFormContainer'>
            <div className='formHeading'>
                <h2 >Create Book</h2>
                <XCircle/>
            </div>
            <label>Title of the book
                <input type='text' name='title'/>
            </label>
            <label>ISBN
                <input type='text' name='isbn'/>
            </label>
            <label>Author
                <input type='text' name='author'/>
            </label>
            <button className='btn-primary'> Submit </button>

        </Form>

    )
}

export default BookForm 