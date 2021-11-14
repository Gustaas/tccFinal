import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { Input } from "../../../components/input/styled";
import { Container } from "./styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'; 






export default function Reset(props) {
  
  const [validado, setValidado] = useState(false);
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

    const navigation = useHistory()
  
  async function validarCodigo(){
      const r = await axios.post(`http://localhost:3030/validarCodigo`, 
      {email: props.location.state.email, 
       codigo: codigo})
      if  (r.data.status === 'ok') {
          setValidado(true);
      } else {
          toast.error(r.data.mensagem);
      }

  }
  
  async function alterarSenha(){
    const r = await axios.put(`http://localhost:3030/resetSenha`, 
        {email: props.location.state.email, 
        codigo: codigo, 
        novaSenha: novaSenha})

    if (r.data.status === 'ok') {
        toast.dark('senha alterada');
        navigation.push('/login')
    } else {
        toast.error('E-mail Inválido')
    }

  }

  

  return (
      <Container>
  
      

  <div class="conteudo-reg">
      <ToastContainer/> 
      <LoadingBar/>
            <div class="box-reg">
        <div className="logosite"> <img src="../../assets/images/logo.svg" alt=""/> </div>
                <div class="cod-rec"> Código de confirmação</div>
                <div class="reg-campos">
                    <div class="reg-campotitulo">Digite o código de 4 digitos</div>
                    <div class="reg-campos-input">
                    <Input style={{borderRadius: '15px'}} value={codigo}
                            onChange={e => setCodigo(e.target.value)}
                             type="text"/>  
                    </div>
                </div>
                <div class="reg-conta">
                    <div class="a" onClick={validarCodigo}> Validar Código</div>
                    </div>
                </div>
            </div>


            {validado &&



            <div class="conteudo-reg">
            <div class="box-reg">
                <div class="cod-rec">Nova senha</div>
                <div class="reg-campos">
                    <div class="reg-campotitulo">Digite sua nova senha</div>
                    <div class="reg-campos-input">
                    <Input type="text" value={novaSenha} onChange={e => setNovaSenha(e.target.value)} /> 
                    </div>
                </div>
                <div class="reg-conta">
                    <div class="a"onClick={alterarSenha}> Alterar</div>
                    </div>
                </div>
            </div>
            }
        


    </Container>
  );
}
