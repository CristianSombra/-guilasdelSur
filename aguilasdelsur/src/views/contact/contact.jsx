import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import ScrollTop from "../../components/scrollTop/scrollTop";
import imgcontact from "../../assets/contact.png";
import "../index.css";

function Contact () {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        emailjs.init('k6BIbgQ5_xVbN60fY');
    },[]);

    const handleChange = (e) => {
        const { id, value } = e.target;
    
        // Validation for name field (only letters and max 20 characters)
        if (id === "name") {
            const regex = /^[a-zA-Z\s]+$/;
            if (value.length <= 20 && regex.test(value)) {
                setFormData((prevData) => ({ ...prevData, [id]: value }));
            }
        }
    
        // Validation for email field
        if (id === "email") {
            // You can use a regular expression for basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setFormData((prevData) => ({
                ...prevData,
                [id]: value,
                isValidEmail: emailRegex.test(value),
            }));
        }
    
        // For other fields, update the state directly
        if (id !== "name" && id !== "email") {
            setFormData((prevData) => ({ ...prevData, [id]: value }));
        }
    };
    
    
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        const btn = document.getElementById('button');
        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_40mcgip';

        const data = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        try {
            await emailjs.send(serviceID, templateID, data);
            btn.value = 'Send Email';
            setShowModal(true);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (err) {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        }
    };
    
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container">
                <div className="row mt-5">
                    <div className="col my-3 text-center">
                        <h1><strong>¡Contáctanos!</strong></h1>
                    </div>
                </div>
                <div className="row my-3 m-3 d-flex justify-content-around align-items-center">
                    <div className="col-12 col-md-6 my-3 text-center">
                        <p>Águilas del Sur se caracteriza por su camadería, recordando el título de la célebre película de <strong>Terence Hill & Bud Spencer</strong>, "quien tiene un amigo motero...¡Tiene un Tesoro!</p>
                        <p>Dicho esto si quieres formar parte de la agrupación o si no eres por ésta zona puedes contar con nosotros completando el formulario!</p>    
                        <img 
                            src={imgcontact} 
                            className="img-fluid rounded mt-5"
                            style={{boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.3)' }}    
                        />
                    </div>
                    <div className="col-12 col-md-4 my-3 mi-formulario p-3">
                        <form onSubmit={handleSubmit} id="form">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    aria-describedby="name"
                                    value={formData.name}
                                    onChange={handleChange} 
                                    required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo electrónico</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    aria-describedby="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="off" 
                                    required/>
                                {/* <div id="correo" className="form-text text-white">
                                    Te enviaremos un correo para confirmar
                                </div> */}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="form-label">Mensaje</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    className="form-control my-3"
                                    value={formData.message}
                                    onChange={handleChange} 
                                    required>
                                </textarea>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-outline-light" id="button" data-bs-toggle="modal" data-bs-target="#modalForm">Enviar</button>
                            </div>
                        </form> 
                    </div>
                        <div>
                            <div className="modal fade" id="modalForm" tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
                                <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '450px' }}>
                                    <div className="modal-content bg-dark">
                                        <div className="modal-header text-light">
                                            <h2>Aguilas del Sur</h2>
                                            <button type="button" className="btn-close btn-light bg-light" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                                        </div>
                                        <div className="modal-body text-light text-center">
                                            <h5>Gracias por tu mensaje, te responderemos a la brevedad.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <ScrollTop />
        </div>
    );
}

export default Contact;