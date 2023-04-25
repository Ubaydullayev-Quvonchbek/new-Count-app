import React, { useState } from "react";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [Count, setCount] = useState(0);
  const inc = () => {
    if (Count >= 99) {
      setCount(0);
    } else {
      setCount(Count + 1);
    }
  }
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg={4}>
            <h1 className="Count">{Count}</h1>
            <button className="inc" onClick={() => inc()}>+</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
