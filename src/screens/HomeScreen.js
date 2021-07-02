import React from 'react'
import image1 from "../images/f1.jpg"
import image2 from "../images/f2.jpg"
import image3 from "../images/f3.jpg"
import image4 from "../images/f4.jpg"
import image5 from "../images/f5.jpg"
import image6 from "../images/f6.jpg"
import portada1 from "../images/t1.jpg"
import portada3 from "../images/t3.png"
import image7 from "../images/s1.png"
import image8 from "../images/s2.png"
import image9 from "../images/s3.png"
// import PropTypes from 'prop-types'

function HomeScreen(props) {
    return (
        <div >
            <div>
                <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image6} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image4} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image5} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image1} className="d-block w-100" alt="..." />
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="mt-3">
                <div className="bg-primary pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Un espacio para el cambio</h2>
                        <p className="lead">Todos atravesamos malas rachas en la vida. Generalmente no se debe a que el universo conspira en nuestra contra sino a que hemos ido dando pasos en esa dirección, aunque no siempre es fácil darnos cuenta de ello y asumir la responsabilidad por esa concatenación de infortunadas decisiones o indecisiones.</p>
                    </div>
                    <div className="bg-light shadow-sm mx-auto" 
                        style={{width: "80%", height: "800px", borderRadius: "21px 21px 0 0"}}>
                        <img src={portada1} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 col-md">
                    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Banderas rojas al recibir ayuda🚩</h2>
                            <hr></hr>
                            <p className="lead">En momentos vulnerables podemos no ver tan claras estas señales.</p>
                            <p className="lead">Es importante que te sientas a gusto pero sobre todo seguro(a) con la persona que te brinda ayuda.</p>
                        </div>
                        <div className="bg-dark shadow-sm mx-auto" 
                            style={{width: "100%", height: "200px", borderRadius: "21px 21px 0 0"}}>
                            <img src={image7} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <div className="bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">¿Qué puedo hacer?</h2>
                            <p className="lead">Cuando no podemos expresar lo que sentimos</p>
                            <hr></hr>
                            <p className="lead">A lo mejor estás en un lugar o con personas con las cuales no te sientes seguro, o estás en medio de algo muy importante y tienes que concentrarte en lo que está sucediendo en ese momento; y todo eso es válido.</p>
                            <p className="lead">Sin embargo es importante no dejarlo como si “nada pasará” e ignorarlo o enterrarlo para siempre.</p>
                        </div>
                        <div className="bg-light shadow-sm mx-auto" 
                            style={{width: "100%", height: "300px", borderRadius: "21px 21px 0 0"}}>
                            <img src={image8} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Ayudar a alguien tras un evento traumático</h2>
                            <hr></hr>
                        </div>
                        <div className="bg-dark shadow-sm mx-auto" 
                            style={{width: "100%", height: "650px", borderRadius: "21px 21px 0 0"}}
                            >
                            <img src={image9} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <div className="bg-dark pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Está bien no estar bien</h2>
                        <div className="d-flex justify-content-around">
                            <p className="lead">Estamos acostumbrados a tener la creencia de que siempre tenemos que estar bien. Sin embargo, esto no es nada realista. En el día a día siempre ocurren cosas que hay que ir superando y a las que hay que hacerles frente. Esto, la mayoría de las veces nos desgasta, nos crea ansiedad, nos entristece, etc.
                            Experimentar todos estos sentimientos está bien y es algo natural. Eso sí, debemos tener en cuenta que estos sentimientos negativos no deberían dominar nunca nuestra vida. En el momento en el que pasamos de poder controlarlos a no poder, se convierten en un problema que, en la mayoría de los casos, necesitará la intervención de un profesional.
                            Todo el mundo debería aceptar que la ansiedad, la tristeza, etc., en su justa medida, son algo normal y natural. ¿Quién no ha tenido nunca un día malo?
                            Está bien no sentirse bien. Eso sí, hay que realizar el matiz de que si los sentimientos extremadamente positivos o negativos inundan nuestro día a día, necesitaremos la ayuda de un profesional de la salud mental para intentar encontrar el equilibrio.
                            </p>
                        </div>
                    </div>
                    <div className="bg-light shadow-sm mx-auto" 
                        style={{width: "80%", height: "800px", borderRadius: "21px 21px 0 0"}}>
                        <img src={portada3} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

HomeScreen.propTypes = {

}

export default HomeScreen

