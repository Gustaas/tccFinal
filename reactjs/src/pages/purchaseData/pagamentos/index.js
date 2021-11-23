import {Container} from './styled';
import Cookie from 'js-cookie';
import Cabecalho from '../../../components/cabecalho/index';
import { Button } from '../../../components/button/styled';
import { useState, useEffect } from 'react';
import PagamentoItem from './pagamento item';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

export default function Pagamento () {
    const [opcao, setOpcao] = useState('');
    const [produtos, setProdutos] = useState([])
    const [total, setTotal] = useState(0);
    const Navigation = useHistory();
    
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

        setProdutos(carrinho);
        atualizarTotal();
    }

    function finalizarCompra() {
        Cookies.remove('carrinho');
        Navigation.push('/finalizado')
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
                                        
                                    </div>
                                
                                    <hr className="hr2"/>
                                

                                <div className="total">
                                    VOCÊ PAGARÁ: <span className="total2">{total}</span>
                                </div>

                            </div>
                            <div className="botao">
                                <Button onClick={finalizarCompra}>Finalizar Compra</Button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>


        </Container>
    )
}