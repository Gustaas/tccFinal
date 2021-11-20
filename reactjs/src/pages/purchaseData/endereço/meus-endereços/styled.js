import styled from "styled-components";

const Container = styled.div`

.box-p-b {
    display: flex;
    flex-direction: row;
    margin: 1em;
}

.box-p-b > div {
padding: 1em;
}

.titulo-pagina {
    font: 2.5em "Bebas Neue";
    padding: 0em 2em;
    text-align: center;
}

.endereço > div {
padding: 0.5em;
font: 1.5em "Bebas Neue"; 
}


.infos > div {
padding: 0.3em;
}

.opcao {
    margin-top: 0.5em;
    align-items: center;
    align-content: center;
}

.a {
    display: flex;
    flex-direction: row;
  
    width: 50em;
  
    justify-content: space-evenly;
  
    padding-top: 0.5em;
  }

  .cidade, .destinatario {
    font: 400 1em "Oswald";
  }
  .container-endereço {
    display: flex;
    flex-direction: column;

    border-radius: 5px;

    align-content: center;
}

.infos > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
}

.box-endereço {
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;

    justify-items: center;
    align-items: center;
    align-content: center;

    padding: 1em 1.25em;
    margin: 1em;

    border: 1px solid white;
    border-radius: 5px;
    box-shadow: 0px 2px 3px 0px #888;;
}

.endereço {
    flex-direction: column;
    margin: 0.5em;
    padding: 0em 1em;
}

.add {
    flex-direction: row;
    padding: 0.5em 2em;
}

button {
    background-color: #5EC5FF;
    font: 1.2em "Bebas Neue";

    text-align: center;
    padding: 0em 2.5em;
    
    border-radius: 5px;
    border: none;

    cursor: pointer;
    transition-duration: 0.5s;
    text-decoration: none;

    align-content: flex-end;
}

button:hover {
    background-color: #5EC5FF;
    opacity: 0.6;
    color: black;
    text-decoration: none;
}

.box-pedido {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;

  justify-items: center;

  padding: 2.5em;

  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0px 2px 3px 0px #888;;
}

.pedido-desc, .desc, .c-t {
  display: flex;
  flex-direction: column;

  align-items: center;
}

.info h1 {
  text-align: center;
  font-size: 1em;
}

.f-p, .total {
  padding: 1em 0em;
  font: 1.2em "Oswald";
}

.f-p span {
  font: 1.2em "Bebas Neue";
  padding-left: 3em;
}

.frete span {
  padding-left: 8.5em;
}

.total span {
  padding-left: 5em;
  font: 1.2em "Bebas Neue";
}

.titulo-produto {
  font: 1.2em "Bebas Neue";
}

.cor, .tamanho {
  font: 1em "Oswald";
  font-weight: 400;
}

.cor span, .tamanho span {
  font: 1em "Oswald";
  font-weight: 200;
}

.botao {
  display: flex;
  flex-direction: column;
}

.botao button {
  display: flex;
  flex-direction: column;
}

.botao button {
  background-color: #5EC5FF;
  font: 1.2em "Bebas Neue";

  text-align: center;
  padding: .3em 3em;
  
  border-radius: 5px;
  border: none;

  cursor: pointer;
  transition-duration: 0.5s;
  text-decoration: none;
}

.botao button:hover {
  background-color: #5EC5FF;
  opacity: 0.6;
  color: black;
}

button:visited {
  text-decoration: none;
}

@media (max-width: 767px) {

  * {
    font-size: 1em;
  }
  .box-p-b, .box-container, .box-endereço, .endereço {
    width: 13em;
  }
}
`

export {Container}