import styled from 'styled-components';

const Container = styled.div`

body {
    margin: 0%;
}

* {
    box-sizing: border-box;
}

hr {
    width: 210%;
    color: #a9a9a9;
}

button {
    background-color: #f5f5f5;
    border: none;
}

button:hover {
    cursor: pointer;
}

.hr2 {
    width: 100%;
}

.titulo-pagina {
    font: 2.5em "Bebas Neue";
    padding: 0em 1em;
    text-align: center;
}

.preco {
    padding-left: 6em;
}

.total2 {
    padding-left: 8em;
}

.frete2 {
    padding-left: 11.5em;
}

.box-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.container-pagamento {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;

    padding: 1.5em 25em 2em 2em;
    margin: 1.5em 1.5em 1.5em 3em;

    border: 1px solid white;
    border-radius: 5px;
    box-shadow: 0px 2px 3px 0px #888;;

    justify-content: center;
}

.Cartão > div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

input {
    align-items: center;
}


.box-pedido {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;

    justify-items: center;

    padding: 2em;
    margin: 2em;

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

.f-p span, .total span {
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

.botao button {
    background-color: #5EC5FF;
    font: 1.2em "Bebas Neue";

    text-align: center;
    padding: 0em 2.5em;
    
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

.imagem img {
    width: 64px;
    height: 64px;

    justify-content: center;
    justify-items: center;
    align-items: center;

    padding: 0.3em;
}

.imagem {
    margin: 0.5em;
    font: 1.5em "Bebas Neue";
}

.box-pagamento {
    margin: 1em;
}
`

export {Container}