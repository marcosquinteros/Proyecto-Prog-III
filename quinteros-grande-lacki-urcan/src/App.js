import React from "react";
import "./App.css";
import Title from "./components/Title";
import Alumnos from "./components/Alumnos";
function App() {
  return (
    <div className="container">
      <header className="header">
        <Title text="Programacion III" />
      </header>
      <nav className="menu">Menú</nav>
      <div className="content-sidebar-wrapper">
        <main className="content">
          {/* <ul>
            <li>Mati</li>
            <li>Paul</li>
            <li>Santi</li>
            <li>Marcos</li>
          </ul> */}
          <Alumnos />
        </main>
        <aside className="sidebar">Barra Lateral</aside>
      </div>
      <footer className="footer">Pie de Página</footer>
    </div>
  );
}

export default App;
