import React, { useState } from "react";
import { Redirect } from "react-router";
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';
import QuestionnaireAnx from "../components/questionaire_anx";
import { QuestionsTOC } from "../components/Questions";
import Fuzzy from "../middlewares";

export const TOCScreen = () => {
  
  let history =  useHistory()

  const [values, setvalues] = useState({});
  const [results, setResults] = useState(false);
  const [cancelQuestionnaire, setCancelQuestionnaire] = useState(false);

  const getValues = (target, value) => {
    setvalues((values) => ({ ...values, [target]: value }));
  };

  const handleInfo = () => {
    Swal.fire({
        title: "Se te Redigirá a una ventana con Información",
        text: 'Obtendras información de contacto C:',
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        confirmButtonColor: "#21445F",
        cancelButtonColor: "#607D8B",
        }).then( (result  )=>{
            if( result.isConfirmed ) {
                history.push("/info")
            }
            else if ( result.dismiss === Swal.DismissReason.cancel ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Entendido',
                    text: 'Siga contestando su test',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                })
            }
        })
  }

  const hadleCancel = () => {
    Swal.fire({
      title: "¿Está seguro de cancelar el test?",
      text: "Se le enviará al menú de Inicio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      confirmButtonColor: "#21445F",
      cancelButtonColor: "#607D8B",
    }).then((result) => {
      if (result.isConfirmed) {
        setCancelQuestionnaire(true);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: "success",
          title: "Entendido",
          text: "Siga contestando su test",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleSubmit = () => {
    if (Object.keys(values).length !== 10) {
      return Swal.fire(
        "Oops...",
        "Por favor, responda todas las preguntas antes de terminar",
        "error"
      );
    }
    setResults(!results);
  };

  if (cancelQuestionnaire) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="container mb-5">
        <h1>Trastorno Obsesivo Compulsivo ( TOC )</h1>
        {
        results ? 
          (
            <Fuzzy data={values} topic="TOC" />
          ) 
          : ([
            <h3 key="01">Indique su respuesta de acuerdo a los siguientes valores:</h3>,
            <p className="lead" key="02">5 - Siempre , 4 - Casi siempre, 3 - En ocasiones, 2 - Casi nunca, 1 - Nunca </p>,
            QuestionsTOC.map((question, key) => (
              <QuestionnaireAnx
                key={key}
                number={key + 1}
                action={getValues}
                question={question}
              />
            ))
            ])
        }
        {
          results
          ? (
              <div className="d-flex justify-content-end">
                  <button 
                  id="btn-infor"
                  type="button"
                  style={{ backgroundColor: "#607D8B" }}
                  className="btn btn-secondary me-3"
                  onClick={ handleInfo }
                  > Mostrar Informacion de Contacto</button>
              </div>
          )
          :( <div className="d-flex justify-content-end">
              <button
                  id="btn-cancel"
                  type="button"
                  style={{ backgroundColor: "#607D8B" }}
                  className="btn btn-secondary me-3"
                  onClick={ hadleCancel }
              >
                  Cancelar
              </button>
              <button
                  id="btn-send"
                  type="button"
                  style={{ backgroundColor: "#607D8B" }}
                  className="btn btn-secondary"
                  onClick={ handleSubmit }
              >
                  Enviar
              </button>
          </div>)
        }        
      </div>
    </>
  );
};
