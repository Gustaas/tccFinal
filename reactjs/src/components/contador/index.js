
import { ContadorDiv } from "./styled";
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contador(props){
 const [qtd, setQtd] = useState(props.value);
 


  function adicionar(){
    if (qtd >= 10)
      return toast.warning("Número máximo de item atingido");
    setQtd(qtd + 1);
    
  }
  
  function remover(){
    if (qtd === 1)
      return toast.warning("Número mínimo de item atingido");
    setQtd(qtd - 1)
  }

  useEffect( ()=> {
    props.onChange(qtd);
  }, [qtd])
  
  return (
       
        <ContadorDiv>
          <ToastContainer/>
          <div className="menos">
            Qtd: {qtd}
          </div>
          <div className="menos" onClick={remover}>
            -
          </div>
    
          <div className="quantidade">
            {qtd}
          </div>
    
          <div className="mais" onClick={adicionar}>
            +
          </div>
          
        </ContadorDiv>
       
  )
}