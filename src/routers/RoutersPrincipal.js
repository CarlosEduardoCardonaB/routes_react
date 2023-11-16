import React from 'react'
import { Route, Routes, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Persona } from '../components/Persona';
import { Error } from '../components/Error';
import { PanelControlA } from '../components/PanelControlA';
import { Iniciode } from '../components/Panel/Iniciode';
import { Acercade } from '../components/Panel/Acercade';
import { Crearde } from '../components/Panel/Crearde';
import { Gestionde } from '../components/Panel/Gestionde';


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
          <li>
          <NavLink to="/Redirigir"
            className={({isActive}) => isActive ? "activado" : ""}
          >Redirigir con Navigate</NavLink>
          </li> 
          <li>
          <NavLink to="/panel"
            className={({isActive}) => isActive ? "activado" : ""}
          >Panel de control</NavLink>
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
            <Route path='/Redirigir/' element={<Navigate to="/persona/carlos/cardona" />} />              
            <Route path='/panel/' element={<PanelControlA />}>
                {/* estas subrutas se van a cargar en el PanelControlA.js en el <Outlet />*/}
                <Route index element={<Iniciode />}/>
                <Route path='inicio' element={<Iniciode />}/>
                <Route path='acerca' element={<Acercade />}/>
                <Route path='crear' element={<Crearde />}/>
                <Route path='gestion' element={<Gestionde />}/>
            </Route>       
        </Routes>

        </section>
        <hr />

        <footer>
          Pie de página
        </footer>
    </BrowserRouter>
  )
}
