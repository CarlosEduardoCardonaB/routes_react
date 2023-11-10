import React from 'react'
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Persona } from '../components/Persona';
import { Error } from '../components/Error';

export const RoutersPrincipal = () => {
  return (
    //Todas las rutas deben ir adentro de la etiqueta BrowserRouter
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr />

      <nav>
        <ul>
          <li>
            <NavLink to="/Inicio" 
            className={({isActive}) => isActive ? "activado" : ""}
              //console.log(datosNavegacion)
             >Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/Articulos" 
              className={({isActive}) => isActive ? "activado" : ""}
            >Articulos</NavLink>
          </li>
          <li>
          <NavLink to="/Contacto"
            className={({isActive}) => isActive ? "activado" : ""}
          >Contacto</NavLink>
          </li>
          <li>
          <NavLink to="/Persona"
            className={({isActive}) => isActive ? "activado" : ""}
          >Persona</NavLink>
          </li>  
        </ul>  
      </nav>

      <section className="contenido-principal">    

        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Inicio' element={<Inicio />} />
            <Route path='/Articulos' element={<Articulos />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/Persona/:nombre/:apellido' element={<Persona />} /> {/* /Estas url de aqui hacia abajo trabajan con parametros opcionales. Para eso debo duplicarlas y ir retirando los parámetros para que no me genere error asi: / */}
            <Route path='/Persona/:nombre/' element={<Persona />} />
            <Route path='/Persona/' element={<Persona />} />
            <Route path='/*' element={<Error />}/>       
        </Routes>

        </section>
        <hr />

        <footer>
          Pie de página
        </footer>
    </BrowserRouter>
  )
}
