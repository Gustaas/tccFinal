import styled from 'styled-components';

const Container = styled.div`

    .desc {
        display: flex;
        flex-direction: row;
        margin: .5em 0em;

        width: 100%;
        justify-content: center;
        align-items: center;
        font: 400 1.25em "Bebas Neue";
    }

    .vl_preco {
        font: 1em "Bebas Neue";
    }

    .remover {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .pedido-imagem img {
        width: 6em;
    }

    .info {
        font: .8em "Oswald";
        width: 20em;
    }

    .contador {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export { Container }