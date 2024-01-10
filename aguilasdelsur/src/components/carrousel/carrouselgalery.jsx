import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "../index.css";

const videos = [
    "https://res.cloudinary.com/minube2024/video/upload/v1704903483/aguilasdelsur/video3_npwdap.mp4",
    "https://res.cloudinary.com/minube2024/video/upload/v1704903445/aguilasdelsur/video4_b9dbzk.mp4",
    "https://res.cloudinary.com/minube2024/video/upload/v1704834149/aguilasdelsur/video2_nskw7o.mp4",

];

const Gallery = () => {
    return (
    <Container className="mt-5">
        <div className="row">
            <div className="col-12 col-md-4 container-marco d-flex justify-content-center">
                <Carousel>
                    {videos.map((video, index) => (
                    <Carousel.Item key={index}>
                        <video controls className="w-100 my-5 rounded" style={{ maxWidth: '95%', maxHeight: '95%'}}>
                            <source src={video} type="video/mp4" />
                        </video>
                    </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    </Container>
    );
};

export default Gallery;
