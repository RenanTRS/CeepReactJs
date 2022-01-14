import React, {useContext} from "react";
import { NotasContext } from "../App";
import { CardNota } from "./CardNota";

import "../assets/listaDeNotas.css";


export function ListaDeNotas(){
  const {nota} = useContext(NotasContext);

  return (
    <ul className="lista-notas">
      {nota.map((value, key)=>{
         return(
            <li className="lista-notas_item" key={key}>
              <CardNota task={value.task} text={value.text}/>
            </li>
        );
      })}

    </ul>
  );
}