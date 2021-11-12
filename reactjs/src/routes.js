import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/home/index'
import Login from './pages/userAcess/login'
import SobreNos from './pages/home/sobre nos'
import AddEndereco from './pages/purchaseData/endereço/adicionar-endereco';
import Pagamento from './pages/purchaseData/pagamentos';
import Desc from './pages/productDetails/descricao-produto';
import Feminino from './pages/productSections/produtos-femininos';
import Infantil from './pages/productSections/produtos-infantis';
import Masculinos from './pages/productSections/produtos-masculinos';
import ProdutosTodos from './pages/productSections/todos-produtos';
import LoginAdmin from './pages/admin/login-adm/index';
import Pedidos from './pages/purchaseData/pedidos';
import registrarUser from './pages/userAcess/registrar-user';
import PedidosAdmin from './pages/admin/pedidos-adm';
import CadastrarProduto from './pages/admin/produtos/cadastrar-produto';
import Carrinho from './pages/purchaseData/carrinho';
import ClientesAdm from './pages/admin/clientes';
import Enderecos from './pages/purchaseData/endereço/meus-endereços';
import Flamengo from './pages/productSections/times/flamengo';
import SaoPaulo from './pages/productSections/times/saoPaulo';
import Palmeiras from './pages/productSections/times/palmeiras';
import Santos from './pages/productSections/times/santos';
import Corinthians from './pages/productSections/times/corinthians';
import Esqueci from './pages/userAcess/esqueciASenha';
import Reset from './pages/userAcess/reset';

import Produtos from  './pages/admin/produtos/products/index'

export default function Final() {
    return (
    <BrowserRouter>
        <Switch>

            {/*USUÁRIO*/}

            {/* Abre a tela inicial do Site */}
            <Route path='/' exact={true} component={Home} />

            {/* Direciona o usuário para a tela de sobre nós */}
            <Route path='/sobre-nos' component={SobreNos} />

            {/* Direciona o usuário para fazer login */}
            <Route path='/login' component={Login} />

            {/*Permite que o usuário se cadastre no site*/}
            <Route path='/registrar' component={registrarUser}/>

            {/*Direciona o usuário para a tela de "Esqueci a Senha",
             possibilitando ele alterar a mesma, isto é, após ele enviar um código
             de segurança para a alteração da senha
            */}
            <Route path='/esqueciASenha' component={Esqueci}/>

            {/* O usuário insere o código que recebeu em seu emaii e assim, altera a sua senha,
            podendo voltar a fazer login no site */}
            <Route path='/reset' component={Reset}/>
            
            {/*Abre a tela de produtos da categoria infantil*/}
            <Route path='/produtos/infantis' component={Infantil}/>

            {/*Abre a tela de produtos da categoria masculina*/}
            <Route path='/produtos/masculinos' component={Masculinos}/>

            {/*Abre a tela de descrição do produto quando usuário clicar*/}
            <Route path='/produto/descricao' component={Desc} />

            {/*Abre a tela de produtos da categoria feminina*/}
            <Route path='/produtos/femininos' component={Feminino}/>


            {/*Abre uma tela de produtos em geral, sem parâmetro de categoria e gênero*/}
            <Route path='/produtos' component={ProdutosTodos}/>

            {/*Tela de produtos filtrados com a categoria do time Flamengo*/}
            <Route path='/flamengo' component={Flamengo}/>

            {/*Tela de produtos filtrados com a categoria do time São Paulo*/}
            <Route path='/saopaulo' component={SaoPaulo}/>

            {/*Tela de produtos filtrados com a categoria do time Palmeiras*/}
            <Route path='/palmeiras' component={Palmeiras}/>

            {/*Tela de produtos filtrados com a categoria do time Santos*/}
            <Route path='/santos' component={Santos}/>

            {/*Tela de produtos filtrados com a categoria do time Corinthians*/}
            <Route path='/corinthians' component={Corinthians}/>

            {/*Permite o usuário visualizar quais são seus pedidos e o status de entrega */}
            {/*Permite o usuário visualizar o que tem em seu carrinho,
            além de permitir que ele finalize uma compra, remova os produtos*/}
            <Route path='/carrinho' component={Carrinho}/>

            {/* Permite o usuário selecionar um método de pagamento */}
            <Route path='/pagamento' component={Pagamento} />

            {/*Permite que o usuário seleciona um de seus endereços salvos*/}
            <Route path='/endereço'component={Enderecos}/>

            {/* Permite o usuário adicionar um endereço */}
            <Route path='/endereço/add' component={AddEndereco} />


            {/* Permite que o usuário veja os seus pedidos e a situação de entrega do mesmo*/}
            <Route path='/pedidos' component={Pedidos}/>



            {/*PARTE ADMINISTRATIVA*/}


            {/* Permite o usuário administrativo fazer login */}
            <Route path='/admin/login' component={LoginAdmin}/>

            {/* Abre a tela administrativa de cadastrar produtos*/}
            <Route path='/admin/cadastrar' component={CadastrarProduto}/>

            {/* Abre a tela administrativa de clientes*/}
            <Route path='/admin/cliente'component={ClientesAdm}/>

            {/* Abre a tela administrativa de pedidos */}
            <Route path='/admin/pedidos' component={PedidosAdmin}/>

            {/* Abre a tela administrativa de produtos */}
            <Route path='/admin/produtos' component={Produtos}/>
        </Switch>
    </BrowserRouter>
    )
}