import React from "react";

import modal from "../img/modal.jpeg";

// import { useEffect } from "react";

const ModalLogin = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">
          <div className="modal-body-left">
            <img className="modal-picture" src={modal} alt="" />
          </div>
          <div className="modal-body-right">{props.children}</div>
        </div>
        {/* <div className="modal-footer">
          <button onClick={props.onClose} className="button">
            Close
          </button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ModalLogin;
