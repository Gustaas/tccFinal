import Cabecalho from "../../../components/cabecalho";
import { Container } from "./styled";

export default function Pedidos(){
    return(
        <Container>
            <Cabecalho/>
            <h1 class="titulo-pagina">SEUS PEDIDOS</h1>
            
            <div class="conteudos-align">
                <div class="container-pedido">
                    <div class="box-container-pedido">
                        <div class="boxpedidosgeral">
                            <div class="box-pedido-1">
                                
                                <div class="pedido-desc">
                                    
                                    <div class="desc">
                                        <div class="pedido-imagem">
                                            <img src="/assets/images/camisa-sp.jpg" alt=""/>
                                        </div>

                                        <div class="info">
                                            <h1 class="titulo-produto"> Camisa São Paulo II 21/22 Rigoni Nº 77 </h1>
                                            <div class="cor">
                                                <span>
                                                COR:</span> Vermelho, Preto e Branco</div>
                                            <div class="tamanho">
                                                <span>
                                                TAMANHO:</span> G</div>
                                            <div class="dt-compra">
                                                <span>
                                                DATA DE COMPRA:</span> xx/xx/xxxx</div>
                                            <div class="s-p">
                                                <div class="status">
                                                    STATUS DO PEDIDO | A CAMINHO
                                                </div>
                                                <div class="preco">
                                                    R$ 314,99

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </Container>
    )
}