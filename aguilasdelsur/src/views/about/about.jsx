import React from "react";
import Footer from "../../components/footer/footer";


function About () {
    return (
        <div className="container-fluid">
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-12 text-center">
                        <h1>Ésta es la view de About</h1>    
                    </div>    
                </div>
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-md-3">
                            <p>Ésta es la view de About</p>
                        </div>
                    </div>
                        <div className="row my-5 justify-content-around">
                            <div className="col-3">
                                Ésta es la view de About
                            </div>
                            <div className="col-3">
                                Ésta es la view de About
                            </div>
                            <div className="col-3">
                                Ésta es la view de About
                            </div>
                    </div>
                    <hr />
                    <div className="row my-5">
                            <div className="col-12 mb-3">
                                Ésta es la view de About
                            </div>
                            <div className="col-12 mb-3">
                                Ésta es la view de About
                            </div>
                            <div className="col-12 mb-3">
                                Ésta es la view de About
                            </div>
                        </div>
                    <hr />
                    <div className="row my-5">
                        <div className="col mb-3 d-flex justify-content-end">
                            Ésta es la view de About
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-12 mb-3">
                            Ésta es la view de About
                        </div>
                    </div>
                    <hr />
                    <div className="row my-5">
                        <div className="col">
                            Ésta es la view de About
                        </div>
                        <div className="col">
                            Ésta es la view de About
                        </div>
                    </div>
                    <hr />
                    <div className="row my-5">
                        <div className="col">
                            <p>Ésta es la view de About</p>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <p>Ésta es la view de About</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row my-5 justify-content-evenly">
                        <div className="col-3">
                            <p>Ésta es la view de About</p>
                        </div>
                        <div className="col-3">
                            <p>Ésta es la view de About</p>
                        </div>
                    </div>
                </div>
            </div>    
            <Footer/> 
        </div>
    )
};


export default About;