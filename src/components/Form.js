import React, { useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ( {busqueda, setBusqueda, setConsulta} ) => {

    const [ error, setError ] = useState(false);


    //extraer ciudad y pais
    const { ciudad, pais } = busqueda;

    //funcion que coloca los elemententos en el state
    const handleChange = e =>{
        //actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //submit al form
    const handleSubmit = e =>{
        e.preventDefault();

        //validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        //pasarlo al componente principal
        setConsulta(true);
    }

  return (
    <form
    onSubmit={handleSubmit}
    >
      { error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
      <div className="input-field col s12">
        <input 
        type="text"
        name="ciudad"
        id="ciudad"
        value={ciudad}
        onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <select
        name="pais"
        id="pais"
        value={pais}
        onChange={handleChange}
        >
            <option value="">-- Seleccione un país -- </option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Pais: </label>
      </div>

      <div className="input-field col s12">
          <input 
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          />
      </div>
    </form>
  );
};

Form.propTypes = {
  busqueda: PropTypes.object.isRequired,
  setBusqueda: PropTypes.func.isRequired,
  setConsulta: PropTypes.func.isRequired,
}
export default Form;
