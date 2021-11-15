import styled from 'styled-components'

export const Container = styled.div`

h1 {
    font: 2.5em "Bebas Neue";
    color: white;
}

* {
    box-sizing: border-box;
    font: 1em "Bebas Neue";
    color: white;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #343434;
}

.rodape {
    display: flex;
    flex-direction: row;
    align-content: center;
}

.row1, .row2, .row3 {
    align-items: center;
    align-content: center;
    padding: 2em;
}

.box-cartao img {
    width: 64px;
    height: 64px;
}

.row1  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.row2 > div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.row3 > div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.icones > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0em 1em;
}

.about-us a{
    cursor: pointer;
    text-decoration: none;
}

.about-us:hover {
    text-decoration: underline;
}

@media (max-width: 767px) {
    .box-cartao > div {
        align-items: center;
        flex-direction: row;
        width: 4em;
    }

    .box-cartao img {
        width: 32px;
        height: 32px;
    }

    .container, .rodape {
        flex-direction: column;
    }
}

`