import { Container } from "./styled";
import { Button } from "../../../components/button/styled";
import { Link } from 'react-router-dom';
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';

import { useState } from "react";
import { useHistory } from "react-router";

import Api from "../../../service/api";
const api = new Api();

export default function RegistrarUser(){

    const [ email, setEmail ] = useState('');
    const [ nome, setNome ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ tel, setTel ] = useState('');

    const navigation = useHistory();

    const cadastar = async () => {
        let r = await axios.post('http://localhost:3030/usuario' , 
        {   email : email, 
            senha: senha,
            nome: nome,
            cpf: cpf,
            telefone : tel

        });
        if (r.erro) {
            alert(`${r.erro}`)
        } else {
            navigation.push('/login')
        }
    }

    
    

    

    

    
    return(
        <Container>
                <ToastContainer/>
                    <LoadingBar color="red"/>
        
                <div class="conteudo-reg">
                    <div class="box-reg">
                        <div class="reg-titulo">Registrar</div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">Nome Completo:</div>
                            <div class="reg-campos-input">
                            <input value={nome}
                                   onChange={e => setNome(e.target.value)}  
                            
                             />
                             <span></span>
                            </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">E-mail:</div>
                            <div class="reg-campos-input">
                            <input type="email" value={email}
                                   onChange={e => setEmail(e.target.value)}  
                            
                             />
                             <span></span>
                        </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">Escolha uma Senha:</div>
                            <div class="reg-campos-input"> <div/>
                            <input type="password" value={senha}
                                   onChange={e => setSenha(e.target.value)}  
                            
                             />
                             <span></span>
                            </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">CPF:</div>
                            <div class="reg-campos-input">
                            <input value={cpf}
                                   onChange={e => setCpf(e.target.value)}  
                            
                             />
                             <span></span>
                            </div>
                        </div>

                        

                        <div class="reg-campos">
                            <div class="reg-campotitulo">Telefone: </div>
                            <div class="reg-campos-input">
                            <input value={tel}
                                   onChange={e => setTel(e.target.value)}  
                            
                             />
                             <span></span>
                            </div>
                        </div>

                        

                        <div class="reg-a"> 
                            <Button onClick={cadastar}>
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