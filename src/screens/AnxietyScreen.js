import React, { useState } from 'react'
import { Redirect } from 'react-router';
import Swal from "sweetalert2";

import QuestionnaireAnx from "../components/questionaire_anx";
import { QuestionsAnx } from "../components/Questions";
import Fuzzy from "../middlewares";

export const AnxietyScreen = () => {

    const [values, setvalues] = useState({});
    const [results, setResults] = useState(false)
    const [cancelQuestionnaire, setCancelQuestionnaire] = useState(false)

    const getValues = (target, value) => {
        setvalues((values) => ({ ...values, [target]: value }));
    };

    const hadleCancel = () => {
        Swal.fire({
        title: "¿Está seguro de cancelar el test?",
        text: 'Se le enviará al menú de Inicio',
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        confirmButtonColor: "#21445F",
        cancelButtonColor: "#607D8B",
        }).then( ( result ) => {
            if ( result.isConfirmed ) {
                setCancelQuestionnaire( true )
            } else if ( result.dismiss === Swal.DismissReason.cancel ) {
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
    };

    const handleSubmit = () => {
        if ( Object.keys( values ).length !== 10 ) {
        return Swal.fire('Oops...', 'Por favor, responda todas las preguntas antes de terminar', 'error')
        }
        setResults( !results )
    }

    if ( cancelQuestionnaire ) {
        return <Redirect to="/" />
    }

    return (
        <>
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
                        onClick={ hadleCancel }
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
    )
}
