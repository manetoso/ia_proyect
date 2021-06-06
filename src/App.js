import React, { useState } from "react";
import Swal from "sweetalert2";
import _ from 'lodash'

import Navbar from "./components/Navbar";
import QuestionnaireAnx from "./components/questionaire_anx";
import { QuestionsAnx } from "./components/Questions";
import Fuzzy from "./middlewares";

function App() {
  const [values, setvalues] = useState({});
  const [results, setResults] = useState(false)

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
  };

  const handleSubmit = () => {
    if ( Object.keys( values ).length !== 10 ) {
      return Swal.fire('Oops...', 'Por favor, responda todas las preguntas antes de terminar', 'error')
    }
    setResults( !results )
  }
  return (
    <>
      <Navbar />,
      <div className="container mb-5">
      
        {
          results
          ? <Fuzzy data={ values } />
          : QuestionsAnx.map((question, key) => (
            <QuestionnaireAnx
              key={key}
              number={key + 1}
              action={getValues}
              question={question}
            />
          ))
        }

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
            onClick={ handleSubmit }
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
