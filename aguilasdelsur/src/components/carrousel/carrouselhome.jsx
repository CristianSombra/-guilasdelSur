import React from "react";
import img1 from "../../assets/carrouselhome1.png";
import img2 from "../../assets/carrouselhome2.png";
import img3 from "../../assets/carrouselhome3.png";
import img4 from "../../assets/carrouselhome4.png";


function Carrouselhome () {

    return (
        <div className="container-fluid">
                    <div className="carousel slide carousel-fade" id="mi-carousel1" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid " src={img1} alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={img2} alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={img3} alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={img4} alt=""/>
                        </div>
                    </div>
                    <button className="carousel-control-prev " type="button" data-bs-target="#mi-carousel1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next " type="button" data-bs-target="#mi-carousel1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            className="active"
                            data-bs-target="#mi-carousel1"
                            data-bs-slide-to="0"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            className=""
                            data-bs-target="#mi-carousel2"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            className=""
                            data-bs-target="#mi-carousel3"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                        <button
                            type="button"
                            className=""
                            data-bs-target="#mi-carousel4"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        ></button>
                    </div>
                </div>
        </div>
    )
}

export default Carrouselhome;