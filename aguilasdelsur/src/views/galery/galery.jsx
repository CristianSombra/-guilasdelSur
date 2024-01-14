import React from "react";
import CarrouselGalery from "../../components/carrousel/carrouselgalery";
import Galery1 from "../../components/galery/galery-1";
import Galery2 from "../../components/galery/galery-2";
import Galery3 from "../../components/galery/galery-3";
import ScrollTop from "../../components/scrollTop/scrollTop";



function Galery () {
    return (
        <div className="container-fluid">
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-12 text-center mt-3">
                        <h1>Nuestras Aventuras</h1>    
                    </div>    
                </div>
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <div className="row mt-5">
                        <div className="col-md-4 mb-3">
                            <h2><strong>Reuniones en Ciudad</strong></h2>
                        </div>
                        <p>"Disfruta de nuestras reuniones en la ciudad de Rio Grande, cada encuentro está acompañado de risas, amistad y la pasión por las motos. Juntos, cortamos la semana con momentos inolvidables y construimos recuerdos que durarán para siempre."</p>
                        <div className="mt-5">
                            <Galery1/>
                        </div>
                    </div>

                    <hr />
                    <div className="row mt-5 justify-content-end">
                        <div className="col-md-4 mb-3">
                            <h2><strong>Viajes en ruta</strong></h2>
                        </div>
                        <p>"También realizamos emocionantes eventos y viajes épicos hasta compartir comidas, campamentos y conciertos. Nuestros viajes en ruta son una celebración de la libertad sobre dos ruedas y creamos experiencias que alimentan el espíritu de la verdadera hermandad motera."</p>
                        <div className="mt-5">
                            <Galery2/>
                        </div>
                    </div>

                    <hr />
                    <div className="row mt-5">
                        <div className="col-md-4 mb-3">
                            <h2><strong>Salidas al campo</strong></h2>
                        </div>
                        <p>"Descubre la esencia misma de nuestra agrupación en las tranquilas salidas al campo. Aquí, no solo rompemos con la rutina diaria, sino que también nos sumergimos en la serenidad del campo, el aroma de la tierra húmeda y de los increíbles asados fueguinos. Cada salida al campo es una oportunidad para conectar con la naturaleza, disfrutar del silencio y fortalecer los lazos que nos unen como verdadera familia motera."</p>
                        <div className="mt-5">
                            <Galery3/>
                        </div>
                    </div>

                    <hr />
                    <div className="row my-5">
                        <div className="col justify-content-center">
                            <h2><strong>Videos</strong></h2>
                        <div id="videos" className="mb-3">
                            <CarrouselGalery/>
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