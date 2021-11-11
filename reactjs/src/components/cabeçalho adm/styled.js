import styled from 'styled-components'

const CabecalhoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: .5em;

  .logo:hover {
    cursor: pointer;
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

  .botao-login{
    font: 16px "Bebas Neue";
    margin-right: 2em;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: black;
  }

  .menu-botao button {
    color: #23272a;
    background-color: white;

    border: none;
    border-radius: 30px;

    padding: 10px 15px;

    outline: none;

    transition: 0.4s;
    cursor: pointer;
  }

  .menu-botao{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .menu-botao button:hover {
    color: #7289da;
    box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
  }
`

export { CabecalhoDiv };