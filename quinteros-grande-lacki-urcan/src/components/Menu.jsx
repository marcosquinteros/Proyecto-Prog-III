import { useState } from "react";
import React from "react";

function Menu() {
     const [Contador, setContador] = useState(0)
     const [Rozes, setRozes] = useState(0)
     const [Color, setColor] = useState(false)

     const handleClick=()=>{
         setContador(Contador+1)
        }
    
     const rozeClick=()=>{
        setRozes(Rozes+1)
     }

     const overClick=()=>{
      setColor(!Color)
     }

        return (
         <>
            <button onClick={handleClick}>Clickeame</button>
            <p>Veces que me clickeaste: {Contador}</p>
            <button onMouseOver={rozeClick}>Rozame</button>
            <p>Veces que me rozaste: {Rozes}</p>
            <button onMouseDown={overClick} onMouseUp={overClick} className={'button ' + (Color ? 'boton':'')}>{Color ? 'Cortala' : 'Presioname'}</button>
         </>
)
}

export default Menu;