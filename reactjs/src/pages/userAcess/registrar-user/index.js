
import { Container } from "./styled";
import { Button } from "../../../components/button/styled";
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';

import { useState } from "react";

import Api from "../../../service/api";

const api = new Api();

export default function RegistrarUser(){

    const [ email, setEmail ] = useState('');
    const [ nome, setNome ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ tel, setTel ] = useState('');

    const [nomeComparar, setNomeComparar] = useState("");
    const [idAlterando, setIdAlterando] = useState(0);

    


    async function inserir() {
        
        if (email === "" || email === nomeComparar) toast.dark("😪 Email inválidoo 😪");
        if (nome === "")
         toast.dark("😪 Nome Inválido");
         
        if (cpf === isNaN || cpf === "" || cpf < 0)
          toast.dark("😪 Cpf inválido");

        if (tel === "" || tel === isNaN || tel < 0)
          toast.dark("😪 Telefone Inválido");
        
        setNomeComparar("");
        if (idAlterando === 0) {
            let r = await api.inserirU(
              nome,
              email,
              senha,
              cpf,
              tel);

            if (r.erro) toast.dark(r.erro);
            else {
              toast.dark("✍️Usuário registrado com sucesso, faça seu login agora mesmo !");
              limparCampos();
            }
            function limparCampos() {
                setNome("");
                setEmail("");
                setCpf("");
                setSenha("");
                setTel("");
            
                setIdAlterando(0);
  }} 

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
                            <input required value={nome}
                                   onChange={e => setNome(e.target.value)}  
                            
                             />
                             
                            </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">E-mail:</div>
                            <div class="reg-campos-input">
                            <input required type="email" value={email}
                                   onChange={e => setEmail(e.target.value)}  
                            
                             />
                             
                        </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">Escolha uma Senha:</div>
                            <div class="reg-campos-input"> <div/>
                            <input required type="password" value={senha}
                                   onChange={e => setSenha(e.target.value)}  
                            
                             />
                             
                            </div>
                        </div>
                        <div class="reg-campos">
                            <div class="reg-campotitulo">CPF:</div>
                            <div class="reg-campos-input">
                            <input required value={cpf}
                                   onChange={e => setCpf(e.target.value)}  
                            
                             />
                             
                            </div>
                        </div>

                        

                        <div class="reg-campos">
                            <div class="reg-campotitulo">Telefone: </div>
                            <div class="reg-campos-input">
                            <input required value={tel}
                                   onChange={e => setTel(e.target.value)}  
                            
                             />
                             
                            </div>
                        </div>

                        

                        <div class="reg-a"> 
                            <Button onClick={inserir}>
                                Criar conta
                            </Button>
                        </div>

                        <div class="reg-conta">
                            <div class="a"> 
                                <Link to='/login'> Fazer Login</Link>
                            </div>
                        </div>

                    </div>
                </div>
        </Container>
    )}
