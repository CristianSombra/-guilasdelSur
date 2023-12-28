import React from "react";
import face from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import whats from "../../assets/whatsapp.png";


function Footer() {
    return (
        <div>
            <footer className="text-white py-4 bg-black">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="row ">
                                <div className="col-12 d-flex justify-content-center text-center">
                                    <p>¡Gracias por visitar nuestro sitio! Conéctate con nosotros en las redes sociales:</p>
                                </div>
                                <div className="col-12 d-flex justify-content-center text-center">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <img className="me-5" src={face} width="40"/>
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <img className="me-5" src={insta} width="40"/>
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={whats} width="40"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
