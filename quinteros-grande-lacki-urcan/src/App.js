import React from "react";
import "./App.css";
import Title from "./components/Title";
import Alumnos from "./components/Alumnos";
import Integrantes from "./components/Integrantes";
import Gracias from "./components/Gracias";
import Menu from "./components/Menu";
function App() {
  return (
    <div className="container">
      <header className="header">
        <Title text="Programacion III" />
      </header>
      <nav className="menu">
        <Menu />
      </nav>
      <div className="content-sidebar-wrapper">
        <main className="content">
          <Alumnos />
        </main>
        <aside className="sidebar">
          <h2>SE BUSCA</h2>
          <Integrantes />
        </aside>
      </div>
      <footer className="footer">
        <Gracias />
      </footer>
    </div>
  );
}

export default App;
