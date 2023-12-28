import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/home.png";
import imgmoto from "../../assets/motoush.png";
import ScrollTop from "../../components/scrollTop/scrollTop";
import Carrouselhome from "../../components/carrousel/carrouselhome";
import Carrouselhome2 from "../../components/carrousel/carroulelhome2";
import "../index.css";


function Home () {
    return (
        <div className="container-fluid">
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-12 col-md-6 text-center mt-3">    
                        <img src={img} className="img-fluid"/>
                    </div>
                </div>

            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12 col-md-6">
                            <p>Sitio oficial de la Agrupación Motera Águilas del Sur. En nuestro sitio podrás conocer nuestra historia, estar informado de próximos eventos ya sean propios o de otras organizaciones en las que participamos, y disfrutar de nuestras aventuras.</p>
                        </div>
                    </div>

                    <hr />
                    <div className="row my-5 d-flex justify-content-center align-items-center">
                            <div className="col-12 col-md-6 mb-3">
                                <img 
                                    src={imgmoto} className="img-fluid rounded" 
                                    style={{ width: '500px', boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.3)' }}/>
                                <figcaption className="figure-caption">
                                    <p className="mt-3">Ciudad de Ushuaia, provincia de Tierra del Fuego</p>
                                </figcaption>
                            </div>
                            <div className="col-12  col-md-6 mb-3">
                                <p>En la ruta, encontramos la verdadera riqueza de la vida, la libertad. Con nuestras motos como compañeras, exploramos caminos desconocidos y creando recuerdos inolvidables.</p>
                                <p>Cada kilómetro recorrido es una página más en el libro de nuestras vidas, y en cada curva descubrimos la belleza de vivir en la carretera, donde la libertad se fusiona con el viento.</p>
                            </div>
                        </div>
                    <div className="row my-5 seccion-oscura">
                        <div className="col-12 text-center">
                            <h1>Galería</h1>
                            <p>Visita nuestra galería en el que podrás disfrutar de nuestras reuniones y aventuras.</p>
                        </div>
                            <div className="col-12 col-md-6 my-3">
                                <Carrouselhome/>
                            <Link to="/galery" className="fire-text">
                                <p className="mt-3">Ver más fotos</p>
                            </Link>
                        </div>
                        <div className="col col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    Aqui va a ir un video
                                </div>
                                <div className="col-12">
                                    Aqui va otro video
                                </div>
                            </div>
                            <Link to="/galery" className="fire-text">
                                <p className="mt-3">Ver más videos</p>
                            </Link>
                        </div>
                    </div>
                    <hr />
                    <div className="row my-5 justify-content-evenly">
                    <div className="col-12 text-center">
                            <h1>Sección Informativa</h1>
                            <p>En éste apartado podrás estar actualizado de los próximos eventos para que puedas participar.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <Carrouselhome2/>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollTop/> 
        </div>
    )
};


export default Home;