import React from "react";
import ScrollTop from "../../components/scrollTop/scrollTop";

const video1 = "https://res.cloudinary.com/minube2024/video/upload/v1704834049/aguilasdelsur/video1_c7g3rf.mp4";
const video2 = "https://res.cloudinary.com/minube2024/video/upload/v1704834149/aguilasdelsur/video2_nskw7o.mp4";

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
                            <video className="img-fluid" width="400" controls>
                            <source src={video1} type="video/mp4" />
                                Tu navegador no soporta el tag de video.
                            </video>
                        </div>

                        <div className="mb-3">
                            <video className="img-fluid" width="400" controls>
                            <source src={video2} type="video/mp4" />
                                Tu navegador no soporta el tag de video.
                            </video>
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