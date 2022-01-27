import { Container } from "react-bootstrap";
import React from "react";
import '../styles/components/_AuthorList.scss'
import { Trash2,Plus,Edit,XCircle} from 'react-feather';

const AuthorList: React.FC = () => {
    return(
        <div className="author-section">
            <h1>Authors</h1>
            <ol>
                <li>
                    <div className="txtContainer">
                        Author 1
                    </div>
                    <div className="btnContainer">
                        <Edit className="btnEdit" />
                        <Trash2 className="btnDelete"/>
                    </div>
                </li>
                <li>
                    <div className="txtContainer">
                    Author 2
                    </div>
                    <div className="btnContainer">
                        <Edit className="btnEdit" />
                        <Trash2 className="btnDelete"/>
                    </div>
                </li>
                <li>
                    <div className="txtContainer">
                        Author 3
                    </div>
                    <div className="btnContainer">
                        <Edit className="btnEdit" />
                        <Trash2 className="btnDelete"/>
                    </div>
                </li>
                <li>
                    <div className="txtContainer">
                        Author 4
                    </div>
                    <div className="btnContainer">
                        <Edit className="btnEdit" />
                        <Trash2 className="btnDelete"/>
                    </div>
                </li>
            </ol>
            <div className="addItmContainer">
                <Plus className="btnAdd" />
                Add Author
            </div>
        </div>


    )
}

export default AuthorList 