import {Container} from './styled';
import CabecalhoAdm from "../../../components/cabeçalho adm";
import { useEffect, useState } from "react";
import Api from '../../../service/api';

const api = new Api();

export default function ClientesAdmin () {
    const [cliente, setCliente] = useState([]);


    // Busca todos os clientes cadastrados no banco de dados e os retorna na tabela em forma de colunas
    const listar = async() => {
        const client = await api.listarClientesAdm();
        setCliente(client);
    }

      useEffect(() => {
        listar();
      },
      [])

      

    return (
        <Container>
            <CabecalhoAdm/>
            <table>
        <thead>
            <th>ID CLIENTE</th>
            <th>NOME DO CLIENTE</th>
            <th>CPF DO CLIENTE </th>
            <th>TELEFONE</th>
            <th>E-MAIL</th>
            <th>AÇÕES</th>
        </thead>
        {cliente.map((item) =>
            <tr className="cor-alternada">
                <td> {item.id_cliente} </td>
                <td> {item.nm_cliente} </td>
                <td> {item.ds_cpf} </td>
                <td> {item.ds_telefone} </td>
                <td> {item.ds_email} </td>
                <td>  </td>
            </tr>
        )}

        </table>
        </Container>
    )
}