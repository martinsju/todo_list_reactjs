import React from "react";
import styled from "styled-components";

const Modal = ({ isVisible, onCloseModal }) => {
  return (
    <>
      {isVisible && (
        <div className="modalContainer" onClick={onCloseModal}>
          <h1>MODAL</h1>
        </div>
      )}
    </>
  );
};

export default Modal;
