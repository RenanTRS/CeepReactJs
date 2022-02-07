import React, {useContext} from "react";

import { NotasContext } from "../App";
import { CardNota } from "./CardNota";

import "../assets/listaDeNotas.css";

export function ListaDeNotas(){
  const {nota, setNota} = useContext(NotasContext);
  
  
  const deleteCard = (val) => {
    const newNote = [...nota];
    newNote.splice(val, 1);
    setNota(newNote);
  }

  return (
    <ul className="lista-notas">
      {nota.map((value, key)=>{
         return(
            <li className="lista-notas_item" key={key}>
              <CardNota task={value.task} text={value.text} number={key} categoria={value.categoria} deleteCard={deleteCard}/>
            </li>
        );
      })}
    </ul>
  );
}