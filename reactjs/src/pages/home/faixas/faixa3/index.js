import { Container } from "../../styled";
import { Link } from "react-router-dom";

export default function Faixa3 () {
    return (
        <Container>
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
        </Container>
    )
}