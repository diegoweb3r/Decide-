
function ActionButtons({onClear, onSort}){

    function handleSort (){
        alert("Opa! clicou no sortear")
        onSort();
    }

      function handleClear (){
        alert("Opa! clicou no excluir")
        onClear(); 
    }

    return(
    <div className="actionButtons">
        <button onClick={handleSort} className="button randomButton">🎲 Sortear</button>
        <button onClick={handleClear} className="button clearButton">🗑️ Limpar</button>
    </div>
    )
}

export default ActionButtons