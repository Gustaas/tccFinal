import { useState } from 'react';
import { Container } from './styled';
import Contador from "../../../../components/contador"

export default function CarrinhoItem(props) {

    const [produto, setProduto] = useState(props.info)

    function alterarQtd(qtd) {
        setProduto({...produto, qtd});

        props.onUpdate(produto.id_produto, qtd)
    }

    function remover() {
        props.onRemove(produto.id_produto);
    }

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

                    <div className="info-prod">  
                        {produto.ds_genero} • {produto.ds_categoria}
                    </div>

                    <div class="tamanho">
                        TAMANHO: <span> {produto.tamanho} </span> 
                    </div>
                                            
                    <div class="vl-preco">
                        R$: {produto.vl_preco}
                    </div>
                    
                </div>
                <div className="contador" >
                    <Contador onChange={alterarQtd} value={produto.qtd}/>
                    <div className="remover" onClick={remover}>
                        <img src="https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/recyclebin-512.png" alt="" />
                    </div>
                </div>

            </div>
        </Container>
    )
}