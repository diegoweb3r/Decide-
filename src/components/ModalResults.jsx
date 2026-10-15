function ModalResults({sorted, closeModal}){
    function closeModalButton(){
        closeModal();
    }

    return(
        <div className="modalOverlay">
            <div className="modal">
                <button onClick={closeModalButton}className="closeModalButton">❌</button>
                <h2>Resultado do sorteio</h2>
                <p>O resultado sorteado foi:</p>
                <p className="bold">✨ {sorted} ✨</p>
            </div>
        </div>
    )
}

export default ModalResults