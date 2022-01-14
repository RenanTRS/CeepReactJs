import React, {useContext, useState} from "react";
import { NotasContext } from "../App";

import "../assets/formularioCadastro.css";


export function FormularioCadastro(){
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    
    function handleMudancaTitulo(event){
        const {value} = event.target;
        setTitulo(value)
    }
    function handleMudancaTexto(event){
        const {value} = event.target;
        setTexto(value);
    }
    const {nota, setNota} = useContext(NotasContext);
    
    function criarNota(event){
        event.preventDefault();

        if(event.target.name === 'titulo'){
            setTitulo(event.target.value);
        } else {
            setTexto(event.target.value);
        }

        const task = {task: titulo, text: texto};
        
        setNota([...nota, task]);
        setTitulo('');
        setTexto('');
    }
    return(
        <form className="form-cadastro" onSubmit={criarNota}>
            <input type="text" name="titulo" placeholder="Título" className="form-cadastro_input" value={titulo} onChange={handleMudancaTitulo} />
            <textarea rows={15} name="texto" placeholder="Escreva sua nota..." className="form-cadastro_input"
            value={texto} onChange={handleMudancaTexto}></textarea>
            <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
        </form>
    );
}