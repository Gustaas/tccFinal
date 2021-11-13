
import { Container } from "./styled";

import { Button } from "../../../components/button/styled";
import { Input } from "../../../components/input/styled";

import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import { useRef, useState } from "react";
import { useHistory } from "react-router";

import Api from "../../../service/api";
import Cookies from "js-cookie";
const api = new Api();





export default function Login() {


    const [ email, setEmail] = useState('');
    const [ senha, setSenha] = useState('');

    const loading = useRef(null);
    const navigation = useHistory();

    const logar = async () => {
        const r = await api.login(email, senha);
        console.log(r)
        const r2 = await api.getId(email)
        console.log(r2)
        if(r.status === 'ok') {
            Cookies.set('usuario-logado', r2.id_cliente)
            navigation.push('/')
        } else {
            toast.error(`${r.erro}`)
        }
    }

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
                            <Input value={email} onChange={ e => setEmail(e.target.value)}
                             />
                        </div>
                    </div>

                    <div class="reg-campos">
                        <div class="reg-campotitulo">Senha:</div>
                        <div class="reg-campos-input">
                        <Input value={senha} onChange={ e => setSenha(e.target.value)}
                             
                             type="password"/>
                        <div class="reg-camposenha"> 
                            <Link to="/esqueciASenha">
                            Esqueci a senha</Link> 
                        </div>

                        </div>
                    </div>

                    <div class="reg-a">
                        <Button  onClick={logar} > Logar </Button> 

                        
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