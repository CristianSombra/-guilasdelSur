import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import ScrollTop from "../../components/scrollTop/scrollTop";
import imgcontact from "../../assets/contact.png";
import AlertMessage from "./alertMessage";
import "../index.css";

function Contact () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        isValidEmail: false
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [isAlertVisible, setIsAlertVisible] = useState(false);


    useEffect(() => {
        emailjs.init('k6BIbgQ5_xVbN60fY');
    },[]);

    const handleChange = (e) => {
        const { id, value } = e.target;
    
        if (id === "name") {
            const regex = /^[a-zA-Z\s]+$/;
            if (value.length <= 20 && regex.test(value)) {
                setFormData((prevData) => ({ ...prevData, [id]: value }));
            }
        }
    
        if (id === "email") {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            setFormData((prevData) => ({
                ...prevData,
                [id]: value,
                isValidEmail: emailRegex.test(value),
            }));
        }

        if (id !== "name" && id !== "email") {
            setFormData((prevData) => ({ ...prevData, [id]: value }));
        }

        setFormData((prevData) => {
            setIsFormValid(
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(prevData.email) &&
                prevData.name.length > 0 &&
                prevData.message.length > 0
            );
            return prevData;
        });
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
            setAlertMessage({ message: "Correo Enviado! Te responderemos a la brevedad.", type: "success" });
            setIsAlertVisible(true);
            btn.value = 'Send Email';
            setFormData({
                name: '',
                email: '',
                message: '',
                isValidEmail: false
            });
        } catch (err) {
            setAlertMessage({ message: "Ocurrió un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.", type: "error" });
            setIsAlertVisible(true);
            btn.value = 'Send Email';
            setFormData((prevData) => ({ ...prevData, isValidEmail: false }));
        }
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 3000);
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
                                <button 
                                    type="submit" 
                                    className="btn btn-outline-light" 
                                    id="button" 
                                    disabled={!isFormValid}>
                                        Enviar
                                </button>

                            </div>
                        </form> 
                    </div>
                </div>
                {isAlertVisible && alertMessage && <AlertMessage message={alertMessage.message} type={alertMessage.type} />}
            <ScrollTop />
        </div>
    );
}

export default Contact;