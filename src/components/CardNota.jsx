import React from "react";

import "../assets/cardNota.css";
import DeleteImg from '../assets/img/delete.svg';

export function CardNota({task, text}){
    return (
        <section className="card-nota">
            <header className="card-nota_cabecalho">
                <h3 className="card-nota_titulo">{task}</h3>
                <img src={DeleteImg} alt="Delete" />
            </header>
            <p className="card-nota_texto">{text}</p>
        </section>
    );
}