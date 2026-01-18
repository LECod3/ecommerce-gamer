import React from "react";
import { Carousel } from "react-bootstrap";

const HeroCarrousel = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img>
                    className="d-block w-100"
                    src="/R-evil-4-remake"
                    alt="First slide"
                    style={{ height: "100vh", objectFit: "cover" }}
                </img>
                <Carousel.Caption>
                    <h2> hola mundo </h2>
                    <p> bienvenidos </p>
                </Carousel.Caption>
            </Carousel.Item>            

        </Carousel>
    )
}
export default HeroCarrousel;