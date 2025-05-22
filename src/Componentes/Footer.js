import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm/>
                    <Col sm={6}>

                    </Col>
                    <div className="text-center text-sm-center">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1}/></a>
                            <a href=""><img src={navIcon2}/></a>
                            <a href=""><img src={navIcon3}/></a>
                        </div>
                      <p>CopyRight 2025, Designed By Alberto Jr</p>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}