import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .container {
    display: flex;
    flex-direction: column;
    align-content: space-evenly;
}

table {
    border: 1px solid #6CC3DF;
}
    
thead, .a {
background-color: #6CC3DF;
}

th{
text-align: center;
padding: 0em 2.5em;
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
font: 400 1.2em "Oswald";
border: 1px solid #6CC3DF;
}

.alternado {
text-align: center;
background-color: #f9f9f9;
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
font: 1.15em "Bebas Neue";
padding: 0em 2em;
outline: none;
text-decoration: none;
border: none;
cursor: pointer;
}

button:link {
text-decoration: none;
}
button:visited {
color: black;
}
`

export {Container}