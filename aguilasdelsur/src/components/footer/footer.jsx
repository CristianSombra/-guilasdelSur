import React from "react";
import imgfooter from "../../assets/aguilafooter.png"
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
                            <div className="row">
                                <div className="col-12 my-3 d-flex justify-content-center text-center">
                                    <p>¡Gracias por visitar nuestra Web Oficial! Conéctate con nosotros en las redes sociales:</p>
                                </div>
                                <div className="col-12 text-center mb-3">
                                    <img src={imgfooter} className="img-fluid" alt="Ojos águila footer" />
                                </div>
                                <div className="col-12 my-3 d-flex justify-content-center text-center">
                                    <a href="https://web.facebook.com/profile.php?id=100072323361470" target="_blank" rel="noopener noreferrer">
                                        <img className="me-5" src={face} width="40"/>
                                    </a>
                                    <a href="https://www.instagram.com/riverosjuanalfre/" target="_blank" rel="noopener noreferrer">
                                        <img className="me-5" src={insta} width="40"/>
                                    </a>
                                    <a href="https://api.whatsapp.com/send?phone=+542964537240&text=Hola,%20me%20quiero%20contactar!." target="_blank" rel="noopener noreferrer">
                                        <img src={whats} width="40"/>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-3 mb-0 text-center">
                                Creado con &hearts; por Cristian Sombra (2023) &copy;
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
