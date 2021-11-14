import styled from "styled-components";
const Container = styled.div `
    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        
    }

    ::-webkit-scrollbar
    {
        width: 10px;
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb
    {
        background-color: #555;
    }

    .faixa-1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0em 5em;

        background-image: url('../../assets/images/fundo.png');
        
        
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 55em;
    }

    .texto {
        font-family: "Bebas Neue";
        color: white;
        font-size: 3.5em;
        max-width: 5em;
    }

    .box-img {
        display: flex;
        flex-direction: row;

        font: 2em "Bebas Neue";
        padding-top: 2em;
        justify-content: space-evenly;
    }

    .faixa-2 {
    font: 2em "Bebas Neue";
    margin-top: 80px;
    }

    .geral-masculino {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .img-masculino img {
    width: 1220px;
    height: 550px;
    }

    .desc-t {
    font-family: "Oswald", sans-serif;
    color: rgb(0, 0, 0);
    text-align: center;
    }

    .tenis {
    font-family: "Oswald", sans-serif;
    color: #343434;
    font-size: 19px;
    }

    .grandes-passos,
    .fam {
    font-size: 28px;
    font-weight: bolder;
    }

    .faixa-3 {
    font: 2em "Bebas Neue";
    margin-top: 130px;
    }

    .geral-feminino, .geral-infantil{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    }

    .feminino, .infantil{
    margin-bottom: 1em;
    }

    .desc-tf {
    font-family: "Oswald", sans-serif;
    color: rgb(0, 0, 0);
    text-align: center;
    }

    .img-feminino img, .img-infatil img{
    width: 90vw;
    height: 100%;
    }

    .preo,
    .sup {
    font-size: 28px;
    font-weight: bolder;
    }

    .preo {
    margin-top: 1em;  
    }

    .faixa-4, .faixa-infantil {
    font: 2em "Bebas Neue";
    margin-top: 130px;
    }

    .img-fut img {
    width: 90vw;
    height: 100%;
    }

    .geral-fut {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .fut {
    text-align: center;
    }

    .vis {
    font-family: "Bebas Neue";
    font-size: 28px;
    text-align: center;
    max-width: 50em;
    }

    .faixa-5 {
    padding: 5em;
    }

    .img-categ img {
        width: 3em;
        height: 3em;
    }

    .img-categ {
    opacity: 3;
    cursor: pointer;
    }

    .img-categ:hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.1);
    }

    .descricao {
    text-align: center;
    }

    .categorias {
    font: 3em "Bebas Neue";
    text-align: center;
    }

    .faixa-6 {
    padding: 3em;
    background-color: #343434;
    color: #ffffff;
    }

    .box-cartao {
    display: flex;
    flex-direction: row;
    }
    .box-cartao img {
    margin-top: 80px;
    margin-left: 10px;
    }

    .contato {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 70px;
    }

    .fale {
    font: 23px "Bebas Neue";
    letter-spacing: 1.5px;
    margin-top: -90px;
    }

    .email {
    font: 16px "Coda";
    }

    .redes {
    display: flex;
    flex-wrap: initial;
    }

    .opcoes,
    .redes {
    cursor: pointer;
    }

    
    @media (max-width: 767px) {



    .box-img, .rodape {

        flex-direction: column;
        align-items: center;

    }

    .box-img img {
        width: 3em;
        height: 3em;
        padding: 0.5em 0em;
    }

    .box-cartao > div {
        width: 4em;
        padding: 0em 0.5em;
    }

    .box-cartao img {
        width: 2.5em;
        height: 2.5em;
    }

    }

`

export { Container }