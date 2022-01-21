import React from 'react';

export const ListaDeCategorias = () => {
    const handleEventoInput = (event) => {
        if(event.key === 'Enter'){
            console.log('Adicionar categoria')
        }
    }
    return (
        <section className='lista-categorias'>
            <ul className='lista-categorias_lista'>
                <li className='lista-categorias_item'>Categorias</li>
                <li className='lista-categorias_item'>Categorias</li>
                <li className='lista-categorias_item'>Categorias</li>
                <li className='lista-categorias_item'>Categorias</li>
            </ul>
            <input type="text" className='lista-categorias_input' placeholder='Adicionar Categoria' onKeyUp={handleEventoInput} />
        </section>
    );
}