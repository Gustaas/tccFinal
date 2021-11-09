import styled from 'styled-components';

export const Container = styled.div`
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
    height: 19.5em;
    width: 24em;
    padding: 2em 3.2em;
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

  .reg-conta a{
      text-decoration: none;
  }

}
`