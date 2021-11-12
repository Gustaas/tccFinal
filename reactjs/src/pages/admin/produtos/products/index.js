import { Container } from "./styled";
import CabecalhoAdm from "../../../../components/cabeçalho adm";
import Api from "../../../../service/api";
import { useEffect, useState } from "react";

const api = new Api();

export default function Produtos () {
    
    const [produto, setProduto] = useState([]);

    /*Lista todos os produtos cadastrados no banco de dados e os retorna na tela administrativa de produtos
      listando-os em tabelas e separando-os em colunas*/
    const listar = async() => {
        const produtosr = await api.listarAdm();
        console.log(produtosr);
        setProduto(produtosr);
    }

    useEffect(() => {
        listar();
      },
      [])

    return (
        <Container>
            <CabecalhoAdm/>
            
            <div className="conteudo">
                <table>
                <thead className="cabecalho">
                <tr>
                        <th>ID DO PRODUTO</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                        <th>GÊNERO</th>
                        <th>CATEGORIA</th>
                        <th>TIME</th>
                        <th>AÇÕES</th>
                </tr>    
                </thead>
                {produto.map((item) => 
                    <tr>
                        <td> {item.id_produto} </td>
                        <td> {item.nm_produto} </td>
                        <td> {item.vl_preco}</td>
                        <td> {item.ds_genero} </td>
                        <td> {item.ds_categoria} </td>
                        <td> {item.ds_time} </td>
                        <td> <img src="" alt=""/> </td>
                    </tr>
                )}
            </table>
            </div>
        </Container>
    )
}