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

                            <div class="box-pedido-2">
                                
                                <div class="pedido-desc">
                                    
                                    <div class="desc">
                                        <div class="pedido-imagem">
                                            <img src="/assets/images/camisa-sp1.webp" alt=""/>
                                        </div>

                                        <div class="info">
                                            <h1 class="titulo-produto"> Camisa São Paulo I 21/22 s/n° Masculina </h1>
                                            <div class="cor">
                                                <span>
                                                COR:</span> Vermelho, Petro e Branco</div>
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

                    <div class="box-devolucao">
        
        
                        <div class="box-dev-1">
                            <div class="titulo">
                                <h1>SOLICITAR TROCA</h1>
                            </div>
        
                            <div class="info">
                                <div class="n-pedido">
                                    <span> Nº do pedido: </span> xxxxxxxxxxx</div>
                                <div class="dt-compra">
                                    <span>
                                    Data da compra: </span> xx/xx/xxxx</div>
                            </div>
        
                            <div class="motivo">
                                SELECIONE O MOTIVO:
        
                                <select id="motivo">
                                    <option value="motivo1">Selecione o motivo</option>
                                    <option value="motivo1">Produto errado</option>
                                    <option value="motivo2">Trocar tamanho</option>
                                    <option value="motivo3">Quero trocar o produto</option>
                                    <option value="motivo4">Outro</option>
                                </select>
                            </div>
        
                            <div class="botao">
                                <button> CONTINUAR </button>
                            </div>
                        </div>

                        <div class="box-dev-2">
                            <div class="titulo">
                                <h1>SOLICITAR REEMBOLSO</h1>
                            </div>
        
                            <div class="info">
                                <div class="n-pedido">
                                    <span>Nº DO PEDIDO:</span> xxxxxxxxxxx </div>
                                <div class="dt-compra">
                                    <span>
                                    DATA DA COMPRA: </span> xx/xx/xxxx</div>
                            </div>
        
                            <div class="motivo">
                                SELECIONE O MOTIVO:
        
                                <select id="motivo">
                                    <option value="motivo1">Selecione o Motivo</option>
                                    <option value="motivo1">Desisti do Produto</option>
                                    <option value="motivo2">Produto defeituoso</option>
                                    <option value="motivo4">Outro</option>
                                </select>
                            </div>
        
                            <div class="botao">
                                <button> CONTINUAR </button>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        
        </Container>
    )
}