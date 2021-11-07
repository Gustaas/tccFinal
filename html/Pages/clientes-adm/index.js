
import {Container} from './styled';

export default function ClientesAdmin () {
    return (
        <Container>
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
            <th>A</th>
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

        <tr className="cor-alternada">
            <td>2</td>
            <td>GUSTAVO</td>
            <td>109.876.543-21</td>
            <td>SÃO PAULO</td>
            <td>SP</td>
            <td>04571-151</td>
            <td>(11) 9 1234-5378</td>
            <td>EXEMPLO1@GMAIL.COM</td>
            <td>  </td>
        </tr>

        <tr className="cor-alternada">
            <td>3</td>
            <td>GUILHERME</td>
            <td>100.200.300-40</td>
            <td>SÃO PAULO</td>
            <td>SP</td>
            <td>04571-152</td>
            <td>(11) 9 1004-5678</td>
            <td>EXEMPLO1@GMAIL.COM</td>
            <td>  </td>
        </tr>

        <tr className="cor-alternada">
            <td>4</td>
            <td>RODRIGO</td>
            <td>500.600.700-80</td>
            <td>SÃO PAULO</td>
            <td>SP</td>
            <td>04571-153</td>
            <td>(11) 9 1984-5378</td>
            <td>EXEMPLO1@GMAIL.COM</td>
            <td> </td>
        </tr>

        <tr className="cor-alternada">
            <td>5</td>
            <td>RAPHAEL</td>
            <td>987.653.128-86</td>
            <td>SÃO PAULO</td>
            <td>SP</td>
            <td>04571-154</td>
            <td>(11) 9 1664-5678</td>
            <td>EXEMPLO1@GMAIL.COM</td>
            <td>  </td>
        </tr>

        <tr className="cor-alternada">
            <td>6</td>
            <td>IGOR</td>
            <td>321.645.978-00</td>
            <td>SÃO PAULO</td>
            <td>SP</td>
            <td>04571-155</td>
            <td>(11) 9 1554-5678</td>
            <td>EXEMPLO1@GMAIL.COM</td>
            <td>  </td>
        </tr>

        <tr className="cor-alternada">
            <td>7</td>
            <td>BRUNO</td>
            <td>109.777.569-71</td>
            <td>SÃO PAULO</td>
            <td>SP</td>
            <td>04571-156</td>
            <td>(11) 9 1434-5678</td>
            <td>EXEMPLO1@GMAIL.COM</td>
            <td>  </td>
        </tr>

        <tr className="cor-alternada">
            <td>8</td>
            <td>LUCAS</td>
            <td>999.880.486-01</td>
            <td>SÃO PAULO</td>
            <td>SP</td>
            <td>04571-157</td>
            <td>(11) 9 1334-5678</td>
            <td>EXEMPLO1@GMAIL.COM</td>
            <td>  </td>
        </tr>


        </Container>
    )
}