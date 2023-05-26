const alumnosGeneral = [
    { id: 1, nombre: 'Barack Obama', edad: 18, img: "https://live.staticflickr.com/65535/52928244780_882d83ab2d_o.png" },
    { id: 9, nombre: 'Santiago Lacki', edad: 23, img: "https://live.staticflickr.com/65535/52928312203_b14916f494_o.jpg" },
    { id: 2, nombre: 'Peter Parker', edad: 19, img: "https://live.staticflickr.com/65535/52927915971_1967c64f9d_o.jpg" },
    { id: 7, nombre: 'Paul Urcan', edad: 21, img: "https://live.staticflickr.com/65535/52927864826_5ac1500a6c_o.jpg" },
    { id: 8, nombre: 'Matias Grande', edad: 20, img: "https://live.staticflickr.com/65535/52927864911_af121a8c82_o.jpg" },
    { id: 3, nombre: 'Kurt Cobain', edad: 20, img: "https://live.staticflickr.com/65535/52927864901_7fe610102d_o.jpg" },
    { id: 5, nombre: 'Tony Stark', edad: 18, img: "https://live.staticflickr.com/65535/52928305058_f2a3d86d79_o.jpg" },
    { id: 10, nombre: 'Marcos Quinteros', edad: 19, img: "https://live.staticflickr.com/65535/52927279787_929b65e330_o.jpg" },
    { id: 6, nombre: 'Pepper Pots', edad: 43, img: "https://live.staticflickr.com/65535/52928014329_1dee0c5fb5_o.jpg" },
  ] 

const alumnosGrupo = [
    { id: 7, nombre: 'Paul Urcan', edad: 21 },
    { id: 8, nombre: 'Matias Grande', edad: 20 },
    { id: 9, nombre: 'Santiago Lacki', edad: 23 },
    { id: 10, nombre: 'Marcos Quinteros', edad: 19 }
]

const alumnosComunes = alumnosGeneral.filter((alumno) => alumnosGrupo.some((alumnoGrupo) =>alumno.id === alumnoGrupo.id))

const Alumnos = () => {
  return (
    <>
      <div className="alumnos">
        {alumnosGeneral.map((alumno) => (
          <div className="alumno" key={alumno.id}>
            {alumnosComunes.some((alumnoComun) => alumno.id === alumnoComun.id) ? (
              <>
                <img className="alumnosGeneral" src={alumno.img} alt={alumno.nombre}></img>
                <h3 className="alumnoGrupo">{alumno.nombre}</h3>
                {/* <p className="alumnoGrupo">{alumno.edad}</p> */}
              </>
            ) : (
              <>
              <img className="alumnosGeneral" src={alumno.img} alt={alumno.nombre}></img>
                <h3>{alumno.nombre}</h3>
                {/* <p>{alumno.edad}</p> */}
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};


export default Alumnos;