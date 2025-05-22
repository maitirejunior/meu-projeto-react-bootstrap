import { Alert, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.includes("@")) {
            onValidated({
                EMAIL: email
            });
        }
    };

    const clearFields = () => {
        setEmail('');
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row className="align-items-center">
                    <Col lg={12} md={6} xl={5}>  {/* Fixed lowercase 'col' to 'Col' */}
                        <h3>Fazer o pedido orçamental</h3>  {/* Fixed capitalization */}
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input 
                                    value={email} 
                                    type="email" 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="Endereço do seu Email"  
                                    required
                                />
                                <button type="submit">Submeter o pedido</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};