import axios from "axios";
import { Container } from "./styled";
import { Button } from "../../../components/button/styled";

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
    const [ endereco, setEndereco] = useState('');

    const loading = useRef(null); 
    const navigation = useHistory();


    async function registrar() {
        try {
        if (email !== '' && senha !== '' && nome !=='' && cpf !== '' && tel !== '' && endereco !== '')
        {
            loading.current.continuousStart();
            const r = await axios.post(`https://destinyfrei.herokuapp.com/cliente` , 
            { email : email, 
            senha: senha,
            nome: nome,
            cpf: cpf,
            endereco: endereco,
            telefone : tel
            });

            
                navigation.push('/')
                loading.current.complete()
        } else {
            toast.error('Campos Inválidos')
        }
        } catch (e) {
            toast.error(e);
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
                            <input type="text" required minlength="4" maxLength="35" value={nome}
                            onChange={e => setNome(e.target.value)}
                             />
                             <span></span>
                            </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">E-mail:</div>
                            <div class="reg-campos-input">
                            <input type="email" required value={email}
                            onChange={e => setEmail(e.target.value)}
                             />
                             <span></span>
                        </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">Escolha uma Senha:</div>
                            <div class="reg-campos-input"> <div/>
                            <input type="password" required value={senha}
                            onChange={e => setSenha(e.target.value)}
                             />
                             <span></span>
                            </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">CPF:</div>
                            <div class="reg-campos-input">
                            <input type="text" required value={cpf}
                            onChange={e => setCpf(e.target.value)}
                             />
                             <span></span>
                            </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">ENDEREÇO:</div>
                            <div class="reg-campos-input">
                            <input type="text" required value={endereco}
                            onChange={e => setEndereco(e.target.value)}
                             />
                             <span></span>
                            </div>
                        </div>

                        <div class="reg-campos">
                            <div class="reg-campotitulo">Telefone: </div>
                            <div class="reg-campos-input">
                            <input type="text" required value={tel}
                            onChange={e => setTel(e.target.value)}
                             />
                             <span></span>
                            </div>
                        </div>

                        

                        <div class="reg-a"> 
                            <Button onClick={registrar}> 
                                Criar conta
                            </Button>
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