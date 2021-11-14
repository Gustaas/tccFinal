import { Container } from "../../styled";
import { Link } from "react-router-dom";

export default function Faixa2 () {
    return (
        <Container>
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
                <div class="fam">FAMÍLIA AIR MAX.</div>
                </div>
            </div>
        </div>
        </Container>
    )
}