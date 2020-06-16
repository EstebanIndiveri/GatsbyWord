import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Col,Row, Container } from "react-bootstrap";

const PrimaryLayout = (props) => (
<>
    <Header/>
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="12" md="6" lg="6" className={props.column}>
            {props.children}
        </Col>
      </Row>

    </Container>

    <Footer/>
</>
)
 
export default PrimaryLayout;