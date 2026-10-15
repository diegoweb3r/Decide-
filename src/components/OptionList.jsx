
function OptionList({optionsList}){
    return(
        optionsList.length === 0 ? 
        <div className="emptyList">
            <p className="emptyIcon">📂</p>
            <p className="warningEmpty">Não há opções cadastradas</p> 
            <p className="warningEmpty">Adicione opções para que seja possível realizar o sorteio</p>
            </div> : 
            <ul>
            {optionsList.map((option) =>(
                <li className="optionItem" key={option.id}>{option.name} <button className="deleteItenButton">❌</button></li>
            ) )}
        </ul>
    )
}


export default OptionList