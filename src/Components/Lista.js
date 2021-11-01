import {useContext} from 'react';
import {LibrosContext} from '../Context/LibrosContext';
import './Lista.css';

const Lista = () => {
  const {wishList, eliminar} = useContext(LibrosContext);
    return ( 
        <div className="containerTable">
            <div className="table">
            <h3>Lista de deseos</h3>
                {
                wishList.length===0   
                ? 
                <p>No tienes libros agregados aun</p>
                :
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
                      wishList.map((element,ind)=>{
                      return(<tr key={ind}>
                        <td>{element.codigo}</td>
                        <td>{element.titulo}</td>
                        <td>{element.idioma}</td>
                        <td>{<button className="rojo" onClick={()=>eliminar(element)}>Eliminar</button>}</td>
                        </tr>)

                      })
                }
                </tbody>
                </table>}
            </div>
        </div>
     );
}
 
export default Lista;