import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png"; 
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";

import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projectsTab1 = [
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg12 },
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg1 },
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg3 },
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg4 },
        { title: "Negociações", description: " Design & Programação Webo", imgUrl: projImg5 },
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg7 },
    ];
    
    const projectsTab2 = [
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg10 },
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg14 },
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg6 },
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg11 }, 
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg2 },
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg8 },
    ];
    
    const projectsTab3 = [
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg13 },
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg9 },
        { title: "Negociações", description: " Design & Programação Web", imgUrl: projImg11 },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
            <TrackVisibility>
                {({isVisible}) =>
                 <div className={isVisible ? "animate_animated animate_bounce" : ""}>
                    <h2>Projectos</h2>
                    <p>
                        Aqui estão alguns dos meus projetos, que refletem as atividades e experiências que acumulei ao longo da minha carreira. Espero que despertem o seu interesse e sirvam como ponto de partida para iniciarmos uma possível negociação. Obrigado!
                    </p>
                </div>}
            </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">                
                            <Nav.Item className="tab1">
                                <Nav.Link eventKey="first" >Tabela 01</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tab2">
                                <Nav.Link eventKey="second">Tabela 02</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tab3">
                                <Nav.Link eventKey="third">Tabela 03</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                        <Tab.Pane eventKey="first">
                                <Row>
                                    {projectsTab1.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                    ))}
                                 </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="second">
                            <Row>
                                {projectsTab2.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                                ))}
                            </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                            <Row>
                                 {projectsTab3.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                                ))}
                             </Row>
                        </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background"></img>
        </section>
    )
}