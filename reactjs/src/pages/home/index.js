import Cabecalho from '../../components/cabecalho/index.js';
import { Link } from 'react-router-dom';
import { Container } from './styled';
import Rodapé from '../../components/footer/index';
import Cookies from 'js-cookie';
import Faixa1 from './faixas/faixa1/faixa1.js';
import Faixa2 from './faixas/faixa2/index.js';

export default function Home () {
    return (
    <Container>
        <Cabecalho/>
        <Faixa1/>

        <Faixa2/>

        <div class="faixa-3">
            <div class="geral-feminino">
                <div class="feminino">Feminino</div>
                <div class="img-feminino">
                    <div class="img-fut">
                        <Link to='produtos/femininos'>
                            <img src="./assets/images/woman.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div class="desc-tf">
                    <div class="preo">NÃO SE PREOCUPE COM O CANSAÇO, NÓS TE DAMOS</div>
                    <div class="sup">O MÁXIMO APOIO COM ISSO.</div>
                </div>
            </div>
        </div>

        <div class="faixa-4">
            <div class="geral-fut">
            <div class="fut">Todos os produtos</div>
            <div class="img-fut">
                <Link to='/produtos/todos'>
                    <img src="./assets/images/barca.svg" alt="" />
                </Link>
                </div>
            <div class="desc-fut">
                <div class="vis">
                VISTA-SE PARA ANDAR COM O MAIOR ESTILO NAS RUAS DE TODO MUNDO.
                </div>
            </div>
            </div>
            
        </div>
        <div class="faixa-5">
            <div class="categorias">Escolha seu time do coração.</div>
                <div class="box-img">
                    <div class="img-categ">
                        <Link to='/saopaulo'>
                            <img src="./assets/images/sp.png" alt=""/>
                        </Link>


                    </div>
                <div class="img-categ">
                        <Link to='/palmeiras'>
                            <img src="./assets/images/pal.png" alt="" />
                        </Link>
                </div>

                <div class="img-categ">
                        <Link to='/corinthians'>
                            <img src="./assets/images/sccp.png" alt="" />
                        </Link>
                </div>

                <div class="img-categ">
                        <Link to='/santos'>
                            <img src="./assets/images/sfc.png" alt="" />
                        </Link>
                </div>

                <div class="img-categ">
                        <Link to='/flamengo'>
                            <img src="./assets/images/fla.png" alt="" />
                        </Link>
                </div>
            </div>

        </div>

        <Rodapé/>
    </Container>
    )
}