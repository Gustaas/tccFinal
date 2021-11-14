import { Container } from "../../styled";
import { Link } from "react-router-dom";

export default function Faixa5 () {
    return (
        <Container>
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
        </Container>
    )
}