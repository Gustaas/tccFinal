import { Container } from "./styled";
import { Titulo } from "../../../../components/titulo/styled";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CabeçalhoAdm from '../../../../components/cabeçalho adm/index'
import Api from "../../../../service/api";
import { useState} from "react";

const api = new Api();

export default function CadastrarProduto () {
    
    const [ nome, setNome ] = useState ('');
    const [ preco, setPreco ] = useState (0);
    const [ genero, setGenero ] = useState ('');
    const [ categoria, setCategoria ] = useState ('');
    const [ time, setTime ] = useState ('');
    const [ img, setImg] = useState ('');
    const [ desc, setDesc ] = useState ('')



    /* Insere os produtos no banco de dados, armazenando: Nome, Preço, Categoria, Gênero, Imagem, Descrição e Time.
        É válido ressaltar que a função exige que todos os campos estejam completos, se não, retornará que existe um e/ou os campos estão inválidos
    */

    async function inserir() {
        if (nome !=='' && preco > 0 && categoria !=='' && genero !== '' && img !=='' && desc !=='' && time !=='' )
            {
                let r = await api.inserir(nome, genero, desc, categoria, preco, img, time);
                if (r.erro)
                    toast.dark('Erro')
                else
                    toast.dark('Produto Inserido')
                    limparCampos();
        } else {
            toast.dark('Campos Inválidos')
        }
    }

    function limparCampos () {
        setNome('')
        setPreco('')
        setCategoria('')
        setGenero('')
        setImg('');
        setDesc('');
        setTime('');
    }

    return (
        <Container>
            <CabeçalhoAdm/>
            <ToastContainer/>
            <div className="container">
            <Titulo>ADICIONAR PRODUTO</Titulo>
                <div className="box-cadastro">
                            
                            <div className="box-info">

                                    <div className="dados">
                                        <div className="nome">
                                            NOME DO PRODUTO:
                                            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                                        </div>

                                        <div className="preco">
                                            PREÇO DO PRODUTO
                                            <input type="text" value={preco} onChange={e => setPreco(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="opcoes">

                                        <div className="sexo">
                                            Genero:
                                            <input type="text" value={genero} onChange={e => setGenero(e.target.value)} />
                                        </div>
                                        <div className="cores">
                                            Time:
                                            <input type="text" value={time} onChange={e => setTime(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="opcoes2">

                                        <div className="categoria">
                                            CATEGORIA:
                                            <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="link">
                                        IMAGEM DO PRODUTO:
                                        <input type="text" value={img} onChange={e => setImg(e.target.value)}/>
                                    </div>

                                    <div className="descricao">
                                        DESCRIÇÃO:
                                        <textarea value={desc} onChange={e => setDesc(e.target.value)}/>
                                    </div>
                            </div>

                            <div className="box-acoes">
                                <div className="imagem">
                                    <img src={img} alt=""/>
                                </div>

                                <div className="cadastrar">
                                    <button onClick={inserir}>
                                        <span >CADASTRAR</span>
                                    </button>
                                </div>

                                <div className="cancelar">
                                    <button>
                                        <span>CANCELAR</span>
                                    </button>
                                </div>

                            </div>
                </div>
            </div>
        </Container>
    )
}