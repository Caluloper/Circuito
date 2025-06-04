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
      <input 
        name='r1'
        onChange={manejarCambio}
        value={valores.r1}
        placeholder='0'
        type='number'
        min='0'
        required
      />
      <label>R1</label>
      <input 
        name='r2'
        onChange={manejarCambio}
        value={valores.r2}
        placeholder='0'
        type='number'
        min='0'
        required
      />
      <label>R2</label>
      <input 
        name='r3'
        onChange={manejarCambio}
        value={valores.r3}
        placeholder='0'
        type='number'
        min='0'
        required
      />
      <label>R3</label>
      <input 
        name='r4'
        onChange={manejarCambio}
        value={valores.r4}
        placeholder='0'
        type='number'
        min='0'
        required
      />
      <label>R4</label>
      <input 
        name='r5'
        onChange={manejarCambio}
        value={valores.r5}
        placeholder='0'
        type='number'
        min='0'
        required
      />
      <label>R5</label>
      <input 
        name='r6'
        onChange={manejarCambio}
        value={valores.r6}
        placeholder='0'
        type='number'
        min='0'
        required
      />
      <label>R6</label>
      <input 
        name='r7'
        onChange={manejarCambio}
        value={valores.r7}
        placeholder='0'
        type='number'
        min='0'
        required
      />
      <label>R7</label>
      <input 
        name='r8'
        onChange={manejarCambio}
        value={valores.r8}
        placeholder='0'
        type='number'
        min='0'
        required
      /> 
      <label>R8</label>     
      <input 
        name='r9'
        onChange={manejarCambio}
        value={valores.r9}
        placeholder='0'
        type='number'
        min='0'
        required
      />
      <label>R9</label>
    </form>
  );
}

export default Resistencias;