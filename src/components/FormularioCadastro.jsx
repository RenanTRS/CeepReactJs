import React from "react";


import "../assets/formularioCadastro.css";


export function FormularioCadastro(){
    function handleMudancaTitulo(event){
        console.log(event.target.value);
    }
    return(
        <form className="form-cadastro">
            <input type="text" placeholder="Título" className="form-cadastro_input" onChange={handleMudancaTitulo} />
            <textarea rows={15} placeholder="Escreva sua nota..." className="form-cadastro_input"></textarea>
            <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
        </form>
    );
}

/*
class FormularioCadastro extends Component{
    constructor(){
        super();
        this.titulo = '';
    }

    handleMudancaTitulo(evento){
        this.titulo = evento.target.value;
        console.log(this.titulo);
    }
    
    render(){
        return (
            <form className="form-cadastro">
                <input type="text" placeholder="Título" className="form-cadastro_input" onChange={this.handleMudancaTitulo} />
                <textarea rows={15} placeholder="Escreva sua nota..." className="form-cadastro_input"></textarea>
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;
*/