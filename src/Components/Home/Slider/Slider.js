import React, {useRef} from 'react'
import './Slider.scss'
import Imagen1 from '../../../Img/Slider1.png';
import Imagen2 from '../../../Img/Slider2.png';
import Imagen3 from '../../../Img/Slider3.png';
import Imagen4 from '../../../Img/Slider4.png';
import Imagen5 from '../../../Img/Slider5.png';

import {ReactComponent as FlechaIzquierda} from '../../../Img/iconmonstr-arrow-left.svg'
import {ReactComponent as FlechaDerecha} from '../../../Img/iconmonstr-arrow-right.svg'


const Slider = () =>  {
    const slide =useRef(null);

    const siguiente = () => {
        console.log(slide)
    }

    const anterior = () => {
        console.log('Anterior')
    }

  return (
    <div className="Slider" ref={slide}>
      <div className="Slider__ContenedorSlider">
          <div className="Slider__ContenedorSlider__Slider">
            <a href="" className="Slider__Enlace">
              <img src={Imagen1} alt="Img1" className="ImagenSlider"/>
            </a>
          </div>
          <div className="Slider__ContenedorSlider__Slider">
            <a href="" className="Slider__Enlace">
              <img src={Imagen2} alt="Img2" className="ImagenSlider"/>
            </a>
          </div>
          <div className="Slider__ContenedorSlider__Slider">
            <a href="" className="Slider__Enlace">
              <img src={Imagen3} alt="Img3" className="ImagenSlider"/>
            </a>
          </div>
          <div className="Slider__ContenedorSlider__Slider">
            <a href="" className="Slider__Enlace">
              <img src={Imagen4} alt="Img4" className="ImagenSlider"/>
            </a>
          </div>
          <div className="Slider__ContenedorSlider__Slider">
            <a href="" className="Slider__Enlace">
              <img src={Imagen5} alt="Img5" className="ImagenSlider"/>
            </a>
          </div>
        </div>
        <div className="Slider__Controles">
          <button className="Slider__Controles__Boton Boton--Izquierdo" onClick={anterior}>
            <FlechaIzquierda />
          </button>

          <button className="Slider__Controles__Boton Boton--Derecho" onClick={siguiente}>
            <FlechaDerecha />
          </button>
        </div>
    </div>
  )
}

export default Slider
