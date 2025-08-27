import React, { useState } from 'react';
import { Form, ListGroup, Container } from 'react-bootstrap';
import experiences from "../mocks/mockExperience";

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const calculateTime = (startDate, endDate) => {
    const now = new Date();
    const diff = (endDate || now) - startDate;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    return years != 0 ? `${years} años y ${months} meses${endDate ? '' : ' (Actual)'}` : `${months} meses${endDate ? '' : ' (Actual)'}`;
  };

  return (
    <Container className="experience-section">
      <Form.Select 
        value={selectedIndex} 
        onChange={(e) => setSelectedIndex(parseInt(e.target.value))}
        aria-label="Selecciona una experiencia"
      >
        <option value="-1">Seleccione una opción</option>
        {experiences.map((exp, ind) => (
          <option key={ind} value={ind}>
            {exp.role} en {exp.company}
          </option>
        ))}
      </Form.Select>

      {selectedIndex >= 0 && (
        <div className="experience-details mt-3">
          <h3>{experiences[selectedIndex].role} en {experiences[selectedIndex].company}</h3>
          <p>{calculateTime(experiences[selectedIndex].startDate, experiences[selectedIndex].endDate)}</p>
          <ListGroup variant="flush">
            {experiences[selectedIndex].tasks.map((task, i) => (
              <ListGroup.Item key={i}>{task}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </Container>
  );
}
