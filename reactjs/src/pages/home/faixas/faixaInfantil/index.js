import { Container } from "../../styled";
import { Link } from "react-router-dom";

export default function FaixaInfantil () {
    return (
        <Container>
            <div class="faixa-infantil">
            <div class="geral-infantil">
                <div class="infantil">Infantil</div>
                <div class="img-infantil">
                    <div class="img-fut">
                        <Link to='produtos/infantis'>
                            <img src="./assets/images/Infantojuvenil.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </Container>
    )
}