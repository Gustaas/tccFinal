import styled from 'styled-components';

export const Container = styled.div`

.conteudo-reg {
    display: flex;
    flex-direction: column;

    align-items: center;
    align-content: center;
    justify-content: center;

    height: 80vh;
    font: 1.2em "Bebas Neue";
  }

  .conteudo-reg img {
    padding: 1.5em;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  .box-reg {
    height: 19.5em;
    width: 24em;
    padding: 5em 3.2em;
  }

  .reg-titulo {
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
    text-decoration: underline;
    
    padding: 1em;
  }

  button {
    text-decoration: none;
  }

  .reg-conta button{
    text-decoration: none;
    color: black;
    text-align: center;
    align-items: center;

    padding: .6em 5em;

    font: 1.2em "Bebas Neue";
    background-color: #5EC5FF;

    border: none;
    border-radius: 15px;

    cursor: pointer;
    transition-duration: 0.5s;

    width: 100%;
  }

  .reg-campos-input input {
    border-radius: 15px;
  }

`