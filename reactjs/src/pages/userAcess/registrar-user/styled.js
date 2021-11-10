import styled from "styled-components";

const Container = styled.div`

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

    height: 80vh;
    font: 1.2em "Bebas Neue";
  }

  .box-reg {
    border: solid 1px black;
    box-shadow: 0px 2px 3px 0px #888;
    height: 33em;
    width: 23em;
    padding: 2em 3.2em;
  }

  .reg-titulo {
    text-align: center;

    font-size: 1.4em;
    margin-bottom: 1em;
  }

  .reg-campos {
    padding: .3em 0em;
  }

  .reg-a {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1em;
  }

  .reg-a:hover{
    cursor: pointer;
    text-decoration: underline;
  }

  .reg-a a {
      text-align: center;
      align-items: center;

      padding: .3em 5em;

      font: 1em "Bebas Neue";
      background-color: #5EC5FF;

      border: none;
      border-radius: 4px;
  }

  .reg-a a:hover{
    opacity: 0.6;
    transition: 0.4s;
  }
  
  .reg-conta {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 1em;
  }

  .reg-conta:hover {
    cursor: pointer;
    text-decoration: underline;
  }

`
export {Container}