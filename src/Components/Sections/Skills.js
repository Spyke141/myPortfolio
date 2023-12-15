import { useState } from "react";
import { ProgressBar, Nav, Tab, Row, Col } from "react-bootstrap";

const Skills = () => {
  const [key, setKey] = useState("hard-skills");

  function SkillProgressBar({ skill, value }) {
    return (
      <div style={{ width: "95%" }}>
        <p className="lead mb-1 mt-2">{skill}</p>
        <ProgressBar now={value} label={`${value}%`} />
      </div>
    );
  }

  return (
    <div className="p-5 container" id="skills">
      <h2 className="display-4 pb-5 text-center">Skills</h2>
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Nav className="skills-tabs nav nav-tabs nav-fill" role="tablist">
          <Nav.Item>
            <Nav.Link
              eventKey="hard-skills"
              className={key === "hard-skills" ? "active" : ""}
            >
              Technical Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="soft-skills"
              className={key === "soft-skills" ? "active" : ""}
            >
              Soft Skills
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="hard-skills">
            <Row className="pt-3 px-1">
              <Col md={6} xs={12}>
                <SkillProgressBar skill="React" value={70} />
                <SkillProgressBar skill="JavaScript" value={75} />
                <SkillProgressBar skill="Data Structures" value={60} />
                <SkillProgressBar skill="Netlify/Heroku/Render" value={80} />
              </Col>
              <Col md={6} xs={12}>
                <SkillProgressBar skill="HTML/CSS" value={85} />
                <SkillProgressBar skill="Node JS" value={70} />
                <SkillProgressBar skill="Bootstrap" value={80} />
                <SkillProgressBar skill="Responsive Design" value={80} />
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="soft-skills">
            <Row className="pt-3 px-1">
              <Col md={6} xs={12}>
                <SkillProgressBar skill="Goal-Oriented" value={80} />
                <SkillProgressBar skill="Collaboration" value={90} />
                <SkillProgressBar skill="Positivity" value={75} />
                <SkillProgressBar skill="Adaptability" value={85} />
              </Col>
              <Col md={6} xs={12}>
                <SkillProgressBar skill="Problem Solving" value={75} />
                <SkillProgressBar skill="Empathy" value={90} />
                <SkillProgressBar skill="Organization" value={70} />
                <SkillProgressBar skill="Creativity" value={90} />
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Skills;
