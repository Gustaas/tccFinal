import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho";
import { Titulo } from "../../../components/titulo/styled";
import CarrinhoItem from "./carrinho-item";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Carrinho () {
    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(carregarCarrinho, []);

    function atualizarTotal() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho != null
                            ? JSON.parse(carrinho)
                            : [];

        let t = carrinho.reduce((prev,curr) => prev + curr.vl_preco * curr.qtd, 0);
        t = Number(t.toFixed(2)); 
        setTotal(t)
    }

    function carregarCarrinho() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho != null
                            ? JSON.parse(carrinho)
                            : [];

        atualizarTotal();
        setProdutos(carrinho);
    }

    function removerProduto(id) {
        let carrinho = produtos.filter(item => item.id_produto !== id);

        Cookie.set('carrinho', JSON.stringify(carrinho));
        atualizarTotal();

        setProdutos([...carrinho])
    }

    function alterarProduto(id, qtd) {

        let produtoAlterado = produtos.filter(item => item.id_produto === id)[0];
        produtoAlterado.qtd = qtd;

        Cookie.set('carrinho', JSON.stringify(produtos));
        atualizarTotal();
    }

    return (
        <Container>
                <Cabecalho/>
                
            <div className="titulo">
                Meu Carrinho
            </div>
            <div className="conteudo">
            
                <div class="pedido-desc">
                        {produtos.map((item) =>
                            <CarrinhoItem key={item.id_produto}
                            info={item}
                            onUpdate={alterarProduto}
                            onRemove={removerProduto}
                            />
                        )}
                </div>

                <div className="resumo">
                    <Titulo>RESUMO DA COMPRA</Titulo>
                    <hr/>
                            
                    <div className="total">
                        VALOR TOTAL
                        <span>{total}</span>
                    </div>
                    

                    <div className="botoes">
                        <div className="finalizar">
                            <Link to='/pagamento'>
                                <button class="finalizar">FINALIZAR COMPRA</button>
                            </Link>
                        </div>

                        <div className="continuar">
                            <Link to='/produtos/todos'>
                                <button class="continuar"> CONTINUAR COMPRANDO </button>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </Container>
    )
}