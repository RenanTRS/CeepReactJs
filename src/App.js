import React from 'react';
import { Component } from 'react';
//import FormularioCadastro from './components/FormularioCadastro';
import { FormularioCadastro } from './components/FormularioCadastro';
//import ListaDeNotas from "./components/ListaDeNotas";
import { ListaDeNotas } from './components/ListaDeNotas';
import './assets/index.css';
import "./assets/App.css";

class App extends Component{
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro/>

        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
