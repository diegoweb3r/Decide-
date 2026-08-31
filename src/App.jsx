import './App.css'
import OptionInput from './components/OptionInput'

function App() {


  return (
    <>
     <OptionInput onAddOption={(texto) => console.log(texto)}/>
    </>
  )
}

export default App
