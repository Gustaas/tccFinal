import axios from "axios";
import { Container } from "./styled";
import Cookies from 'js-cookie';
import { Button } from "../../../components/button/styled";
import { Input } from "../../../components/input/styled";
import { useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import Api from '../../../service/api'

const api = new Api



export default function Login() {

    const [ email, setEmail] = useState('');
    const [ senha, setSenha] = useState('');

    let usuarioLogado = Cookies.get('usuario-logado');

    const loading = useRef(null); 
    const navigation = useHistory(); 

    async function logar() {
        loading.current.continuousStart();
        const r = await axios.post(`http://localhost:3030/login` , { email : email, senha: senha});
        const r2 = await api.getId(email);
        console.log(r2);
        if (r.data.status === 'ok') {
            Cookies.set('usuario-Logado', r2.id_cliente)
            navigation.push('/')

        } else {
            toast.error(r.data.mensagem);
            loading.current.complete();
        }
    }

    return(
        <Container>
            
            <ToastContainer/>
            <LoadingBar color="red" ref={loading} />

            
            <div class="conteudo-reg">
                <div class="box-reg">
                    <div class="reg-titulo">Fazer Login</div>
                    <div class="reg-campos">
                        <div class="reg-campotitulo">E-Mail:</div>
                        <div class="reg-campos-input">
                            <Input value={email}
                            onChange={e => setEmail(e.target.value)}
                             />
                        </div>
                    </div>

                    <div class="reg-campos">
                        <div class="reg-campotitulo">Senha:</div>
                        <div class="reg-campos-input">
                            <Input value={senha}
                            onChange={e => setSenha(e.target.value)}
                             type="password"/>
                        <div class="reg-camposenha"> 
                            <Link to="/esqueciASenha">
                            Esqueci a senha</Link> 
                        </div>

                        </div>
                    </div>

                    <div class="reg-a">
                        <Button onClick={logar}> Entrar

                        </Button>
                    </div>

                    <div class="reg-conta">
                        <div class="registrar"> 
                        <Link to="/registrar">Registre-se</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}