import styled from 'styled-components';

const Container = styled.div`

    .desc {
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;
        font: 400 1.25em "Bebas Neue";
    }

    .vl_preco {
        font: 1em "Bebas Neue";
    }

    .remover {
        align-self: flex-end;
    }
    
    .remover img {
        width: 2em;
    }

    .info {
        font: 1.2em "Oswald";
    }

    .contador {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export { Container }