import React from "react";
import imgabout from "../../assets/about.png";
import imgfund from "../../assets/riverosalfredo.png";
import imglogo from "../../assets/home.png";
import pdf from "../../assets/Estatuto Águilas del Sur.pdf";
import ScrollTop from "../../components/scrollTop/scrollTop";


function About () {
    return (
        <div className="container-fluid">
            <div className="row my-5 d-flex justify-content-center">
                <div className="col-12 text-center mt-3">
                    <h2>"LA LIBERTAD ES EL PRIVILEGIO MÁS GRANDE DE TODO SER VIVO"</h2>    
                </div>    
            </div>
            <div className="row my-5 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-10 text-center mb-5">
                    <p style={{ textAlign: 'justify' }}>La <strong>Agrupación Motera Águilas del Sur</strong>, fue inaugurada oficialmente el <strong>1 de noviembre del año 2021</strong>. Está conformada por moteros amigos que comparten la misma pasión por las 2 ruedas, y los mismos intereses como el honor, el valor y la camadería. Integrada por 35 miembros desde la provincia de Tierra del Fuego hasta la provincia de Chubut, Argentina.</p>
                </div>
                <div className="col-12 mb-3 text-center">
                    <img 
                        src={imgabout} className="img-fluid rounded" 
                        style={{ width: '800px', boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.3)' }}/>
                    <figcaption className="figure-caption text-center">
                        <p className="mt-3">Tren fin del mundo, provincia de Tierra del Fuego</p>
                    </figcaption>
                </div>
            <div className="row my-5 seccion-oscura d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-6 mb-3  text-center">
                    <img 
                        src={imgfund} className="img-fluid rounded-circle" 
                        style={{ width: '400px' }}/>
                    </div>
                    <div className="col-12 col-md-6 my-3">
                        <p>Fundada por su actual Presidente <strong>Juan Alfredo Riveros</strong>, quien vive actualmente en la ciudad de Río Grande, Provincia de Tierra del Fuego.</p>
                    </div>
            </div>
            <div className="row my-3 d-flex justify-content-center">
                <div className="col-12 text-center mt-3">
                    <h2>"DEJEMOS HUELLAS SIN PISAR A NADIE"</h2>    
                </div>    
            </div>
            <div className="row my-3 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-10 text-center mb-5">
                    <p>Actualmente el parche orginal ha tenido modificaciones quedando el siguiente como final:</p>
                </div>
                <div className="col-12 mb-3 text-center">
                    <img 
                        src={imglogo} className="img-fluid rounded" 
                        style={{ width: '700px' }}/>
                </div>
            </div>
            <div className="row my-3 d-flex justify-content-center align-items-center">
                <div className="col-12">
                    <p style={{ textAlign: 'justify' }}>En su centro representada por <strong>El Águila</strong>, considerado el emblema supremo de los dioses, símbolo de majestuosidad, valentía e inspiración espiritual.</p>
                    <p style={{ textAlign: 'justify' }}><strong>La brújula y las montañas</strong> representa la libertad de espíritu y el mundo como hogar, ya que además del Norte también está el Sur, representada en este caso por las montañas del fin del mundo, el Este y el Oeste, lo cual muestra el sinfín de direcciones a elegir y los destinos de la vida.</p>
                    <p style={{ textAlign: 'justify' }}><strong>Las estrellas</strong> simbolizan la buena orientación, nuestro camino en la vida, el recorrido de nuestra existencia y el regreso al hogar.</p>
                    <p style={{ textAlign: 'justify' }}>Por último, <strong>Las banderas y las garras de águila</strong> representan a nuestra ciudad y país, donde las garras son un elemento de carga simbólica importante para comunicar un mensaje a su portador</p>
                </div>
            </div>
            <hr />
            <div className="row my-5 d-flex justify-content-center">
                <div className="col-12 text-center">
                    <p>Puedes conocer más sobre nuestra historia, conocer a los integrantes, y porque no, tu puedes ser parte también. A continuación nuestro estatuto:</p>
                </div>
                <div className="col-12 text-center mt-3">
                    <a href={pdf} target="_blank">
                        <i className="bi bi-file-earmark-text-fill fs-1"></i>
                    </a>
                </div>
                </div>
            </div>
            <ScrollTop/>     
        </div>
    )
};


export default About;