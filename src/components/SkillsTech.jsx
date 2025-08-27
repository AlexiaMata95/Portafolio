import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Container, Figure, Form, ProgressBar, Row } from 'react-bootstrap';
import { technicalSkills, softSkills } from '../mocks/mockSkills'

export default function SkillsTech() {
    const categories = ['All', 'Frontend', 'Backend', 'Databases'];
    const [filter, setFilter] = useState('All');

    const filteredSkills = filter === 'All' ? technicalSkills : technicalSkills.filter(skill => skill.category === filter);
    const figureStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0',
    };

    const imageStyle = {
        width: '15vw',
        height: '15vw',
        objectFit: 'cover',
        margin: '0',
        borderRadius: '4vw',
    };
    return (
        <Container>
            <ButtonGroup className="mb-3">
                {categories.map(cat => (
                    <Button key={cat} variant={filter === cat ? 'primary' : 'secondary'} onClick={() => setFilter(cat)}>
                        {cat}
                    </Button>
                ))}
            </ButtonGroup>
            <Row>
                {filteredSkills.map((skill, index) => (
                    <Col key={index} xs={3} md={3} lg={3} className="mb-4">
                        <Figure style={figureStyle}>
                            <Figure.Image
                                style={imageStyle}
                                alt={skill.name}
                                src={skill.logo}
                            />
                            <Figure.Caption>{skill.name}</Figure.Caption>
                        </Figure>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
