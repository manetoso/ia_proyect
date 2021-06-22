import React from 'react'
import portada2 from "../images/t2.jpg"

export const InfoScreen = () => {
    return (
        <div className="container" >
            <h1 className="text-center">Atención psicológica</h1>
            <div className="mt-3">
                <div className="bg-primary pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h4>Si necesitas atención psicológica gratuita y no sabes a donde acudir, aquí encontrarás alternativas útiles para poder atenderte. Hay organizaciones con psicólogos muy cualificados, que brindan apoyo psicológico gratuito y de calidad en casos de emergencia. </h4>
                    </div>
                    <div className="bg-light shadow-sm mx-auto" 
                        style={{width: "80%", height: "500px", borderRadius: "21px 21px 0 0"}}>
                        <img src={portada2} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <div className="row row-cols-1 row-cols-md-2 g-4" >
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-info rounded" 
                             style={{ height: "20rem" }}>
                            <div className="card text-white bg-primary mb-3" 
                                 style={{ height: "18rem" }}>
                                <div className="card-body text-center">
                                    <h3 className="card-title">Linares García Ana Paola</h3>
                                    <h4 className="card-title">Lic. en psicología clínica</h4>
                                    <hr></hr>
                                    <h5>Solicitar cita por correo:</h5>
                                    <a href="https://www.gmail.com"><ul>paolinares95@gmail.com</ul></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-info rounded" 
                             style={{ height: "20rem" }}>
                            <div className="card text-white bg-primary mb-3" 
                                 style={{ height: "18rem" }}>
                                <div className="card-body text-center">
                                    <h3 className="card-title">Maldonado Rodríguez Iliana Cecilia</h3>
                                    <h3 className="card-title">Lic. en psicología clínica</h3>
                                    <hr></hr>
                                    <h5>Solicitar cita por correo:</h5>
                                    <a href="https://www.gmail.com"><ul>ilianarodriguez96@gmail.com</ul></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-info rounded" style={{ height: "20rem" }}>
                            <div className="card text-white bg-primary mb-3" style={{ height: "18rem" }}>                            
                                <div className="card-body text-center">
                                    <h3 className="card-title">García Muñiz Areli Ariana</h3>
                                    <h3 className="card-title">Lic. en psicología clínica</h3>
                                    <hr></hr>
                                    <h5>Solicitar cita por correo:</h5>
                                    <a href="https://www.gmail.com"><ul>arimuniz98@gmail.com</ul></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="shadow-lg p-3 mb-5 bg-info rounded" style={{ height: "20rem" }}>
                            <div className="card text-white bg-primary mb-3" style={{ height: "18rem" }}>                            
                                <div className="card-body text-center">
                                    <h3 className="card-title">Rodríguez Almanza Francisco Salvador</h3>
                                    <h3 className="card-title">Lic. en psicología educativa</h3>
                                    <hr></hr>
                                    <h5>Solicitar cita por correo:</h5>
                                    <a href="https://www.gmail.com"><ul>paco94@gmail.com</ul></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>La asistencia telefónica es el recurso más utilizado para urgencias, por lo que los números 800 son gratis en todo México.</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4" >
                <div className="col">
                    <div className="shadow-lg p-3 mb-5 bg-info rounded" style={{ height: "21rem" }}>
                        <div className="card text-white bg-primary mb-3" style={{ height: "19rem" }}>                           
                            <div className="card-body text-center">
                                <h3 className="card-title">SIPINNA</h3>
                                <h5>Personal especializado en atención de niñas, niños y adolecentes</h5>
                                <hr></hr>
                                <h5>Linea de Atención telefónica</h5>
                                <ul>800 343 48 61</ul>
                                <h5>Atención por Facebook</h5>
                                <a href="https://www.facebook.com/SIPINNAGTO/"><ul>@SIPINNAGTO</ul></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="shadow-lg p-3 mb-5 bg-info rounded"  style={{ height: "21rem" }}>
                        <div  className="card text-white bg-primary mb-3" style={{ height: "19rem" }}>                            
                            <div className="card-body text-center">
                                <h3 className="card-title">Dinámicamente</h3>
                                <h5>Personal especializado de psicología está 24 horas del día 365 días del año</h5>
                                <hr></hr>
                                <h5>Linea de Atención telefónica</h5>
                                <ul>800 290 00 24</ul>
                                <h5>Atención por página web</h5>
                                <a href="https://www.dinamicamente.mx">dinamicamente.mx</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="shadow-lg p-3 mb-5 bg-info rounded"  style={{ height: "20rem" }}>
                        <div className="card text-white bg-primary mb-3" style={{ height: "18rem" }}>
                            <div className="card-body text-center">
                                <h3 className="card-title">Línea de intervención</h3>
                                <hr></hr>
                                <h5>Línea de intervención en crisis psicológica</h5>
                                <ul>800 224 24 80</ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="shadow-lg p-3 mb-5 bg-info rounded"  style={{ height: "20rem" }}>
                        <div className="card text-white bg-primary mb-3" style={{ height: "18rem" }}>                            
                            <div className="card-body text-center">
                                <h3 className="card-title">Centro de Atención Psicológico Integral</h3>
                                <hr></hr>
                                <h5>Linea de Atención telefónica</h5>
                                <ul>461 100 9038</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
