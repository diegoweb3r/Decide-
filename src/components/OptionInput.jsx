import {useState} from 'react'

function OptionInput({onAddOption}) {
    const [option, setOption] = useState('')

    function handleSubmit (e) {
        e.preventDefault();
        if (option.trim() === ''){
            alert("Ops, digite alguma coisa!")
            return
        }
    
        onAddOption(option)
        setOption('');
    }

    return (
    <form onSubmit={handleSubmit}>
      <input type="text"  value={option} onChange={(e) => setOption(e.target.value)}/>
      <button type="submit">Adicionar</button>
    </form>
    )
}


export default OptionInput  