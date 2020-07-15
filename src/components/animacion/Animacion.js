import React from 'react';
import Lottie from "react-lottie";
import animacion from './animacion.json';
import '../../index.css';


const Animacion = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animacion,
    };

    return (
        <div className='anim-container'>
            <Lottie
            options={defaultOptions}
            className="animacion"
            />
        </div>
    )
};

export default Animacion;