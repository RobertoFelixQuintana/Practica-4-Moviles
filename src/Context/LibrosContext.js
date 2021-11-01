import React, {createContext, useState} from 'react';

export const LibrosContext = createContext();

const LibreriaProvider = (props)=>{
  const [wishList,setWishList]= useState([]);
  const [catalogo,setCatalogo]= useState([
    {codigo:1,titulo:"Programación", idioma:'ESP', desactivado:false},
    {codigo:2,titulo:"Aprende Python", idioma:'ESP',desactivado:false},     
    {codigo:3,titulo:"Precálculo", idioma:'ESP',desactivado:false},
    {codigo:4,titulo:"Ingenieria De Software", idioma:'ESP',desactivado:false}
  ]); 

  const  agregar=(libro)=>{
      let temporal= catalogo;
      let index= temporal.findIndex((element)=>element.codigo===libro.codigo);
      temporal[index].desactivado=true;
      let temporalOrdenar =[...wishList,libro];
      temporalOrdenar= temporalOrdenar.sort((a,b)=>a.codigo-b.codigo)
      setCatalogo(temporal); 
      setWishList(temporalOrdenar);   
    }
      
  const  eliminar=(libro)=>{
      let temporal= catalogo;    
      let index= temporal.findIndex((element)=>element.codigo===libro.codigo);
      temporal[index].desactivado=false;
      let temporalEliminar= wishList.filter(c=>c.codigo!==libro.codigo)
      setCatalogo(temporal);
      setWishList(temporalEliminar);
    }  

    return(
        <LibrosContext.Provider
            value={{
                catalogo,
                wishList,
                eliminar,
                agregar
            }}>
            {props.children}
        </LibrosContext.Provider>
    );
}

export default LibreriaProvider;