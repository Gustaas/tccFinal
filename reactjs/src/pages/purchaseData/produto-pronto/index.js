import { Link } from "react-router-dom";
import { Button } from "../../../components/button/styled";
import Cabecalho from "../../../components/cabecalho";
import { Container } from "./styled";

export default function Finalizado(){
    return (
        <Container>
            <Cabecalho/>
            <div className='conteudo'>
                <div className='box'>
                    Pedido Concluido :3
                    <Link to='/produtos'><Button>Continuar Comprando</Button></Link>
                </div>
            </div>
        </Container>
    )
}