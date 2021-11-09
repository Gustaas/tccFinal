import Cabecalho from "../../../components/cabecalho";
import { Container } from "./styled";


export default function sobreNos() {
    return(
        <Container>
            <Cabecalho/>
            <div class="faixa-1">
                <div class="titulos">Perfil</div>
                <div class="f1-conteudo">
                    <div class="f1-img">
                        <img src="../assets/images/bolt.jfif" alt=""/>
                    </div>
                    <div class="f1text">
                        <div class="f1textoo">
                            A marca Destiny apesar de sua curta história tem uma ligação profundamente enraizada aos esportes.
                        </div>
                        <div class="f1textoo">
                            O seu portfólio amplo e diversificado, abrange os principais esportes globais.
                        </div>
                        <div class="f1textoo2">
                            Isto tem permitido à Destiny transcender barreiras e buscar tornar-se uma das lojas mais reconhecidas do Brasil.
                        </div>
                    </div>
                </div>
            </div>
'
            <div class="faixa-2">
                <div class="titulos">Missão</div>
                <div class="f2conteudo">
                    <div class="f2text">
                        <div class="f1textoo">
                            Assim como atletas, não aceitamos o médio.
                        </div>
                        <div class="f1textoo">
                            O que fazemos está focado no esporte e através dele mudaremos vidas 
                        </div>
                    </div>
                    <div class="f2-img" >
                        <img src="../assets/images/surf.jpeg" alt=""/>
                    </div>
                </div>
            </div>'

            <div class="faixa-3">
                <div class="titulos">Visão</div>
                <div class="f3conteudo">
                    <div class="f3img"> <img alt='' src="../assets/images/vasco.jpeg"/> </div>
                    <div class="f3text">
                        <div class="f3textoo">
                            Nos esforçaremos para romper e expandir limitações, 
                            sendo acessível e incluindo todos e tornando o 
                            ambiente esportivo um lugar inclusivo. 
                        </div>
                    </div>
                </div>
            </div>

            <div class="faixa-4">
                <div class="titulos">Valores</div>
                <div class="f4conteudo">
                    <div class="f4text">
                        <div class="f4textoo">
                            Ética, respeito, inclusão e sustentabilidade.
                        </div>
                    </div>
                    <div class="f4img">
                        <img src="../assets/images/dejong.jpg" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    )
}