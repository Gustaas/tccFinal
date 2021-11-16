import styled from "styled-components";

const Container = styled.div`
  input {
    border: solid 1px black;
    width: 100%;
    padding: 0.7em 1em;

    font: 400 0.8em "Oswald";
    outline: none;
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

    height: 90vh;
    font: 1.2em "Bebas Neue";
  }

  .box-reg {
    border: solid 1px black;
    box-shadow: 0px 2px 3px 0px #888;
    height: 33em;
    width: 23em;
    padding: 1em 4.5em;
    margin-top: 5em;
  }

  .reg-titulo {
    text-align: center;

    font-size: 1.4em;
    margin-bottom: 1em;
  }

  .reg-campos {
    padding: 0.3em 0em;
  }

  .reg-a {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1em;
  }

  .reg-a:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .reg-a a {
    text-align: center;
    align-items: center;

    padding: 0.3em 5em;

    font: 1em "Bebas Neue";
    background-color: #5ec5ff;

    border: none;
    border-radius: 4px;
  }

  .reg-a a:hover {
    opacity: 0.6;
    transition: 0.4s;
  }

  .reg-conta {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1em;
  }

  .reg-conta a{
    color: black;
    text-decoration: none;
  }

  .reg-conta:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    .box-reg {
    border: none;
    box-shadow: none;
    width: 13em;
    margin-top: 5em;

    align-items: center;
  }

  .box-reg > div {
    align-items: center;
    align-content: center;
  }

  .reg-a {
    width: 15em;
    height: 4em;
    font-size: 0.75em;
    text-align: center;
  }
  }
  
`;
export { Container };
