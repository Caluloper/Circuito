import '../hojas-de-estilo/Resistencia.css';

function Resistencias({ valores, setValores }) {

  const manejarCambio = (e) => {
    const {name, value} = e.target;

    setValores({
      ...valores,
      [name]: value,
    });
  }
  
  return (
    <form className='resistencia-form'>
      <div className='input-container'>
        <label className='label'>R1</label>
        <input 
          name='r1'
          onChange={manejarCambio}
          value={valores.r1}
          placeholder='Ω'
          type='number'
          min='1'
          required
        />
      </div>
      <div className='input-container'>
        <label>R2</label>
        <input 
          name='r2'
          onChange={manejarCambio}
          value={valores.r2}
          placeholder='Ω'
          type='number'
          min='1'
          required
          />
      </div>
      <div className='input-container'>
        <label>R3</label>
        <input 
          name='r3'
          onChange={manejarCambio}
          value={valores.r3}
          placeholder='Ω'
          type='number'
          min='1'
          required
        />
      </div>
      <div className='input-container'>  
        <label>R4</label>
        <input 
          name='r4'
          onChange={manejarCambio}
          value={valores.r4}
          placeholder='Ω'
          type='number'
          min='1'
          required
          />
      </div>
      <div className='input-container'>  
        <label>R5</label>
        <input 
          name='r5'
          onChange={manejarCambio}
          value={valores.r5}
          placeholder='Ω'
          type='number'
          min='1'
          required
        />
      </div>
      <div className='input-container'>
        <label>R6</label>
        <input 
          name='r6'
          onChange={manejarCambio}
          value={valores.r6}
          placeholder='Ω'
          type='number'
          min='1'
          required
        />
      </div>
      <div className='input-container'>
        <label>R7</label>
        <input 
          name='r7'
          onChange={manejarCambio}
          value={valores.r7}
          placeholder='Ω'
          type='number'
          min='1'
          required
        />
      </div>
      <div className='input-container'>
        <label>R8</label>  
        <input 
          name='r8'
          onChange={manejarCambio}
          value={valores.r8}
          placeholder='Ω'
          type='number'
          min='1'
          required
        /> 
      </div>   
      <div className='input-container'>
        <label>R9</label>
        <input 
          name='r9'
          onChange={manejarCambio}
          value={valores.r9}
          placeholder='Ω'
          type='number'
          min='1'
          required
        />
      </div>
      <div className='input-container'>
        <label>V  </label>
        <input 
          name='V'
          onChange={manejarCambio}
          value={valores.V}
          placeholder='Ω'
          type='number'
          min='1'
          required
        />
      </div>
      </form>
  );
}

export default Resistencias;