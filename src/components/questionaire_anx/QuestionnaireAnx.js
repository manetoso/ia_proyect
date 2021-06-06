import React, { useState } from "react";

export default function QuestionnaireAnx(props) {
  const [optionSelected, setOptionSelected] = useState();

  const handleChooise = (e) => {
    // console.log(e.target.value);
    setOptionSelected(e.target.value);
    props.action(props.number, e.target.value);
  };

  return (
    <div className="card border-secondary mb-3">
      <div className="card-header">Pregunta {props.number}</div>
      <div className="card-body">
        <p className="card-text">{props.question}</p>
        <div
          className="form-group"
          style={{ display: "flex", justifyContent: "space-around" }}
          onChange={handleChooise}
        >
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                value="1"
                checked={optionSelected === "1"}
              />
              <span>1</span>
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                value="2"
                checked={optionSelected === "2"}
              />
              <span>2</span>
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                value="3"
                checked={optionSelected === "3"}
              />
              <span>3</span>
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                value="4"
                checked={optionSelected === "4"}
              />
              <span>4</span>
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                value="5"
                checked={optionSelected === "5"}
              />
              <span>5</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
