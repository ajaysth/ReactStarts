
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name:"Ajay",
    age : 22
  }

  let myArr = [1,2,3,4]
  

  return (
    <>
      <h1 className='bg-amber-100 text-black mb-10'>Hola Culers</h1>
      <Card naam="Ajay" someObj= {myObj} someArr = {myArr} btnText="Visit me" />
      <Card naam = "Subhod" btnText="Click me" />
    </>
  )
}

export default App
