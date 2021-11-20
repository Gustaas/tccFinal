import {Container} from './styled';
import Cookie from 'js-cookie';
import Cabecalho from '../../../components/cabecalho/index';
import { Button } from '../../../components/button/styled';
import { useState, useEffect } from 'react';
import PagamentoItem from './pagamento item';

export default function Pagamento () {
    const [opcao, setOpcao] = useState('');
    const [produtos, setProdutos] = useState([])
    const [total, setTotal] = useState(0);
    
    
    useEffect(carregarCarrinho, []);

    function finalizarCompra() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho != null
                            ? JSON.parse(carrinho)
                            : [];

        let usuarioId = Cookie.get('usuario-logado');
        
        if (usuarioId != null && usuarioId !== '0' && usuarioId !== '') {

            let pedido = {
                items: carrinho,
                usuario: Number(usuarioId)
            }

            console.log(pedido);

        } else {
            alert('Usuário não logado');
        }

        
    }


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

        setProdutos(carrinho);
        atualizarTotal();
    }

    function getCartao(c) {
        if (opcao === c)
            return { backgroundColor: 'white', border: '1px solid gray'}
        else 
            return {}
    }

    return (
        <Container>

                <Cabecalho/>

                <h1 className="titulo-pagina">COMO VOCÊ PREFERE PAGAR?</h1>
       
            <div className="box-container">

                <div className="container-pagamento">
                    <div className="Cartão">
                    <button onClick={() => setOpcao('Mastercard')} style ={getCartao('Mastercard')}>
                        <div className="imagem">
                        <img src="/assets/images/mastercard.svg" alt=""/>
                            CARTÃO MASTERCARD
                        </div>
                    </button>

                    <hr/>
                    <button onClick={() => setOpcao('Cielo')} style ={getCartao('Cielo')}>
                        <div className="imagem">
                        <img src="/assets/images/elo.png" alt=""/>
                            CARTÃO CIELO
                        </div>
                    </button>
                    <hr/>
                    <button onClick={() => setOpcao('Pix')} style ={getCartao('Pix')}>
                        <div className="imagem">
                        <img src="/assets/images/pix.svg" alt=""/>
                            PIX
                        </div>
                    </button>
                    <hr/>

                    <button onClick={() => setOpcao('Boleto')} style ={getCartao('Boleto')}>
                        <div className="imagem">
                        <img src="/assets/images/boleto.svg" alt=""/>
                            BOLETO BANCÁRIO
                        </div>
                    </button>
                    </div>

                </div>

                <div className="box-pedido">
                        <div className="pedido-desc">
                            <div className="desc">
                            {produtos.map((item) =>
                            <PagamentoItem key={item.id_produto}
                            info={item}
                            />
                            )}
                            <div className="info">
    
                                    <hr className="hr2"/>

                                    <div className="f-p">
                                        <div className="frete">
                                            FRETE: <span className="frete2">14,99</span>
                                        </div>
                                    </div>
                                
                                    <hr className="hr2"/>
                                

                                <div className="total">
                                    VOCÊ PAGARÁ: <span className="total2">{total}</span>
                                </div>

                            </div>
                            <div className="botao">
                                <Button onClick={finalizarCompra}>ADICIONAR CUPOM</Button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>


        </Container>
    )
}