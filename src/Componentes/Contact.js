import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '', // Corrigido: 'LastName' para 'lastName' (case sensitive)
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => { // Renomeado para onFormUpdate
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = async (e) => { // Corrigido nome da função (handleSumit -> handleSubmit)
        e.preventDefault();
        setButtonText('Enviando...');
        
        try {
            let response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json;charset=utf-8", // Corrigido "Apllcation"
                },
                body: JSON.stringify(formDetails),
            });
            
            setButtonText("Send");
            let result = await response.json(); // Adicionado await
            
            setFormDetails(formInitialDetails);
            
            if (result.code === 200) { // Provavelmente deveria ser 200 (não 2000)
                setStatus({ success: true, message: 'Mensagem enviada com sucesso' });
            } else {
                setStatus({ success: false, message: 'Algo deu errado, tente mais tarde' });
            }
        } catch (error) {
            setButtonText("Send");
            setStatus({ success: false, message: 'Erro ao enviar mensagem' });
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Contacte-nos</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.firstName} 
                                        placeholder="Nome" 
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.lastName} 
                                        placeholder="Sobrenome" 
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.phone} 
                                        placeholder="Telefone" 
                                        onChange={(e) => onFormUpdate('phone', e.target.value)} 
                                    />
                                </Col>  
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="email" 
                                        value={formDetails.email} 
                                        placeholder="Email" 
                                        onChange={(e) => onFormUpdate('email', e.target.value)} 
                                    />
                                </Col>
                                <Col>
                                    <textarea 
                                        rows="6" 
                                        value={formDetails.message} 
                                        placeholder="Deixe uma mensagem, te responderemos no seu inbox!" 
                                        onChange={(e) => onFormUpdate('message', e.target.value)} 
                                    />
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                            </Row>
                            {status.message && (
                                <Row>
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>
                                            {status.message}
                                        </p>
                                    </Col>
                                </Row>
                            )}
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};