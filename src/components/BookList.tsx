import { Container } from "react-bootstrap";
import React from "react";
import '../styles/components/_BookList.scss'
import { Trash2,Plus,Edit,XCircle} from 'react-feather';


const BookList = () => {
    return(
        <div className="book-section">
            <h1>Books</h1>
            <ol>
                <li>
                    <div className='list-box'>
                        <div className="txtContainer">
                            Book 1
                        </div>
                        <div className="btnContainer">
                            <Edit className="btnEdit" />
                            <Trash2 className="btnDelete"/>
                        </div>
                    </div>

                </li>
                <li>
                    <div className='list-box'>
                        <div className="txtContainer">
                            Book 1
                        </div>
                        <div className="btnContainer">
                            <Edit className="btnEdit" />
                            <Trash2 className="btnDelete"/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='list-box'>
                        <div className="txtContainer">
                            Book 1
                        </div>
                        <div className="btnContainer">
                            <Edit className="btnEdit" />
                            <Trash2 className="btnDelete"/>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='list-box'>
                        <div className="txtContainer">
                            Book 1
                        </div>
                        <div className="btnContainer">
                            <Edit className="btnEdit" />
                            <Trash2 className="btnDelete"/>
                        </div>
                    </div>
                </li>
            </ol>
            <div className="addItmContainer">
                <Plus className="btnAdd" />
                Add Book
            </div>
        </div>
      

    )
}

export default BookList 