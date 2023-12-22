import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal-closed";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <span className="close-button" onClick={handleClose}>
          &times;
        </span>
        <h2 className="modal-title">Reserve a table</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" required />

              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
              <label htmlFor="guests">Guests:</label>
              <input type="number" id="guests" name="guests" required />
            </div>
          </div>
          <div className="form-group center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
