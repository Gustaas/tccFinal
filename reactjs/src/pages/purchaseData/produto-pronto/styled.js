import styled from "styled-components";

const Container = styled.div`

.conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 89vh;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    font: 2em 'Bebas Neue';
    padding: 3em 1em;
}

.box Button{
    margin: 1em;
    padding: 0.5em 3em;
    width: 15em;

}

.box button:hover{
  opacity: 50%;
}
`
export{Container}