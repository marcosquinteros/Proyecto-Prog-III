const alumnosgeneral = [
    { id: 1, nombre: 'Barack Obama', edad: 18 },
    { id: 2, nombre: 'Peter Parker', edad: 19 },
    { id: 3, nombre: 'Kurt Cobain', edad: 20 },
    { id: 5, nombre: 'Tony Stark', edad: 18 },
    { id: 6, nombre: 'Pepper Pots', edad: 43 },
    { id: 7, nombre: 'Paul Urcan', edad: 20 },
    { id: 8, nombre: 'Matias Grande', edad: 21 },
    { id: 9, nombre: 'Santiago Lacki', edad: 23 },
    { id: 10, nombre: 'Marcos Quinteros', edad: 19 },
  ] 



const Alumnos = () => {
    return <>
    <h1>Lista de Alumnos</h1>
      <ul>
        {alumnosgeneral.map(alumno => (
            
          <li key={alumno.id}>
            Nombre: {alumno.nombre}, Edad: {alumno.edad}
          </li>

        ))}
      </ul>
    </>
}

export default Alumnos;