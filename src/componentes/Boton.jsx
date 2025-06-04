function Boton({ texto, esBotonCalculo, manejarClic}){
    return(
        <button 
            className={esBotonCalculo ? 'boton-calcular' : 'boton-limpiar'} 
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;