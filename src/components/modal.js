import React from "react";

const Modal = ({isVisible, onCloseModal}) => {

  return (
    <div className="modalContainer" onClick={() => onCloseModal()}>
      {isVisible && <h1>MODAL</h1>}
    </div>
  );
};

export default Modal;
