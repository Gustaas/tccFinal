import { Container } from "./styled";
import Cabecalho from "../../../components/cabecalho";
import { Titulo } from "../../../components/titulo/styled";
import CarrinhoItem from "./carrinho-item";
import Cookie from "js-cookie";
import AproveiteTambém from "./enjoy";
import { useEffect, useState } from "react";

export default function Carrinho () {
    const [produtos, setProdutos] = useState([]);
    useEffect(carregarCarrinho, []);

    function carregarCarrinho() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho != null
                            ? JSON.parse(carrinho)
                            : [];
        
        console.log(carrinho);

        setProdutos(carrinho);
    }

    function removerProduto(id) {
        let carrinho = produtos.filter(item => item.id_produto !== id);

        Cookie.set('carrinho', JSON.stringify(carrinho));

        setProdutos([...carrinho])
    }

    function alterarProduto(id, qtd) {

        let produtoAlterado = produtos.filter(item => item.id_produto === id)[0];
        produtoAlterado.qtd = qtd;

        Cookie.set('carrinho', JSON.stringify(produtos));
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
                    <div className="subtotal">
                        SUBTOTAL (1 ITEM)
                        <span>R$179,99</span>
                    </div>


                    <hr/>

                    <div className="total">
                        VALOR TOTAL
                        <span>R$179,99</span>
                    </div>

                    <div className="botoes">
                        <div className="finalizar">
                            <button class="finalizar">FINALIZAR COMPRA</button>
                        </div>

                        <div className="continuar">
                            <button class="continuar">CONTINUAR COMPRANDO</button>
                        </div>
                    </div>
                </div>


            </div>

            <div className="conteudo2">
                <Titulo>APROVEITE TAMBÉM</Titulo>
                <AproveiteTambém/>
            </div>
        </Container>
    )
}