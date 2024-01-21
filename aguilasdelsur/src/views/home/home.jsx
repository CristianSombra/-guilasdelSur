import React from "react";
import { Link } from "react-router-dom";
import YouTube from 'react-youtube';
import img from "../../assets/home.png";
import imgmoto from "../../assets/motoush.png";
import ScrollTop from "../../components/scrollTop/scrollTop";
import Carrouselhome from "../../components/carrousel/carrouselhome";
import Carrouselhome2 from "../../components/carrousel/carrouselhome2";
import "../index.css";


function Home () {
    const videoId = "KaM62oqXgJU";

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
                            <p>Sitio oficial de la <strong>Agrupación Motera Águilas del Sur</strong>. En nuestro sitio podrás conocer nuestra historia, estar informado de próximos eventos ya sean propios o de otras organizaciones en las que participamos, y disfrutar de nuestras aventuras.</p>
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
                            <div className="col-12 col-md-4 mb-3">
                                <p>En la ruta, encontramos la verdadera riqueza de la vida, la libertad. Con nuestras motos como compañeras, exploramos caminos desconocidos y creando recuerdos inolvidables.</p>
                                <p>Cada kilómetro recorrido es una página más en el libro de nuestras vidas, y en cada curva descubrimos la belleza de vivir en la carretera, donde la libertad se fusiona con el viento.</p>
                            </div>
                        </div>
                    
                    <div className="row my-5 seccion-oscura">
                        <div className="col-12 text-center">
                            <p>Visita nuestra galería en el que podrás disfrutar de nuestras reuniones y aventuras.</p>
                        </div>
                            
                            <div className="row d-flex align-items-center my-3">
                                <div className="col-12 col-md-6 order-2 order-md-1">
                                    <p>Podrás ver la esencia de nuestra hermandad en cada fotografía, en el que capturó momentos llenos de risas, amistad, unión y pasión. Juntos, no solo recorremos kilómetros, sino que creamos recuerdos que durarán toda la vida.</p>
                                </div>
                                <div className="col-12 col-md-6 my-3 order-1 order-md-2">
                                    <Carrouselhome/>
                                </div>
                            </div>
                            
                            <div className="row d-flex align-items-center">
                                <div className="col-12 col-md-6 my-3">
                                    <YouTube 
                                        videoId={videoId} 
                                        opts={{ width: '100%' }} 
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>También te invitamos a que veas eventos en los que hemos participado, disfrutado y vivido al máximo, junto con nuestros integrantes y en ciertos momentos con agrupaciones amigas.</p>
                                </div>
                            </div>
                            <Link to="/galery" className="text-custom text-decoration-none">
                                <p className="my-5">IR A GALERIA</p>
                            </Link>
                        </div>
                        <hr />
                        <div className="row my-5 justify-content-evenly">
                        <div className="col-12 text-center">
                                <h1><strong>Sección Informativa</strong></h1>
                                <p>En éste apartado podrás estar actualizado de los próximos eventos para que puedas participar.</p>
                            </div>
                            <div className="col-12 col-md-6 my-5">
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