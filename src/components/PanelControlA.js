import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControlA = () => {
  return (
    <div>
        <h1>Panel de Control</h1>
        <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li>
                    {/* <a href='/panel/inicio'>Inicio</a> */}
                    <NavLink to="/panel/inicio" 
                    className={({isActive}) => isActive ? "activado" : ""}
                    //console.log(datosNavegacion)
                    >Inicio</NavLink>
                </li>
                <li>
                {/* <a href='/panel/crear'>Crear de</a> */}
                    <NavLink to="/panel/crear" 
                    className={({isActive}) => isActive ? "activado" : ""}
                    >Crear Articulos</NavLink>
                </li>
                <li>
                {/* <a href='/panel/gestion'>Gestión de</a> */}
                    <NavLink to="/panel/gestion"
                        className={({isActive}) => isActive ? "activado" : ""}
                    >Gestión usuarios</NavLink>
                </li>
                <li>
                {/* <a href='/panel/acerca'>Acera de</a> */}
                    <NavLink to="/panel/acerca"
                        className={({isActive}) => isActive ? "activado" : ""}
                    >Acera de</NavLink>
                </li> 
            </ul>
        </nav>
        <div>
            {/* Cargar los componentes de la carpeta panel dentro de componentes (rutas anidadas)*/}
            <Outlet />
        </div>
    </div>
  )
}