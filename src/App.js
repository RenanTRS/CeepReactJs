import React, {useState, createContext} from 'react';
//import { Component } from 'react';
//import FormularioCadastro from './components/FormularioCadastro';
import { FormularioCadastro } from './components/FormularioCadastro';
//import ListaDeNotas from "./components/ListaDeNotas";
import { ListaDeNotas } from './components/ListaDeNotas';
import './assets/index.css';
import "./assets/App.css";

export const NotasContext = createContext({});
function App (){

  const [nota, setNota] = useState([]);
  const value = {
    nota,
    setNota
  } 
    return (
      <section className="conteudo">
        <NotasContext.Provider value={value}>
          <FormularioCadastro/>
          <ListaDeNotas/>
        </NotasContext.Provider>
      </section>
    );
}

export default App;
