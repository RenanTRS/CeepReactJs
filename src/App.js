import React, {useState, createContext} from 'react';

import { FormularioCadastro } from './components/FormularioCadastro';
import { ListaDeNotas } from './components/ListaDeNotas';
import { ListaDeCategorias } from './components/ListaDeCategorias';

import './assets/index.css';
import "./assets/App.css";

export const NotasContext = createContext({});

function App (){

  const [nota, setNota] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const value = {
    nota,
    setNota,
    categorias,
    setCategorias
  } 
  return (
    <section className="conteudo">
      <NotasContext.Provider value={value}>
        <FormularioCadastro/>
        <main className="conteudo-principal">
          <ListaDeCategorias />
          <ListaDeNotas />
        </main>
      </NotasContext.Provider>
    </section>
  );
}

export default App;