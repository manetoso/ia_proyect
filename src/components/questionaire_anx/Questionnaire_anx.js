import React, {useState} from 'react'

export default function Questionnaire_anx(props) {
    const [state, setstate] = useState(initialState)
    return (
        <div className="card border-secondary mb-3">
        <div className="card-header">Pregunta {props.number}</div>
            <div className="card-body">
                <p className="card-text">{props.question}
                </p>
                <div className="form-group" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="1" checked="" />
                            <span>1</span>
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="1" checked="" />
                            <span>2</span>
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="1" checked="" />
                            <span>3</span>
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="1" checked="" />
                            <span>4</span>
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="1" checked="" />
                            <span>5</span>
                        </label>
                    </div>
                </div>
                    
            </div>
    </div>
    )
}

