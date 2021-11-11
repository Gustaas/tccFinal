import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030/'
})

export default class Api {
    async listar(pagina, genero){

        let r = await api.get(`/produto/${genero}?page=${pagina}`);
        return r.data;
    }

    async listarTodos(pagina) {
        let r = await api.get(`/produto-todos/?page=${pagina}`);
        return r.data;
    }

    async listarAdm() {
        let r = await api.get('/produto-adm');
        return r.data;
    }

    async listarTime(pagina, time){

        let r = await api.get(`/produto-time/${time}?page=${pagina}`);
        console.log(r)
        return r.data;
    }

    async inserir( nome, genero, descricao, categoria, preco, img, time){
        let r = await api.post('/produto', { nome, genero, descricao, categoria, preco, img, time} );
        return r.data;
    }

    async alterar(id, nome, descricao, categoria, preco, img) {
       let r = await api.put(`/produto/${id}`, { nome, categoria, preco, img, descricao});
       return r.data;
    }

    async remover(id){
        let r = await api.delete(`/produto/${id}`);
        return r.data; 
    }
    
    async login(usuario, senha){
        let r = await api.post('/login', { usuario, senha })
        return r.data
    }


}