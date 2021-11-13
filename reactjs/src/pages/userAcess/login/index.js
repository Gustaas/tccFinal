
import { Container } from "./styled";

import { Button } from "../../../components/button/styled";
import { Input } from "../../../components/input/styled";

import { Link } from 'react-router-dom';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';






export default function Login() {

    

        
    

    return(
        <Container>
            
            <ToastContainer/>
            <LoadingBar color="red"/>


            
            <div class="conteudo-reg">
                <div class="box-reg">
                    <div class="reg-titulo">Fazer Login</div>
                    <div class="reg-campos">
                        <div class="reg-campotitulo">E-Mail:</div>
                        <div class="reg-campos-input">
                            <Input 
                             />
                        </div>
                    </div>

                    <div class="reg-campos">
                        <div class="reg-campotitulo">Senha:</div>
                        <div class="reg-campos-input">
                            <Input 
                             type="password"/>
                        <div class="reg-camposenha"> 
                            <Link to="/esqueciASenha">
                            Esqueci a senha</Link> 
                        </div>

                        </div>
                    </div>

                    <div class="reg-a">
                        <Button  Entrar />

                        
                    </div>

                    <div class="reg-conta">
                        <div class="registrar"> 
                        <Link to="/registrar">Registre-se</Link> 
                        </div>
                    </div>
                </div>
                <div className="adm"><Link to='/admin/login'> Login Adm </Link></div>
            </div>
        </Container>
    )
}