function ModalResults({sorted, closeModal}){
    function closeModalButton(){
        closeModal();
    }

    return(
        <div className="modal">
            <button onClick={closeModalButton}className="closeButton">X</button>
            <h2>Resultado do sorteio</h2>
            <p>O resultado sorteado foi: {sorted}</p>
        </div>
    )
}

export default ModalResults