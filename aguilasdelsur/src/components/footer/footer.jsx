import React from "react";
import face from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import whats from "../../assets/whatsapp.png";


function Footer() {
    return (
        <div>
            <footer className="text-white py-4 bg-black rounded">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <p>¡Gracias por visitar nuestro sitio! Conéctate con nosotros en las redes sociales:</p>
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                        <img className="me-5" src={face} width="40"/>
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <img className="me-5" src={insta} width="40"/>
                                    </a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <img className="me-5" src={whats} width="40"/>
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
