import { useState } from "react"

function Menu() {
    const [Contador, setContador] = useState(0)
    const [Rozes, setRozes] = useState(0)

    const handleClick=()=>{
        setContador(Contador+1)
       }
   
    const rozeClick=()=>{
       setRozes(Rozes+1)
    }

       return (
        <>
        <h1>Menu</h1>
           <button onClick={handleClick}>Clickeame</button>
           <p>Click: {Contador}</p>
           <button onMouseOver={rozeClick}>Rozame</button>
           <p>Hover: {Rozes}</p>
        </>
)
}

export default Menu;