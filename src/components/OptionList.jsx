
function OptionList({optionsList}){
    return(
        optionsList.length === 0 ? 
        <div className="emptyList">
            <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" alt="emptyList" />
            <p>Não há opções cadastradas</p> 
            <p>Adicione opções para que seja possível realizar o sorteio</p>
            </div> : 
            <ul>
            {optionsList.map((option) =>(
                <li key={option.id}>{option.name}</li>
            ) )}
        </ul>
    )
}


export default OptionList