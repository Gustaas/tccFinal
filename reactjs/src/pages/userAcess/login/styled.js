import styled from "styled-components";

const Container = styled.div`
    .conteudo-reg {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin-top: 45px;

    height: 80vh;
    font: 1.2em "Bebas Neue";
  }

  .box-reg {
    border: solid 1px black;
    box-shadow: 0px 2px 3px 0px #888;
    height: 24em;
    width: 17em;
    padding: 2em 3em;
  }

  .adm {
    padding: 2em;
  }

  .adm a{
    text-decoration: none;
    color: white;
  }

  .adm a:hover{
    text-decoration: underline;
  }


  .reg-titulo {
    text-align: center;

    font-size: 1.4em;
  }

  .reg-campos {
    padding: 1.8em 0em;
  }

  .reg-a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0em;
  }

  .a a{
      color: black;
      text-decoration: none;
  }

  .a a:hover{
    opacity: 0.6;
    transition: 0.4s;
    text-decoration: underline;
  }
  
  .reg-conta {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 1em;
  }

.reg-camposenha {
  margin-top: 4px;
  font: italic;
  font-size: 1em;
  background-color: white;
 
}

.reg-camposenha:hover {
  cursor: pointer;
  text-decoration: underline;
}


.reg-conta:hover {
  cursor: pointer;
  text-decoration: underline;
}

.registrar a{
  color: black;
}

.reg-camposenha a{
  text-decoration: none;
  color: black;
}

.reg-conta a{
  text-decoration: none;
}

.reg-a button:hover{
  opacity: 50%;
}

@media (max-width: 767px) {

  .box-reg {
    width: 12em;
    align-items: center;
    align-content: center;
    justify-content: center;
    border: none;
    box-shadow: none;
  }
}
`
export {Container}