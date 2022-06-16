import React from "react";
import './Form.css'

const form = () => {
  return (
    <div className="form-container">
      <form action="#" id="form">
        <div className="email">
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="button">
        <button>Notify me!</button>
        </div>
      </form>
    </div>
  );
};

export default form;
