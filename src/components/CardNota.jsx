import React from "react";

import "../assets/cardNota.css";

export function CardNota(){
    return (
        <section className="card-nota">
            <header className="card-nota_cabecalho">
                <h3 className="card-nota_titulo">Título</h3>
            </header>
            <p className="card-nota_texto">Seu texto aqui...</p>
        </section>
    );
}
/*
Forma antiga de fazer projetos react

class CardNota extends Component{
    render(){
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">Título</h3>
                </header>
                <p className="card-nota_texto">Seu texto aqui...</p>
            </section>
        );
    }
}

export default CardNota;
*/