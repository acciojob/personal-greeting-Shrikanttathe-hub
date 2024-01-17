
import React,{ useState }  from "react";
// import './../styles/App.css';

const App = () => {

const [name, setName] = useState("");

function handleInput(e){
  setName("Hello " + e.target.value + "!")
}
  return (
    <div>
      <form>
        Enter your name:
        <br></br>
        <input onChange={handleInput} type="text"/>
        
        </form>
        <p>{name}</p>
    </div>
  )
}

export default App
