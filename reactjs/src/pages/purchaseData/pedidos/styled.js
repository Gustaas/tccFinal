import styled from "styled-components";

const Container = styled.div`

* {
    box-sizing: border-box;
}

body {
    margin: 0;
}

h1 {
    font: 1.5em "Bebas Neue";
}

span {
    font: 1.2em "Oswald";
    font-weight: 400;
    padding: 0.1em;
}

option {
    font: 0.5em "Oswald" 200;
}



.container-pedido {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.titulo-pagina {
    text-align: center;
    font: 2em "Bebas Neue"
}

.container-devolucao, .box-container-pedido
{
    padding-left: 5em;
}

.box-container-pedido {
    display: flex;
    flex-direction: row;
}

.conteudos-align {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.boxpedidogeral {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.box-pedido, .box-pedido-1, .box-pedido-2 {
    display: flex;
    flex-direction: row;

    padding: 1em 2em;
    margin: 2em;

    border: 1px solid white;
    border-radius: 5px;
    box-shadow: 0px 2px 3px 0px #888;;
}

.pedido-desc span, .pedido-desc-2 span {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.pedido-desc-2 {
    display: flex;
    flex-direction: column;
}

.desc {
    display: flex;
    flex-direction: row;
}

.n-pedido, .dt-compra, .cor, .tamanho {
    display: flex;
    flex-direction: row;
    align-items: center;
    font: 1em "Oswald";
    font-weight: 200;
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

.status {
    background-color: #5EC5FF;

    border-radius: 5px;

    padding: 0.25em 0.5em;

    font: 1.2em "Bebas Neue";
    font-size: bold;
}

.s-p {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1em;
}

.preco {
    display: flex;
    flex-direction: row;
    font: 1.2em "Bebas Neue";
    margin-left: 10em;
}
.preco, .status {
    font: 1.1em "Bebas Neue";
    font-weight: bolder;
}

.box-dev-1, .box-dev-2{
        display: flex;
        flex-direction: column;

        padding: 0.8em 2em;
        margin: 2em;

        border: 1px solid white;
        border-radius: 5px;
        box-shadow: 0px 2px 3px 0px #888;;

        background-color: #f5f5f5;
}

.box-dev-1 span, .box-dev-2 span {
    display: flex;
    flex-direction: column;
}

.titulo {
    text-align: center;
    font-size: 1em;
}
.motivo {
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: 0.5em;

    font: 1em "Oswald";
    font-weight: 400;
}


.botao {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em;
}
button {
    text-align: center;
    align-items: center;
}

.botao button {
    background-color: #5EC5FF;
    font: 1.2em "Bebas Neue";

    padding: 0em 2.5em;
    
    border-radius: 5px;
    border: none;

    cursor: pointer;
    transition-duration: 0.5s;
    text-decoration: none;

}

.botao button:hover {
    cursor: pointer;
  background-color: #577CF5;
  color: #EEF2F2;
}

.pedido-imagem img {
    height: 180px;
}





@media (max-width: 767px) {

    * {
        font-size: 1em;
    }
.box-container-pedio > div {
    flex-direction: column;
}

.box-pedido, .box-pedido-1, .box-pedido-2 {
    flex-direction: column;
}

.container-pedido, .s-p {
    flex-direction: column;
    align-items: center;
    width: 12em;
    height: 4em;
}

.preco {
    display: none;
}

}
`
export{Container}