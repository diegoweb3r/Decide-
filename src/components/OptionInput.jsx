import {useState} from 'react'

function OptionInput({onAddOption}) {
    const [texto, setTexto] = useState('')

    function handleSubmit (e) {
        e.preventDefault();
        if (texto.trim() === ''){
            return
        }
        
        onAddOption(texto)
        setTexto('');
    }

    return (
    <form onSubmit={handleSubmit}>
      <input type="text"  value={texto} onChange={(e) => setTexto(e.target.value)}/>
      <button type="submit">Adicionar</button>
    </form>
    )
}

export default OptionInput  