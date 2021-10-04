import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map(categorias =>{
          return (
            <li>
              <div>{categorias}</div>
              <CardNota/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
