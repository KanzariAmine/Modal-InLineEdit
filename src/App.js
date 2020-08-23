import React, { useState } from "react";
import Modal from "./components/modal/Modal";
import styled from "styled-components";

const OpenModal = styled.button`
  background-color: #f37335;
  border: 2px solid #f37335;
  border-radius: 4px;
  color: #eee;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-family: inherit;
  font-weight: bold;
`;
function App() {
  const [showModal, setShowModal] = useState(false);
  const onToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <OpenModal onClick={onToggle}>OpenModal</OpenModal>
      {showModal && (
        <Modal onToggleModal={onToggle}>
          <Modal.Header onToggleModal={onToggle} title="Modal Title" />
          <Modal.Body>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. lorem100 Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. lorem100 Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
              lorem100 Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. lorem100 Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer t Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. lorem100 Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.ook a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={onToggle}>Close Modal</button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default App;
