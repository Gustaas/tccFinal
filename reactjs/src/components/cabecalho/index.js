import { CabecalhoDiv } from "./styled";
import { Link } from 'react-router-dom'
import Cookies from "js-cookie";

export default function Cabecalho() {

    let r = Cookies.get('usuario-logado')
    console.log(r);

    function user(r) {
        
        if( r === undefined)
        {
            return(
                '/login'
            )
        } else {
            return(
                '/pedidos'
            )
        }
    }
    return (
        <CabecalhoDiv>
          
            <div class="logo">
                <Link to='/'>
                <img src="../../assets/images/logo.svg" alt=""/>
                </Link>
            </div>

            <div class="menu">
                <div class="menu-item"><Link to='/produtos'> Todos os produtos</Link></div>
                <div class="menu-item"><Link to='/produtos/femininos'> Feminino</Link></div>
                <div class="menu-item"><Link to='/produtos/masculinos'> Masculino</Link></div>
                <div class="menu-item"><Link to='/produtos/infantis'> Infantil</Link></div>
            </div>
            <div class="menu-botao">
                <Link to='/carrinho'><button><img src="/assets/images/carrinhoo.svg" alt="" width='20px' /></button></Link>
                <div  className="botao-login">
                    <Link to={user(r)}>  <button><img class="img" src="/assets/images/login.jpg" alt="" width='23px'/> </button>         </Link>
                </div>
            </div>
        </CabecalhoDiv>
    )
}