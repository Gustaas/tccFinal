import {Container} from './styled';
import CabecalhoAdm from "../../../components/cabeçalho adm";
import { useEffect, useState } from "react";
import Api from '../../../service/api';

const api = new Api();

export default function ClientesAdmin () {
    const [cliente, setCliente] = useState([]);

    const listar = async() => {
        const produtosr = await api.listarClientesAdm();
        setCliente(produtosr);
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