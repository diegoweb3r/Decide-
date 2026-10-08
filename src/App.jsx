import './App.css'
import OptionInput from './components/OptionInput'
import Header from './components/Header'

import { useState } from 'react'
import OptionList from './components/OptionList'
import ActionButtons from './components/ActionButtons'
import ModalResults from './components/ModalResults'

function App() {
  const [options, setOptions] = useState([])
  const [sorted, setSorted] = useState("");

  return (
    <>
      <Header />
      <OptionInput onAddOption={(newOption) =>  {
        const option = {
          id: crypto.randomUUID(),
          name: newOption
        }
          ;
        setOptions([...options, option])}}/>

      <OptionList optionsList={options}/>

      <ActionButtons onClear={() => {setOptions([])}} onSort={() => 
        {  
          
          if(options.length > 0) {
            const randomSorted = Math.floor(Math.random() * options.length);
            setSorted(options[randomSorted].name);
          } else{
            setSorted("Não há opções para sortear!");
        }
      }}/>

      {sorted.length > 0 && <ModalResults sorted={sorted} closeModal={() => {setSorted("")}}/>}
    </>
  )
}


export default App
