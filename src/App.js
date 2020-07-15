import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import Clima from './components/Clima';
import Error from './components/Error';
import Footer from './components/Footer';
import Animacion from './components/animacion/Animacion';

function App() {

  //state del formulario
  const [ busqueda, setBusqueda ] = useState({
    ciudad:'',
    pais:'',
});
const [consulta, setConsulta ] = useState(false);
const [ resultado, setResultado ] = useState({});
const [ error, setError ] = useState(false);

const { ciudad, pais } = busqueda;

//detectar cambios en ciudad y pais
useEffect( ()=>{
  const consultaAPI = async () => {

    if(consulta){
      const apiKey = 'fe0cd5d828c912aea69c2bf12efc7bd8';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

      const response = await fetch(url);
      const result = await response.json();

      setResultado(result);
      setConsulta(false);

      //detecta si hubo errores en la consulta
      if(result.cod === '404'){
        setError(true);
      }else{
        setError(false);
      } 
    }
  }
  consultaAPI();
}, [consulta]);

//en caso de que haya error
let componente;
if(error) {
  componente = <Error 
                mensaje="No hay resultados" />
}else{
  componente = <Clima
                resultado={resultado} />
}

  
  return (
    <>
    <Animacion />
    <Header
    titulo='Clima React App'
    />
    <div className="contenedor-form">
      <div className="container">
        <div className="row">
          <div className="col m6 s12">
            <Form
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            setConsulta={setConsulta}
            />
          </div>
          <div className="col m6 s12">
           {componente}
          </div>
        </div>
      </div>
    </div>
  <Footer/>
    </>
  );
}

export default App;
