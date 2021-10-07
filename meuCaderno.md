# Aula 01 - Criando o projeto
## Criando o projeto:
- Necessário o **npm**;  
- Para iniciar um projeto com React é necessário usar o **npx**:  
```npx create-react-app nomeApp```
- Para rodar o projeto:  
```npm start```
## Limpando o projeto:  
- Limpa arquivos desnecessários para o projeto ficando somente: App.js, index.js, index.css;  

# Aula02 - Componetizando o sistema
## Criando componentes:  
- É importante colocar "/" no fim da tag input;  
```<input type="text"/>```  
- O react não compila tags irmãs, então deve-se colocar os elementos todos dentro de uma tag pai;  
- **Criando components:**  
- Components -> folder  
- nomeComponent.jsx -> file  
- **.jsx** Especifica que é um componente do react;  
- no ListaDeNotas.jsx:  
```
import React, {Componet} from "react"

export class ListaDeNotas extends Component{
		render(){
			return (
				<ul>
					<li>
						<section>
							<h3>Texto</h3>
						</section>
					</li>
				</ul>
			);
		}
}
```
- no App.js:  
```
import {ListaDeNotas} from "./components/ListaDeNotas"  
<form>
</form>
<ListaDeNotas/>
```
- O componente será renderizado em ```<ListaDeNotas/>```;  
## Praticando e utilizando plugins:  
- Separa o projeto em componentes;

## Integrando o JS:  
- ```{}``` Serve para colocar um código js no .jsx;  
```
render(){
	return(
		{console.log('Hello World')}
	);
}
```
- **Loop no React:**  
- Uma função for não funciona no React, precisa-se passar uma array e varrêlo com funções;  
- **Array.of()** Método que cria um array;  
```
{Array.of("Trabalho", "Trabalho", "Estudos")
}
```
- **.map()** Função que modifica Arrays;  
```
return (
	<ul>
		{Array.of("Trabalho", "Trabalho", "Estudos").map((item)=>{
			return (
				<li>
					<div>{item}</div>
					<CardNota/>
				</li>
			);
		})}
	</ul>
);
```

# Aula03 - Estilizando componentes
## Estilizando Componentes:  
- **Key** Sempre que se renderiza um loop no react ele necessita de uma key no elemento para caso haja uma alteração posterior neste elemento específico, apenas ele será reenderizado; (funciona sem, mas o console acusa erro)  
```
<li key={index}> // Index veio do map(), key não aparece no elements devTool
	<CardNota/>
</li>
```
- **class** Devido a declaração de uma classe também se chamar class, no react quando queremos colocar uma classe em um elemento chamamos de ```className```;  
```
<section className="card-nota"> //No devTools continua class
```
- Para importar um arquivo css usa-se o ```import```;  
```
import "./estilo.css"
```
## Conflito de nomes:
- Uma classe criada se torna pública pois todos os arquivos serão renderizados em um só;  
- Segundo o professor é interessante sempre começar a classe com o nome do componente e depois o que ela significa:  
```
.card-nota_texto{
}
```

## Organizando o projeto:  
- Para evitar que na importação duplique o nome do componente, o professor colocar em cada pasta um index.js que exporta o componente;  
- REINICIE O SERVIDOR! se não não irá funcionar.  
