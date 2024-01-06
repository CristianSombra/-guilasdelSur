import React from "react";
import ScrollTop from "../../components/scrollTop/scrollTop";
import imgcontact from "../../assets/contact.png";
import "../index.css";

function Contact () {
    return (
        <div className="container">
                <div className="row my-5 m-3 d-flex justify-content-around align-items-center">
                    <div className="col-12 col-md-6 my-3 text-center">
                        <p>Águilas del Sur se caracteriza por su camadería, recordando el título de la célebre película de <strong>Terence Hill & Bud Spencer</strong>, "quien tiene un amigo motero...¡Tiene un Tesoro!</p>
                        <p>Dicho esto si quieres formar parte de la agrupación o si no eres por ésta zona puedes contar con nosotros completando el formulario!</p>    
                        <h1>¡Contáctanos!</h1>
                        <img 
                            src={imgcontact} 
                            className="img-fluid rounded my-3"
                            style={{boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.3)' }}    
                        />
                    </div>
                    <div className="col-12 col-md-4 my-3 mi-formulario p-3">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="nombre y apellido" className="form-label">Nombre y Apellido</label>
                                <input type="text" className="form-control" id="nombre y apellido" aria-describedby="ayuda-nombra"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo electrónico</label>
                                <input type="text" className="form-control" id="correo" aria-describedby="ayuda-correo"/>
                                <div id="ayuda-correo" className="form-text text-white">
                                    Te enviaremos un correo para confirmar
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                <textarea name="mensaje" id="mensaje" className="form-control"></textarea>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-outline-light">Enviar</button>
                            </div>
                        </form> 
                    </div>    
                </div> 
        <ScrollTop/>
        </div>
    )
};


export default Contact;