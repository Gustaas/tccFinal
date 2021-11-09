import axios from "axios";
import { Container } from "./styled";
import { Input } from "../../../components/input/styled";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";


import { ToastContainer} from "react-toastify";
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
        alert(r.data.mensagem);
        loading.current.complete();
    }
}

  return (
    <Container>
      <ToastContainer />
      <LoadingBar color="red" ref={loading} />

        <Container>
            <h1> Recuperação de SenhaA </h1>
            <div> </div>
            <div className="Email"> 
                E-mail: <Input type="text" value={email} onChange={e=> setEmail(e.target.value) }  /> 
            </div>
            <button onClick={recuperar}> Enviar Código </button>
            
        </Container>


    </Container>
  );
}
