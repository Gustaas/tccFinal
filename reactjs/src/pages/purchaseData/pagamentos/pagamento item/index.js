import { useState } from 'react';
import { Container } from './styled';

export default function PagamentoItem(props) {

    const [produto] = useState(props.info)

    return (
        <Container>
            <div class="desc">
                <div class="pedido-imagem">
                    <img src={produto.img_imagem} alt=""/>
                </div>

                <div class="info">
                    <div class="titulo-produto"> 
                            {produto.nm_produto}
                    </div>

                    <div class="tamanho">
                        TAMANHO: <span> {produto.tamanho} </span> 
                    </div>
                                            
                    <div class="vl-preco">
                        R$: {produto.vl_preco}
                    </div>
                </div>
            </div>
        </Container>
    )
}