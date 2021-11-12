import { Container } from "../produtos-femininos/styled";
import Cabecalho from "../../../components/cabecalho";
import { useState, useEffect, useRef } from "react";
import LoadingBar from 'react-top-loading-bar';
import Produto from "../produto-compo";
import Paginas from "../paginacao";
import Api from "../../../service/api";

const api = new Api();

export default function Infantil() {

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
      const produtosr = await api.listar(pagina, 'Infantil');
      setProduto(produtosr.items);
      setTotalPaginas(produtosr.totalPaginas);
    }  
    listar();
  },
  [pagina])

  return (
    <Container>
      <Cabecalho />
      <LoadingBar color="#fffb2a" ref={loading} />
      <div class="titulo-pagina">PRODUTOS INFANTIS</div>

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
