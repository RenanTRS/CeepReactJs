import React, {useContext} from 'react';
import { NotasContext } from '../App';

export const ListaDeCategorias = () => {
    const {categorias, setCategorias} = useContext(NotasContext);

    const handleEventoInput = (event) => {
        if(event.key === 'Enter'){
            console.log('Adicionar categoria')
            setCategorias([...categorias, event.target.value]);
        }
    }
    return (
        <section className='lista-categorias'>
            <ul className='lista-categorias_lista'>
                {categorias.map((categoria, key)=>{
                    return(
                        <li className='lista-categorias_item' key={key}>{categoria}</li>
                    );
                })}
            </ul>
            <input type="text" className='lista-categorias_input' placeholder='Adicionar Categoria' onKeyUp={handleEventoInput} />
        </section>
    );
}