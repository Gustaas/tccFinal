import Cookie from "js-cookie";
import { useState } from "react";
import Cabecalho from "../../../components/cabecalho";
import { Container } from './styled';
import { useHistory } from "react-router-dom";


export default function Desc(props) {
    const [ produto] = useState(props.location.state);
    const Navigation = useHistory();

    function comprar() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho != null
                            ? JSON.parse(carrinho)
                            : [];

        if (carrinho.some(item => item.id === produto.id) === false)
            carrinho.push({...produto, qtd: 1});

        Cookie.set('carrinho', JSON.stringify(carrinho));

        Navigation.push('/carrinho')
    }

    return(
    <Container>
        <Cabecalho/>
            <div className="geral-desc">
                    <div class="img-produto"> <img src={produto.img_imagem} alt=""/> </div>
                    <div class="desc-text">
                        <div class="nome-produto"> {produto.nm_produto} </div>
                        <div class="categoria">{produto.ds_genero} . {produto.ds_categoria}</div>
                        <div class="valores"> 
                                <div class="preco"> R$:{produto.vl_preco}</div>
                        </div>
                        <div class="geral-tamanhos"> 
                            <div class="tamanhos"> Tamanhos </div>
                            <div class="opcoes-tamanho"> 
                                <button>P</button>
                                <button>M</button>
                                <button>G</button>
                                <button>GG</button>
                            </div>
                            <div class="geral-carrinho">
                                <button class="adc-carrinho" onClick={comprar}> ADICIONAR AO CARRINHO </button>
                                <div class="ava"> AVALIAÇÕES    
                                    <div class="cora">✰✰✰✰ </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="descricao-produto">
                <div className="img-desc">
                    {produto.nm_produto}
                    <img src="https://images.lojanike.com.br/1024x1024/produto/blusao-nike-sb-masculino-CW4383-010-1.jpg" alt="" />
                </div>
                <div className="desc">
                    {produto.ds_descricao}
                </div>
            </div>
    </Container>
    )

        
}