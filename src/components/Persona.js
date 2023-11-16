import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {
    //Sin desestructuración. Y cuando lo llamamos en cualquier lado debemos llamarlo como parametros.nombre
    //const parametros = useParams();

    //Con la desestructuración podemos acceder al parámetro sin necesidad de hacer lo de arriba si no llamando de una al parámetro "nombre"
    let {nombre, apellido} = useParams();
    //Cuando en esta declaración le asigno valores asi: let {nombre="Pepito", apellido="Perez"} = useParams(); 
    //lo que le estoy diciendo es que en caso de que no lleguen valores en los parámetros asigne esos por default
    // O también podemos hacer las condiciones de si no tengo valor imprimo algo y si lo tengo imprimo la variable como hago a continuación:

    const navegar = useNavigate();

    const enviar = (e) =>{
      e.preventDefault();
      let nombre = e.target.nombre.value;
      let apellido = e.target.apellido.value;
      let url = `/persona/${nombre}/${apellido}`;

      if(nombre.length <=0 && apellido.length <= 0) 
      {
        navegar("/inicio")
      }else if(nombre === "contacto"){
        navegar("/contacto")
      }      
      else{
        navegar(url); 
      }
            
    }
  
    return (
    <div>        
        {!nombre && <h1>No hay nombres para mostrar</h1>}
        { nombre && <h1>Esta es la página Persona: {nombre} {apellido}</h1>}
        <p>Ejemplo página persona</p>

        <form onSubmit={enviar}>
          <input type="text" name='nombre' />
          <input type="text" name='apellido' />
          <input type="submit" name='enviar' value="enviar" />
        </form>
    </div>
  )
}
