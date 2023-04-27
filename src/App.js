import React, { useState } from "react";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import audio1 from "./audio/audio1.wav";
import audio2 from "./audio/audio2.wav";

function App() {
  const [Count, setCount] = useState(0);
  const inc = () => {
    if (Count >= 99) {
      setCount(0);
    } else {
      setCount(Count + 1);
      new Audio(audio1).play()
    }
  }
  const res = () => {
    setCount(0)
    new Audio(audio2).play()
  }
  return (
    <>
      <main>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={5}>
              <div className="card">
                <h1 className="Count">{Count}</h1>
                <div className="d-flex align-items-center justify-content-center margin-auto w-100">
                  <button className="inc" onClick={() => inc()}>+</button>
                  <button className="res" onClick={() => res()}>↻</button>
                </div>
              </div>
              <audio className="audio1" src={audio1}></audio>
              <audio className="audio2" src={audio2}></audio>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
