import React from "react";

import modal from "../img/modal.jpeg";

const ModalLogin = (props) => {
  if (!props.showLogin) {
    return null;
  }

  return (
    <div className="modal-login" onClick={props.onClose}>
      <div className="modal-content-login" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-login">
          <h4 className="modal-title-login">{props.title}</h4>
        </div>
        <div className="modal-body-login">
          <div className="modal-body-left-login">
            <img className="modal-picture-login" src={modal} alt="" />
          </div>
          <div className="modal-body-right-login">{props.children}</div>
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
