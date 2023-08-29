import React from "react";
import successIcon from "../assets/images/icon-success.svg"

function ValidScreen(props) {

    return(
        <div className="success-container">
            <img className="success-icon" src={successIcon} />
            <h1 className="success-title">Thanks for subscribing!</h1>
            <p className="success-text">A confirmation email has been sent to <span>{props.email}</span>. Please open it and click the button inside to confirm your subscription.</p>
            <button onClick={props.changeValidState} className="success-btn">Dismiss message</button>
        </div>
    )
}

export default ValidScreen