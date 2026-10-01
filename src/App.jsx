import './App.css'
import OptionInput from './components/OptionInput'
import Header from './components/Header'

import { useState } from 'react'
import OptionList from './components/OptionList'

function App() {
  const [options, setOptions] = useState([])

  return (
    <>
      <Header />
      <OptionInput onAddOption={(newOption) =>  {
        const option = {
          id: crypto.randomUUID(),
          name: newOption
        }
        setOptions([...options, option])}}/>

      <OptionList optionsList={options}/>
    </>
  )
}

export default App
