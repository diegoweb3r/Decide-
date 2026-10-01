
function OptionList({optionsList}){
    return(
        <ul>
            {optionsList.map((option) =>(
                <li key={option.id}>{option.name}</li>
            ) )}
        </ul>

    )
}

export default OptionList