import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;

.conteudo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
}

.resumo {
    font-family: "Bebas Neue";
    font-size: .9em;
}



.tamanho {
    font-family: "Bebas Neue";
}

.subtotal span {
    margin-left: 7em;
}

.desconto span {
    margin-left: 10.5em;
}

.total span {
    margin-left: 9em;
}

.finalizar button {
    margin: 1em;
    padding: 0.1em;
    width: 15em;
    background-color: #5EC5FF;
    border: none;
    outline: none;
    font: 1.2em "Bebas Neue";
}

.finalizar button:hover {
    cursor: pointer;
    opacity: 50%;
}

.continuar button {
    margin: 1em;
    padding: 0.1em;
    width: 15em;
    background-color: #C4C4C4;
    border: none;
    outline: none;
    font: 1.2em "Bebas Neue";
}

.continuar button:hover {
    cursor: pointer;
    opacity: 50%;
}


.resumo {
    margin: 0em 5em;
}

.resumo > div {
    padding: 1em;
    margin-left: -3em;
}

.conteudo > div {
    padding: 0em 2em;
}

.titulo{
    padding: 1em;
    text-align: center;
    font-family: "Bebas Neue";
    font-size: 2em;
}

.subtotal, .desc, .total, .desconto {
    font: 400 1.25em "Bebas Neue";
}

.info {
    font: 1.2em "Oswald";
}

.info span {
    font: 800 1em "Oswald";
}

.vl-preco {
    font: 1em "Bebas Neue";
}

.frete h1 {
    font: 1.2em "Bebas Neue";
}

.frete button {
    margin: 1em;
    padding: 0.1em;
    width: 10em;
    background-color: #5EC5FF;
    border: none;
    outline: none;
    font: 1.2em "Bebas Neue";
}

.frete input {
    width: 15em;
    padding: 0.5em;
    background-color: #C4C4C4;
    border: none;
    outline: none;
}

.desc {
    display: flex;
    flex-direction: row;
}


.info {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
}

.info-row > div{
    display: flex;
    flex-direction: row;
}
.pedido-imagem {
    display: flex;
    flex-direction: row;
}

.pedido-imagem img {
    height: 180px;
}

.conteudo2 {
    margin-top: 5em;
    margin-left: 21.5em;
}
`