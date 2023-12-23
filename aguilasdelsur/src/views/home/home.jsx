import React from "react";
import Footer from "../../components/footer/footer";
import "../index"


function Home () {
    return (
        <div className="container-fluid">
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-12 text-center">
                        <h1>Ésta es la view de Home</h1>    
                    </div>    
                </div>
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-md-3">
                            <p>Águilas del Sur</p>
                        </div>
                    </div>
                        <div className="row my-5 justify-content-around">
                            <div className="col-3">
                            <p>Águilas del Sur</p>
                            </div>
                            <div className="col-3">
                            <p>Águilas del Sur</p>
                            </div>
                            <div className="col-3">
                            <p>Águilas del Sur</p>
                            </div>
                    </div>
                    <hr />
                    <div className="row my-5">
                            <div className="col-12 mb-3">
                            <p>Águilas del Sur</p>
                            </div>
                            <div className="col-12 mb-3">
                            <p>Águilas del Sur</p>
                            </div>
                            <div className="col-12 mb-3">
                            <p>Águilas del Sur</p>
                            </div>
                        </div>
                    <hr />
                    <div className="row my-5">
                        <div className="col mb-3 d-flex justify-content-end">
                        <p>Águilas del Sur</p>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-12 mb-3">
                        <p>Águilas del Sur</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row my-5">
                        <div className="col">
                        <p>Águilas del Sur</p>
                        </div>
                        <div className="col">
                        <p>Águilas del Sur</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row my-5">
                        <div className="col">
                        <p>Águilas del Sur</p>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                        <p>Águilas del Sur</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row my-5 justify-content-evenly">
                        <div className="col-3">
                        <p>Águilas del Sur</p>
                        </div>
                        <div className="col-3">
                        <p>Águilas del Sur</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>    
        </div>
    )
};


export default Home;