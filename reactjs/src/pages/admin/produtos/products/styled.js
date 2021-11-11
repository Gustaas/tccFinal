import styled from 'styled-components';

export const Container = styled.div`

* {
    box-sizing: border-box;
    font: "Bebas Neue";
}

table {
    border: 1px solid #6CC3DF;
}

thead, .a {

        background-color: #6CC3DF;
}

th{
        text-align: center;
        padding: 0em 4em;
        height:  61px;
        align-content: center;
        justify-items: center;
        align-items: center;
        font: 1.3em "Bebas Neue";
}

td {
        text-align: center;
        height:  61px;
        align-content: center;
        justify-items: center;
        align-items: center;
        font: 1.2em "Bebas Neue";
        border: 1px solid #6CC3DF;
}

.conteudo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.alternado {
    text-align: center;
    background-color: #f9f9f9;
}

input::-webkit-input-placeholder {
    text-align: right;
}

.a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5em;
  }

button, input {
    text-decoration: none;
    border-radius: 20px;
    background-color: white;
    font: 1em "Bebas Neue";
    padding: 0em 2em;
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    width: 15em;
}

button:link {
    text-decoration: none;
}
button:visited {
    color: black;
}
`