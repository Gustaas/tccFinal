import { Container } from "../../produtos-femininos/styled";
import Cabecalho from "../../../../components/cabecalho";
import { useState, useEffect, useRef } from "react";
import Produto from '../../produto-compo';
import Api from "../../../../service/api";
import Paginas from "../../paginacao/index";
import LoadingBar from 'react-top-loading-bar';

const api = new Api();


export default function SaoPaulo() {

  const [produto, setProduto] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const loading = useRef(null); 

  

  function irPara(pagina) {
    setPagina(pagina);
  }

  useEffect(() => { 
    const listar = async() => {
      loading.current.complete();
      const produtosr = await api.listarTime(pagina, 'Sao Paulo');
      console.log(produtosr);
      setProduto(produtosr.items);
      setTotalPaginas(produtosr.totalPaginas);
    }
    listar();
  },
  [pagina])

  return (
    <Container>
      <Cabecalho />
      <LoadingBar color="#ff190b" ref={loading} />
      
      <div class="titulo-pagina">São Paulo</div>

     

      <div class="container-produto">
        {produto.map((item) =>
          <Produto info={item}/>
        )}
      </div>
      <div class="paginacao">
          <Paginas 
            totalPaginas={totalPaginas} 
            pagina={pagina}
            onPageChange={irPara}
          />
      </div>
    </Container>
  );
}