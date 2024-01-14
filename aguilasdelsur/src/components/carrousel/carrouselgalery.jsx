import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import img from "../../assets/imgcelular.png";
import "../index.css";

const videos = [
    "https://res.cloudinary.com/minube2024/video/upload/c_scale,h_855/v1704903483/aguilasdelsur/video3_npwdap.mp4",
    "https://res.cloudinary.com/minube2024/video/upload/v1704834149/aguilasdelsur/video2_nskw7o.mp4",
];

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [videoStarted, setVideoStarted] = useState(false);
    
    const handleSlideChange = (selectedIndex, e) => {
      // Pausar el video actual cuando cambias al siguiente
    const currentVideo = document.getElementById(`video-${activeIndex}`);
        if (currentVideo) {
            currentVideo.pause();
        }

        setActiveIndex(selectedIndex);
        setVideoStarted(false);
    };

    const handleSlideClick = (index) => {
      // Reproducir el video al hacer clic en cualquier parte de la diapositiva
        if (index === activeIndex && !videoStarted) {
            setVideoStarted(true);
        }
    };

    return (
        <Container className="mt-5">
            <div className="row d-flex justify-content-around">
                <div className="col-12 col-md-4 container-marco d-flex justify-content-center">
                    <Carousel className="carousel-dark" activeIndex={activeIndex} onSelect={handleSlideChange}>
                        {videos.map((video, index) => (
                            <Carousel.Item
                                key={index}
                                onClick={() => handleSlideClick(index)}
                                >
                                {index === activeIndex && !videoStarted ? (
                                <img
                                    src={img}
                                    alt="Muestra"
                                    className="w-100 my-5 rounded"
                                    style={{ maxWidth: "95%", maxHeight: "95%" }}
                                />
                                ) : (
                                <video
                                    id={`video-${index}`}
                                    controls
                                    className="w-100 my-5 rounded"
                                    style={{ maxWidth: "95%", maxHeight: "95%" }}
                                >
                                <source src={video} type="video/mp4" />
                                    </video>
                                )}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <div className="row">
                            <p className="my-5">
                                En Tierra del Fuego, disfrutamos de punta a punta de sus rutas
                                desconocidas que serpentean entre paisajes majestuosos, montañas
                                y ríos, creando recuerdos que se graban en el alma.
                            </p>
                        <p>
                            Descubrimos la belleza de vivir en la carretera fueguina, donde
                            las montañas esculpen el horizonte y la naturaleza salvaje de
                            Tierra del Fuego nos envuelve en su abrazo inolvidable.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Gallery;
