import Cabecalho from '../../components/cabecalho/index.js'
import { Link } from 'react-router-dom'
import { Container } from './styled'
import Rodapé from './footer/'

export default function Home () {
    return (
    <Container>
        <Cabecalho/>
        <div class="faixa-1">
            <div class="info">
                <div class="texto">O Melhor do Esporte Você encontra aqui</div>
            </div>
        </div>

        <div class="faixa-2">
            <div class="geral-masculino">
                <div class="masculino">Masculino</div>
                <div class="img-masculino">
                    <div class="img-fut">
                        <Link to="/produtos/masculinos">
                            <img src="./assets/images/nike-airmax.jfif" alt="" />
                        </Link>
                    </div>
                </div>
                <div class="desc-t">
                    <div class="grandes-passos">
                    DÊ GRANDES PASSOS PARA O QUE DER E VIER COM A
                    </div>
                <div class="fam">FAMÍLIA AIR MAX</div>
                </div>
            </div>
        </div>

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
                    <div class="sup">O MÁXIMO APOIO COM ISSO</div>
                </div>
            </div>
        </div>

        <div class="faixa-4">
            <div class="geral-fut">
            <div class="fut">Todos os Produtos</div>
            <div class="img-fut">
                <Link to='/produtos/todos'>
                    <img src="./assets/images/barca.svg" alt="" />
                </Link>
                </div>
            <div class="desc-fut">
                <div class="vis">
                VISTA-SE PARA ANDAR COM O MAIOR ESTILO NAS RUAS DE TODO MUNDO
                </div>
            </div>
            </div>
            
        </div>
        <div class="faixa-5">
            <div class="categorias">Escolha seu time</div>
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