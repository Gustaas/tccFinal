import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030/'
})

export default class Api {

    /*Listagem de Produtos por parametro de gênero*/
    async listar(pagina, genero){

        let r = await api.get(`/produto/${genero}?page=${pagina}`);
        return r.data;
    }

    /*Busca todos os produtos e lista-os na página de todos os produtos*/
    async listarTodos(pagina) {
        let r = await api.get(`/produto-todos/?page=${pagina}`);
        return r.data;
    }

    /*Busca o email do usuário para permitir seu login no site*/
    async getId(email) {
        let r = await api.get(`/login-id/${email}`);
        return r.data;
    }

    /*Busca todos os produtos cadastrados no banco de dados e os retorna na tela administrativa de produtos*/
    async listarAdm() {
        let r = await api.get('/produto-adm');
        return r.data;
    }

    /*Busca todos os clientes cadastrados no banco de dados e os retorna na tela administrativa de clientes*/
    async listarClientesAdm () {
        let r = await api.get('/cliente-adm');
        return r.data;
    }

    

    /*Busca todos os produtos no banco de dados e os retorna filtrados pela categoria de time*/
    async listarTime(pagina, time){

        let r = await api.get(`/produto-time/${time}?page=${pagina}`);
        return r.data;
    }

    /*Cadastra os produtos no banco no banco de dados*/
    async inserir( nome, genero, descricao, categoria, preco, img, time){
        let r = await api.post('/produto', { nome, genero, descricao, categoria, preco, img, time} );
        return r.data;
    }

    /*Altera um produto no banco de dados baseado em seu Id*/
    async alterar(id, nome, descricao, categoria, preco, img) {
       let r = await api.put(`/produto/${id}`, { nome, categoria, preco, img, descricao});
       return r.data;
    }

    /*Deleta um produto do banco de dados baseado em seu Id*/
    async remover(id){
        let r = await api.delete(`/produto/${id}`);
        return r.data; 
    }

    
    async inserirU(nome, email, cpf, senha, tel){
        let r = await api.post('/usuario', { nome, email, cpf, senha, tel } );
        return r.data;
    }

    async login(email, senha) {
        let r = await api.post('/login', {email, senha})
        return r.data;
    }
}