import Cookie from "js-cookie";
import { useState } from "react";
import Cabecalho from "../../../components/cabecalho";
import { Container } from './styled';
import { useHistory } from "react-router-dom";


export default function Desc(props) {
    const [ produto] = useState(props.location.state);
    const [tamanho, setTamanho] = useState('');
    const Navigation = useHistory();


    function getTamanhoStyle(t) {
        if (tamanho === t)
            return { backgroundColor: '#000', opacity: '50%', color: '#fff'}
        else 
            return {}
    }

    function comprar() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho != null
                            ? JSON.parse(carrinho)
                            : [];

        if (carrinho.some(item => item.id_produto === produto.id_produto) === false)
            carrinho.push({...produto, qtd: 1, tamanho: tamanho});

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
                                <button onClick={() => setTamanho('P')} style={getTamanhoStyle('P')}> P </button>
                                <button onClick={() => setTamanho('M')} style={getTamanhoStyle('M')}> M </button>
                                <button onClick={() => setTamanho('G')} style={getTamanhoStyle('G')}> G </button>
                                <button onClick={() => setTamanho('GG')} style={getTamanhoStyle('GG')}> GG </button>
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
    </Container>
    )

        
}