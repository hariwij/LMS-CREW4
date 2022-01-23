import { Container, Row, Col } from "react-bootstrap";
import AuthorForm from "./components/AuthorForm";
import AuthorList from "./components/AuthorList";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";



const InfoSection: React.FC = () => {
    return(
   
        <Container fluid>

            <Row>
            
                <Col><BookList /></Col>
                <Col><AuthorList/></Col>
            </Row>
            
            <hr />

            <Row>
                <Col><BookForm /></Col>
                <Col><AuthorForm/></Col>
            </Row>
            
            
        </Container>
    );
}

export default InfoSection;