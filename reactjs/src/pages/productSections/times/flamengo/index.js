import { Container } from "../../produtos-femininos/styled";
import Cabecalho from "../../../../components/cabecalho";
import { useState, useEffect, useRef } from "react";

import Api from "../../../../service/api";
import Paginas from "../../paginacao/index";
import LoadingBar from 'react-top-loading-bar';

const api = new Api();


export default function Flamengo() {

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
      const produtosr = await api.listar(pagina, 'F');
      setProduto(produtosr.items);
      setTotalPaginas(produtosr.totalPaginas);
    }
    listar();
  },
  [pagina])

  return (
    <Container>
      <Cabecalho />
      <LoadingBar color="#ff440e" ref={loading} />
      
      <div class="titulo-pagina">Flamengo</div>

     

      <div class="container-produto">
        {produto.map((item) =>
          <div class="box">
            <div class="prod">
                <img src={item.img_imagem} alt=''/> 
                <div class="nome-produto">{item.nm_produto}</div>
                <div class="valor">{item.vl_preco}</div>
                
                <div class="adc-carrinho">
                    <button> Adicionar ao carrinho </button>
                </div>
            </div>
          </div>
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