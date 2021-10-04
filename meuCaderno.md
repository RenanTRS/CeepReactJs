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
