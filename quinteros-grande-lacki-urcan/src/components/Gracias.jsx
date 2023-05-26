import { useState } from "react";

function Gracias() {
    const [Gracias, setGracias] = useState(0)

    const handleClick=()=>{
        setGracias(Gracias+1)
    }

    return(
        <>
        <button onClick={handleClick}>Di "Gracias"</button>
        <h1>Cantidad de personas que dieron las gracias: {Gracias}</h1>
 </>
)
}

export default Gracias;