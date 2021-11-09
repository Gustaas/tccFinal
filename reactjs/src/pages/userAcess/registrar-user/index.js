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
                    <div class="reg-campotitulo">E-mail:</div>
                    <div class="reg-campos-input">
                        <input type="text">
                    </input>
                    </div>
                </div>
                <div class="reg-campos">
                    <div class="reg-campotitulo">Confirmar e-mail:</div>
                    <div class="reg-campos-input">
                        <input type="text">
                    </input>
                </div>
                </div>
                <div class="reg-campos">
                    <div class="reg-campotitulo">Senha:</div>
                    <div class="reg-campos-input">
                        <input type="password">
                    </input>
                </div>
                <div class="reg-campos">
                    <div class="reg-campotitulo">Confirmar senha:</div>
                    <div class="reg-campos-input">
                        <input type="password">
                    </input>
                </div>
                <div class="reg-a"> Registrar
                </div>
                <div class="reg-conta">
                    <div class="a"> 
                        <Link to='/login'>Já possuo conta | Fazer login</Link>
                    </div>
                </div>

            </div>
            </div>
            </div>
        </div>
        </Container>
    )
}