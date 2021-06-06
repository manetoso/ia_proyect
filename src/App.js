import React, { useState } from "react";
import Swal from "sweetalert2";

import Navbar from "./components/Navbar";
import Questionnaire_anx from "./components/questionaire_anx";
import { QuestionsAnx } from "./components/Questions";
import Fuzzy from "./middlewares";

function App() {
  const [values, setvalues] = useState({});

  const getValues = (target, value) => {
    setvalues((values) => ({ ...values, [target]: value }));
  };

  const hadleCancel = () => {
    Swal.fire({
      title: "¿Estas seguro de cancelar el test?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      confirmButtonColor: "#21445F",
      cancelButtonColor: "#FF3633",
    });
    // setvalues({});
  };
  return (
    <>
      <Navbar />,
      <div className="container mb-5">
        {QuestionsAnx.map((question, key) => (
          <Questionnaire_anx
            key={key}
            number={key + 1}
            action={getValues}
            question={question}
          />
        ))}

        <Fuzzy />

        <div className="d-flex justify-content-end">
          <button
            type="button"
            style={{ backgroundColor: "#607D8B" }}
            className="btn btn-secondary me-3"
            onClick={hadleCancel}
          >
            Cancelar
          </button>
          <button
            type="button"
            style={{ backgroundColor: "#607D8B" }}
            className="btn btn-secondary"
            onClick={() => {
              console.log(values);
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
