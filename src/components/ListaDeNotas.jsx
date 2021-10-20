import React from "react";
import { CardNota } from "./CardNota";

import "../assets/listaDeNotas.css";


export function ListaDeNotas(){
  return (
    <ul className="lista-notas">
      {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index)=>{
        return (
          <li className="lista-notas_item" key={index}>
            <CardNota />
          </li>
        );
      })}

    </ul>
  );
}


/*
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) =>{
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
*/