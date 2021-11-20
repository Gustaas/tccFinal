import Cabecalho from '../../components/cabecalho/index.js';
import { Container } from './styled';
import Rodapé from '../../components/footer/index';
import Faixa1 from './faixas/faixa1/faixa1.js';
import Faixa2 from './faixas/faixa2/index.js';
import Faixa3 from './faixas/faixa3/index.js';
import Faixa4 from './faixas/faixaInfantil/index.js';
import Faixa5 from './faixas/faixa5/index.js';

export default function Home () {
    return (
    <Container>
        <Cabecalho/>
        <Faixa1/>

        <Faixa2/>

        <Faixa3/>

        

        <Faixa4/>

        <Faixa5/>

        <Rodapé/>
    </Container>
    )
}