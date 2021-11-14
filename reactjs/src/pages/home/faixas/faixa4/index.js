import { Container } from "../../styled";
import { Link } from "react-router-dom";

export default function Faixa4 () {
    return (
        <Container>
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
        </Container>
    )
}