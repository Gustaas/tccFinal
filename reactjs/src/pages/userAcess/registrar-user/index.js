import Cabecalho from "../../../components/cabecalho";
import { Container } from "./styled";
import {Link} from 'react-router-dom';

export default function registrarUser(){
    
    return(
        <Container>
            <Cabecalho/>
        
            <div class="conteudo-reg">
                <div class="box-reg">
                    <div class="reg-titulo">Registrar</div>
                    <div class="reg-campos">
                        <div class="reg-campotitulo">Nome Completo:</div>
                        <div class="reg-campos-input">
                            <input type="text">
                        </input>
                        </div>
                    </div>
                    <div class="reg-campos">
                        <div class="reg-campotitulo">E-mail:</div>
                        <div class="reg-campos-input">
                            <input type="email">
                        </input>
                    </div>
                    </div>
                    <div class="reg-campos">
                        <div class="reg-campotitulo">Senha:</div>
                        <div class="reg-campos-input">
                            <input type="password">
                        </input>
                        </div>
                    </div>
                    <div class="reg-campos">
                        <div class="reg-campotitulo">Endereço:</div>
                        <div class="reg-campos-input">
                            <input type="password">
                        </input>
                        </div>
                    </div>

                    <div class="reg-campos">
                        <div class="reg-campotitulo">Data de nascimento:</div>
                        <div class="reg-campos-input">
                            <input type="date">
                        </input>
                        </div>
                    </div>

                    <div class="reg-campos">
                        <div class="reg-campotitulo">Cpf:</div>
                        <div class="reg-campos-input">
                            <input type="text">
                        </input>
                        </div>
                    </div>

                    <div class="reg-a"> Registrar usuário
                    </div>
                    <div class="reg-conta">
                        <div class="a"> 
                            <Link to='/login'>Já possuo conta | Fazer login</Link>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )}