import React from 'react';
import {useContext} from 'react';
import {LibrosContext} from '../Context/LibrosContext';
import './Libros.css';

 function Libros () {
        const {catalogo, agregar} = useContext(LibrosContext);
        return (
            <div className="containerTable">
                <div className="table">
                <h3>Libros disponibles</h3>
                {
                    <table>
                    <thead>
                      <tr>
                        <th>Codigo</th>
                        <th>Titulo</th>
                        <th>Idioma</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        catalogo.map((element,ind)=>{
                        return(<tr key={ind}>
                          <td>{element.codigo}</td>
                          <td>{element.titulo}</td>
                          <td>{element.idioma}</td>
                          <td>{<button className="verde" disabled={element.desactivado} onClick={()=>agregar(element)}>Agregar</button>}</td>
                          </tr>)
                        })
                      }
                    </tbody>
                    </table>    
                }
                </div>
            </div>
        )
}

export default Libros;