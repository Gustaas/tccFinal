import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { Input } from "../../../components/input/styled";
import { Container } from "./styled";






export default function Reset(props) {
  
  const [validado, setValidado] = useState(false);
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

    const navigation = useHistory()
  
  async function validarCodigo(){
      const r = await axios.post(`http://localhost:3030/validarCodigo`, 
      {email: props.location.state.email, 
       codigo: codigo})
      if (r.data.status === 'ok') {
          setValidado(true);
      } else {
          alert(r.data.mensagem);
      }

  }
  
  async function alterarSenha(){
    const r = await axios.put(`http://localhost:3030/resetSenha`, 
        {email: props.location.state.email, 
        codigo: codigo, 
        novaSenha: novaSenha})

    if (r.data.status === 'ok') {
        alert('senha alterada');
        navigation.push('/login')
    } else {
        alert(r.data.mensagem)
    }

  }

  

  return (
    <Container>
  
      


            <h1> Reset </h1>
            <div> 
                Código de Recuperação:    <Input value={codigo}
                            onChange={e => setCodigo(e.target.value)}
                             type="text"/>  
            </div>
            <button onClick={validarCodigo}> Validar Código </button>
                <br/>
                    {validado &&

                    <div> 
                        <h3> Altere sua senha </h3>

                        <div> Nova senha:  <Input type="text" value={novaSenha} onChange={e => setNovaSenha(e.target.value)} />    
                        </div>

                        <button onClick={alterarSenha}> Alterar </button>
                    </div>
                    }
            
        


    </Container>
  );
}
