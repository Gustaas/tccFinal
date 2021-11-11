import { CabecalhoDiv } from "./styled";
import { Link } from 'react-router-dom'

export default function CabecalhoAdm() {
    return (
        <CabecalhoDiv>
          
            <div class="logo">
                <img src="../../assets/images/logo.svg" alt=""/>
            </div>

            <div class="menu">
                <div class="menu-item"><Link to='/admin/cadastrar'> Inserir Produto</Link></div>
                <div class="menu-item"><Link to='/admin/cliente'> Tabela Clientes</Link></div>
                <div class="menu-item"><Link to='/admin/produtos'> Tabela Produtos</Link></div>
                <div class="menu-item"><Link to='/admin/pedidos'> Tabela Pedidos</Link></div>
            </div>
        </CabecalhoDiv>
    )
}