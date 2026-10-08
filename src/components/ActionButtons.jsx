
function ActionButtons({onClear, onSort}){

    function handleSort (){
        onSort();
    }

      function handleClear (){
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