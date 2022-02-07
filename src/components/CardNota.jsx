import React from "react";

import "../assets/cardNota.css";
import {ReactComponent as DeleteImg} from '../assets/img/delete.svg';

export function CardNota({task, text, number, deleteCard, categoria}){
    return (
        <section className="card-nota">
            <header className="card-nota_cabecalho">
                <h3 className="card-nota_titulo">{task}</h3>
                <DeleteImg onClick={()=> deleteCard(number)} />
                <h4>{categoria}</h4>
            </header>
            <p className="card-nota_texto">{text}</p>
        </section>
    );
}