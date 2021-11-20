import {Container} from './styled';
import { Button } from '../../../../components/button/styled';
import Cabecalho from '../../../../components/cabecalho';
import { Link } from 'react-router-dom';

export default function Parcelamento () {
    return (
        <Container>
                <Cabecalho/>

                <h1 className="titulo-pagina">MEUS ENDEREÇOS</h1>

                <div className="box-container"> 

                    <div className="box-p-b"> 
                        
                        <div className="box-endereços">
                            <div className="container-endereço">
                                    <div className="box-endereço">
                                                <input type="radio"/>
                                        <div className="endereço">
                                            <div class="opcao">
                                                <div className="infos">
                                                    <div className="end-cadastrado">
                                                        Endereço 1, N° XX
                                                    </div>
                                                <div className="cidade">
                                                    São Paulo, São Paulo — CEP XXXXX-XXX
                                                </div> 

                                                <div className="destinatario">
                                                    Destinatário — (11) 9 XXXX-XXXX
                                                </div>
                                                <div className="e-a">
                                                <div className="editar">EDITAR</div>
                                                <div className="add">ADICIONAR INSTRUÇÕES DE ENTREGA</div>
                                                </div>
                                            </div>
                                            </div>
                                    
                                        </div>
                                    </div>

                                    <div className="box-endereço">
                                                <input type="radio"/>
                                        <div className="endereço">
                                            <div class="opcao">
                                                <div className="infos">
                                                    <div className="end-cadastrado">
                                                        Endereço 2, N° XX
                                                    </div>
                                                <div className="cidade">
                                                    São Paulo, São Paulo — CEP XXXXX-XXX
                                                </div> 

                                                <div className="destinatario">
                                                    Destinatário — (11) 9 XXXX-XXXX
                                                </div>
                                                <div className="e-a">
                                                <div className="editar">EDITAR</div>
                                                <div className="add">ADICIONAR INSTRUÇÕES DE ENTREGA</div>
                                                </div>
                                            </div>
                                            </div>
                                    
                                        </div>
                                    </div>
                                

                                    <div className="a">
                                            <div className="botao1">
                                                
                                                    <Link to='/endereço/add'>
                                                        <Button>
                                                    ADICIONAR NOVO ENDEREÇO
                                                    </Button> </Link>
                                                
                                            </div>
                                            <div className="botao2">
                                                <Button>CONTINUAR</Button>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    
                        
                    </div>

                </div>

        </Container>
    )
}