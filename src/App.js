import './App.css';
import { useState } from 'react';
import Resistencias from './componentes/Resistencias';
import Boton from './componentes/Boton';

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
    });

  const [resultado, setResultado] = useState(0);

  const calcularCorriente = () => {
    const req1 = valores.r1 + valores.r2;
    const req2 = valores.r3 + valores.r4;
    const req3 = valores.r6 + valores.r7;
    const req4 = (valores.r8 * valores.r9) / (valores.r8 + valores.r9);
    const req5 = (valores.r5 * req3) / (valores.r5 + req3);
    const req6 = req5 + req4;
    const req7 = (req2 * req6) / (req2 + req6);
    const resultado = req1 + req7;

    setResultado(resultado);
    console.log(resultado);
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
    });
    setResultado(0);
  }

  return (
    <div className="App">
      <div className='title-container'>
        <h1>Calculadora de Corriente</h1>
      </div>
      <div className='body'>
        <div className='resistencia-container'>
          <h2>Resistencias</h2>
          <Resistencias valores={valores} setValores={setValores} />     
        </div>
        <img />
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
  );
}

export default App;
