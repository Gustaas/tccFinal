import axios from "axios";
import { Container } from "./styled";
import { Input } from "../../../components/input/styled";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";


import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";




export default function Esqueci() {
  const [email, setEmail] = useState("");
  

  const loading = useRef(null);
  const navigation = useHistory();

  async function recuperar() {
    loading.current.continuousStart();
    const r = await axios.post(`http://localhost:3030/esqueciASenha` , { email : email});
    if (r.data.status === 'ok') {
        navigation.push('/reset', { email: email})

    } else {
        toast.error('E-mail inválido');
        loading.current.complete();
    }
}

  return (
    <Container>
      <ToastContainer />
      <LoadingBar color="red" ref={loading} />

        
      <div class="conteudo-reg">
                <div className="logo"> <img src="../../assets/images/logo.svg" alt=""/> </div>
            <div class="box-reg">
                <div class="reg-titulo">Alterar senha</div>
                <div class="reg-campos">
                    
                    <div class="reg-campos-input">
                    E-mail: <Input type="text" value={email} onChange={e=> setEmail(e.target.value) }  /> 
                     </div>                 
                </div>
                <div class="reg-conta">
                <button onClick={recuperar}> Enviar Código </button>
                    </div>
                </div>
            </div>
            
        


    </Container>
  );
}
