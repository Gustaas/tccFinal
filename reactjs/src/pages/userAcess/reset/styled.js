import styled from 'styled-components';

export const Container = styled.div`

* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0px;
  }

  .cabecalho {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  
    padding: .5em;
  }
  
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 20em;
  }
  
  .menu-item {
    font: 16px "Bebas Neue";
  }
  
  .menu-item:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .logo:hover {
      cursor: pointer;
      border-radius: 30px;
      transition: 0.4s;
      color: #7289da;
      box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
  }

  a,
  a:link,
  a:visited {
  text-decoration: none;
  color: black;
  }

  input {
    border: solid 1px black;
    width: 100%;
    padding: .7em 1em;

    font: 400 .8em "Oswald";
    outline: none
  }

  .menu-botao button {
    color: #23272a;
    background-color: white;
  
    border: none;
    border-radius: 30px;
  
    padding: 10px 15px;
  
    outline: none;
  }
  
  .menu-botao button {
    transition: 0.4s;
    cursor: pointer;
  }

  .menu-botao button:hover {
    color: #7289da;
    box-shadow: 0 10px 15px rgb(0 0 0 / 30%);
  }

  .conteudo-reg {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    align-content: center;

    height: 50vh;
    font: 1.2em "Bebas Neue";
  }

  .box-reg {
    align-items: center;
    align-content: center;
    height: 19.5em;
    width: 24em;
    padding: 2em 3.2em;
  }

  .logosite{
    margin: 2em;
    padding: 2.5em;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .cod-rec {
    text-align: center;

    font-size: 1.75em;
  }

  

  .reg-campos {
    padding: 1.8em 0em;
  }

  .reg-a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
  }

  .reg-a a:hover{
    opacity: 0.6;
    transition: 0.4s;
  }
  
  .reg-conta {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    
    padding: 1em;
  }

  .reg-conta {
    text-decoration: none;
    color: black;
    text-align: center;

    font: "Bebas Neue";
    background-color: #5EC5FF;

    border: none;
    border-radius: 15px;

    cursor: pointer;
    transition-duration: 0.5s;
  }


  .reg-conta a{
    text-decoration: none;
  }

  .reg-conta:hover {
    cursor: pointer;
    text-decoration: underline;
  }

`