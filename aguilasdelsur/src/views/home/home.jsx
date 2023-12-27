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
                    <div className="col-12 col-md-6 text-center">    
                        <img src={img} className="img-fluid"/>
                    </div>
                </div>

            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12 col-md-6">
                            <p>Agrupación creada y compuesta por moteros amigos que comparten la misma pasión por las 2 ruedas, y los mismos intereses como el honor, el valor y la camadería. Integrada por 35 miembros desde la provincia de Tierra del Fuego hasta la provincia de Chubut, Argentina.</p>
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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit labore quis a in. Tenetur, illo adipisci alias sapiente facere quo illum ab nihil reiciendis rem ducimus impedit nobis voluptates.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quisquam laudantium voluptatibus culpa error corporis, labore nesciunt ducimus eius, vero numquam molestiae veniam magni enim assumenda fugiat voluptatum deleniti quia.</p>
                            </div>
                        </div>
                    <div className="row my-5 seccion-oscura">
                        <div className="col-12 text-center">
                            <h1>Galería</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima perspiciatis quibusdam in adipisci natus magnam? Obcaecati laborum veritatis soluta repudiandae voluptatem maiores, expedita enim voluptatibus doloribus. Ipsa pariatur hic tempora!</p>
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
                            <h1>Aquí van las publicidades</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima perspiciatis quibusdam in adipisci natus magnam? Obcaecati laborum veritatis soluta repudiandae voluptatem maiores, expedita enim voluptatibus doloribus. Ipsa pariatur hic tempora!</p>
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