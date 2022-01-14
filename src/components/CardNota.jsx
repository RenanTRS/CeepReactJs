import React from "react";

import "../assets/cardNota.css";

export function CardNota({task, text}){
    return (
        <section className="card-nota">
            <header className="card-nota_cabecalho">
                <h3 className="card-nota_titulo">{task}</h3>
            </header>
            <p className="card-nota_texto">{text}</p>
        </section>
    );
}