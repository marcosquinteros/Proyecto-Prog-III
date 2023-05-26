const grupo = [
    { id: 7, nombre: 'Paul Urcan', edad: 21, img: "https://live.staticflickr.com/65535/52927864826_5ac1500a6c_o.jpg" },
    { id: 8, nombre: 'Matias Grande', edad: 20, img: "https://live.staticflickr.com/65535/52927864911_af121a8c82_o.jpg" },
    { id: 9, nombre: 'Santiago Lacki', edad: 24, img: "https://live.staticflickr.com/65535/52928312203_b14916f494_o.jpg" },
    { id: 10, nombre: 'Marcos Quinteros', edad: 19, img: "https://live.staticflickr.com/65535/52927279787_929b65e330_o.jpg" },
]


const Integrantes = () => {
    return (
      <div>
        {grupo.map((persona) => (
          <div key={persona.id}>
            <img className="integrantes" src={persona.img} alt={persona.nombre} />
            <p>{persona.nombre}</p>

          </div>
        ))}
      </div>
    );
  };
  
  export default Integrantes;