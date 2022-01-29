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
                        1. Author 1
                    </div>
                    <div className="btnContainer">
                        <Edit className="btnEdit" />
                        <Trash2 className="btnDelete"/>
                    </div>

                </li>
                <li>
                    <div className="txtContainer">
                        2. Author 1
                    </div>
                    <div className="btnContainer">
                        <Edit className="btnEdit" />
                        <Trash2 className="btnDelete"/>
                    </div>
                </li>
                <li>
                    <div className="txtContainer">
                        3. Author 1
                    </div>
                    <div className="btnContainer">
                        <Edit className="btnEdit" />
                        <Trash2 className="btnDelete"/>
                    </div>
                </li>
                <li>
                    <div className="txtContainer">
                        4. Author 1
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