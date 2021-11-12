import axios from "axios";
import { Container } from "./styled";
import { Button } from "../../../components/button/styled";
import { Input } from "../../../components/input/styled";
import { useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';

export default function RegistrarUser(){

    const [ email, setEmail] = useState('');
    const [ senha, setSenha] = useState('');
    const [ nome, setNome] = useState('');
    const [ cpf, setCpf  ]  = useState('');
    const [ tel, setTel] = useState('');

    const loading = useRef(null); 
    const navigation = useHistory();


    async function registrar() {
        loading.current.continuousStart();
        const r = await axios.post(`http://localhost:3030/cliente` , 
        { email : email, 
          senha: senha,
          nome: nome,
          cpf: cpf,
          tel : tel

        });


        if (r.data.status === 'ok') {
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
                        <div class="reg-titulo">Registrar</div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">Nome Completo:</div>
                            <div class="reg-campos-input">
                            <Input value={nome}
                            onChange={e => setNome(e.target.value)}
                             />
                            </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">E-mail:</div>
                            <div class="reg-campos-input">
                            <Input value={email}
                            onChange={e => setEmail(e.target.value)}
                             />
                        </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">Escolha uma Senha:</div>
                            <div class="reg-campos-input">
                            <Input value={senha}
                            onChange={e => setSenha(e.target.value)}
                             />
                            </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">CPF:</div>
                            <div class="reg-campos-input">
                            <Input value={cpf}
                            onChange={e => setCpf(e.target.value)}
                             />
                            </div>
                        </div>

                        <div class="reg-campos">
                            <div class="reg-campotitulo">Telefone: </div>
                            <div class="reg-campos-input">
                            <Input value={tel}
                            onChange={e => setTel(e.target.value)}
                             />
                            </div>
                        </div>

                        

                        <div class="reg-a"> 
                            <a onClick={registrar}> 
                                Criar conta
                            </a>
                        </div>

                        <div class="reg-conta">
                            <div class="a"> 
                                <Link to='/login'>Já possuo uma conta</Link>
                            </div>
                        </div>

                    </div>
                </div>
        </Container>
    )}