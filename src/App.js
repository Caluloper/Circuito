import './App.css';
import { useState } from 'react';
import Resistencias from './componentes/Resistencias';
import Boton from './componentes/Boton';
import circuitoIMG from './imagenes/circuito.png';
import fiec from './imagenes/fiec.png';

function App() {

  const [valores, setValores] = useState({
      r1: '',
      r2: '',
      r3: '',
      r4: '',
      r5: '',
      r6: '',
      r7: '',
      r8: '',
      r9: '',
      V: '',
    });

  const [resultado, setResultado] = useState(0);

  const [resistencia, setResistencia] = useState(0);

  const calcularCorriente = () => {
    const req1 = valores.r1 + valores.r2;
    const req2 = valores.r3 + valores.r4;
    const req3 = valores.r6 + valores.r7;
    const req4 = (valores.r8 * valores.r9) / (valores.r8 + valores.r9);
    const req5 = (valores.r5 * req3) / (valores.r5 + req3);
    const req6 = req5 + req4;
    const req7 = (req2 * req6) / (req2 + req6);
    const resistencia = req1 + req7;

    const resultado = valores.V / resistencia;

    setResistencia(resistencia);
    setResultado(resultado);
  }

  const limpiarCampos = () => {
    setValores({
      r1: '',
      r2: '',
      r3: '',
      r4: '',
      r5: '',
      r6: '',
      r7: '',
      r8: '',
      r9: '',
      V: '',
    });
    setResultado(0);
    setResistencia(0);
  }

  return (
    <div className="App">
      <div className='title-container'>
        <h1>Calculadora de Circuito</h1>
      </div>
      <div className='cuerpo-container'>
        <div className='resistencia-container'>
          <div className='formulario-container'>
            <Resistencias valores={valores} setValores={setValores} />     
          </div>
          <div className='button-container'>
            <Boton 
              texto={'Calcular'}
              esBotonCalculo={true}
              manejarClic={calcularCorriente}
            />
            <Boton
              texto={'Limpiar'}
              esBotonCalculo={false}
              manejarClic={limpiarCampos}
            />
          </div>
        </div>
        <div className='circuito-container'>
          <img 
            className='circuito'
            alt='circuito'
            src={circuitoIMG}
          />
          <div className='resultado-container'>
            <label className='resultado'>It =</label>
            <div className='valor-corriente'>{resultado + ' A'}</div>
            <label className='resultado'>Rt =</label>
            <div className='valor-resistencia'>{resistencia + ' Ω'}</div>
          </div>
        </div>
      </div>
      <div className='footer-container'>
        <p>Made By GroupAp</p>
        <img 
          className='logo-fiec'
          alt='FIEC'
          src={fiec}
        />
      </div>
    </div>
  );
}

export default App;
