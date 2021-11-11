
import {Container} from './styled';

export default function ClientesAdmin () {
    return (
        <Container>
            <table>
        <thead>
            <th>ID CLIENTE</th>
            <th>NOME DO CLIENTE</th>
            <th>CPF DO CLIENTE </th>
            <th>CIDADE</th>
            <th>UF</th>
            <th>CEP</th>
            <th>TELEFONE</th>
            <th>E-MAIL</th>
            <th>AÇÕES</th>
        </thead>

        <tr className="cor-alternada">
            <td>1</td>
            <td>RAFAELLA</td>
            <td>123.456.789-10</td>
            <td>SÃO PAULO</td>
            <td>SP</td>
            <td>04571-150</td>
            <td>(11)9 1234-5679</td>
            <td>EXEMPLO1@GMAIL.COM</td>
            <td>  </td>
        </tr>

</table>

        </Container>
    )
}