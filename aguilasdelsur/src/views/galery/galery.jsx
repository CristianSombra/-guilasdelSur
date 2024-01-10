import React from "react";
import CarrouselGalery from "../../components/carrousel/carrouselgalery";
import ScrollTop from "../../components/scrollTop/scrollTop";



function Galery () {
    return (
        <div className="container-fluid">
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-12 text-center">
                        <h1>Nuestras Aventuras</h1>    
                    </div>    
                </div>
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="row mt-5">
                        <div className="col-md-4">
                        <h2>Reuniones en Ciudad</h2>
                        </div>
                    </div>
                        <div className="row my-5 justify-content-around">
                            <div className="col-3">
                                <p>En construcción</p>
                            </div>
                            <div className="col-3">
                                <p>En construcción</p>
                            </div>
                            <div className="col-3">
                                <p>En construcción</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-5 justify-content-end">
                            <div className="col-md-4">
                                <h2>Viajes en ruta</h2>
                            </div>
                            <div className="col-12 mb-3">
                                <p>En construcción</p>
                            </div>
                            <div className="col-12 mb-3">
                                <p>En construcción</p>
                            </div>
                        </div>
                    <hr />
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <h2>Reuniones en Ciudad</h2>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-12 mb-3">
                            <p>En construcción</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row my-5">
                        <div className="col justify-content-center">
                            <h2>Videos</h2>
                        <div className="mb-3">
                            <CarrouselGalery/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <ScrollTop/>   
        </div>
    )
};


export default Galery;