function ModalResults({sorted}){
    return(
        <div className="modal">
            <button className="closeButton">X</button>
            <h2>Resultado do sorteio</h2>
            <p>O resultado sorteado foi: {sorted}</p>
        </div>
    )

}

export default ModalResults;