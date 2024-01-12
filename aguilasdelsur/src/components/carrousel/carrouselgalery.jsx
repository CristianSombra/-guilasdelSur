import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "../index.css";

const videos = [
    "https://res.cloudinary.com/minube2024/video/upload/c_scale,h_855/v1704903483/aguilasdelsur/video3_npwdap.mp4",
    "https://res.cloudinary.com/minube2024/video/upload/v1704834149/aguilasdelsur/video2_nskw7o.mp4",
];

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (selectedIndex, e) => {
    // Pausar el video actual cuando cambias al siguiente
    const currentVideo = document.getElementById(`video-${activeIndex}`);
    if (currentVideo) {
        currentVideo.pause();
    }

    setActiveIndex(selectedIndex);
};

return (
    <Container className="mt-5">
        <div className="row d-flex justify-content-around">
            <div className="col-12 col-md-4 container-marco d-flex justify-content-center">
                <Carousel activeIndex={activeIndex} onSelect={handleSlideChange}>
                    {videos.map((video, index) => (
                    <Carousel.Item key={index}>
                        <video
                            id={`video-${index}`}
                            controls
                            className="w-100 my-5 rounded"
                            style={{ maxWidth: '95%', maxHeight: '95%' }}
                        >
                            <source src={video} type="video/mp4" />
                        </video>
                    </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center">
                <div className="row">
                    <p>En la ruta, encontramos la verdadera riqueza de la vida, la libertad. Con nuestras motos como compañeras, exploramos caminos desconocidos y creando recuerdos inolvidables.</p>
                    <p>Cada kilómetro recorrido es una página más en el libro de nuestras vidas, y en cada curva descubrimos la belleza de vivir en la carretera, donde la libertad se fusiona con el viento.</p>
                </div>
            </div>
        </div>
    </Container>
    );
};

export default Gallery;
