import db from './db.js'
import express, { response } from 'express'
import cors from 'cors'
import Sequelize from 'sequelize';
import enviarEmail from "./email.js";

const { op, col, fn } = Sequelize;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/login-id/:email', async (req, resp) => {
    try {    
    let email = req.params.email;

    const r = await db.infoa_dtn_tb_cliente.findOne({ where: {ds_email: email}})
    resp.send(r);
    } catch (e) {
        resp.send(e);
    }
})


app.post('/esqueciASenha', async(req, resp) => {
    const user = await db.infoa_dtn_tb_cliente.findOne({
        where: {
            ds_email: req.body.email
        }
    });

    if(!user) {
        return resp.send({ erro: 'E-mail Inválido'});
    }
    let code = getRandomIntereger(1000, 9999);
    await db.infoa_dtn_tb_cliente.update({
        ds_codigo_rec: code

    }, {
        where: {id_cliente: user.id_cliente}
    })
    enviarEmail(user.ds_email, 'Recuperação de E-mail', `
        <h3> Recuperação de Senha </h3>
        <p> Você solicitou a recuperação de sua senha no site Destiny. </p>
        <p> Entre com o código ${code} para prosseguir com a recuperação.
    `)
        resp.send({ status: 'ok'})
})


function getRandomIntereger(min, max){
    return Math.floor(Math.random() * (max - min) + min );
}


app.post('/validarCodigo', async (req, resp) => {
    const user = await db.infoa_dtn_tb_cliente.findOne({
        where: {
            ds_email: req.body.email
        }
    });
    if(!user) {
        resp.send( {status: 'erro', mensagem: 'Email Inválido'});
    }
    if(user.ds_codigo_rec !== req.body.codigo) {
        resp.send({ status: 'erro', mensagem: 'código inválido'})
    }
    resp.send({ status: 'ok', mensagem: 'Código Validado'});
})



app.put('/resetSenha', async (req, resp) => {
    const user = await db.infoa_dtn_tb_cliente.findOne({
        where: {
            ds_email: req.body.email
        }
    });
    if(!user) {
        resp.send( {status: 'erro', mensagem: 'Email Inválido'});
    }

    let r = await db.infoa_dtn_tb_cliente.update({
        ds_senha: req.body.novaSenha}, {where: {id_cliente: user.id_cliente}} )
        
    resp.send({ status: 'ok', mensagem: 'A senha foi alterada'})
    
})
    

app.post('/login', async(req, resp) => {
    const user = await db.infoa_dtn_tb_cliente.findOne({
        where: {
            ds_email: req.body.email,
            ds_senha: req.body.senha
        }
    })
    if (!user) {
        resp.send({status: 'erro', mensagem: 'Credenciais Inválidas'});
    } else 
        resp.send({status: 'ok', nome: user.nm_cliente
    });
        
})

app.get('/cliente-adm', async (req, resp) => {
    try {
        let r = await db.infoa_dtn_tb_cliente.findAll();
        resp.send(r)
    } catch (e) {
        resp.send(e);
    }
})


app.get('/produto-adm', async (req, resp) => {
    try {
        const r = await db.infoa_dtn_tb_produto.findAll({order: [[ 'id_produto', 'desc' ]]});
        resp.send(r);
    } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.get('/produto-todos', async (req, resp) => {
    try {

        let page = req.query.page || 0;
        if (page <= 0) page = 1;

        const itemsPerPage = 15;
        const skipItems = (page-1) * itemsPerPage;

        const a = await db.infoa_dtn_tb_produto.findAll ({
            limit: itemsPerPage,
            offset: skipItems,
            order: [[ 'nm_produto', 'asc' ]],
        });
       
        const total = await db.infoa_dtn_tb_produto.findOne({
            raw: true,
            attributes: [
            [fn('count', 1 ), 'qtd']
            ]
        });
        resp.send({
            items: a,
            total: total.qtd,
            totalPaginas: Math.ceil(total.qtd/15),
            pagina: Number(page)
        });

    } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.get('/produto/:genero', async (req, resp) => {
    try {

        let page = req.query.page || 0;
        if (page <= 0) page = 1;

        const itemsPerPage = 15;
        const skipItems = (page-1) * itemsPerPage;

        const a = await db.infoa_dtn_tb_produto.findAll ({
            limit: itemsPerPage,
            offset: skipItems,
            where: { 'ds_genero': req.params.genero },
            order: [[ 'nm_produto', 'asc' ]],
        });
       
        const total = await db.infoa_dtn_tb_produto.findOne({
            raw: true,
            where: { 'ds_genero': req.params.genero },
            attributes: [
            [fn('count', 1 ), 'qtd']
            ]
        });
        resp.send({
            items: a,
            total: total.qtd,
            totalPaginas: Math.ceil(total.qtd/15),
            pagina: Number(page)
        });

    } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.get('/produto-time/:time', async (req, resp) => {
    try {

        let page = req.query.page || 0;
        if (page <= 0) page = 1;

        const itemsPerPage = 15;
        const skipItems = (page-1) * itemsPerPage;

        const a = await db.infoa_dtn_tb_produto.findAll ({
            limit: itemsPerPage,
            offset: skipItems,
            where: { 'ds_time': req.params.time },
            order: [[ 'nm_produto', 'asc' ]],
        });
       
        const total = await db.infoa_dtn_tb_produto.findOne({
            raw: true,
            where: { 'ds_time': req.params.time },
            attributes: [
            [fn('count', 1 ), 'qtd']
            ]
        });
        resp.send({
            items: a,
            total: total.qtd,
            totalPaginas: Math.ceil(total.qtd/15),
            pagina: Number(page)
        });

    } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.post('/produto', async (req, resp) => {
    try {
        let {nome, genero, descricao, categoria, preco, img, time} = req.body;

        let r = await db.infoa_dtn_tb_produto.create({
            nm_produto: nome,
            ds_titulo: nome,
            ds_genero: genero,
            ds_descricao: descricao,
            ds_categoria: categoria,
            vl_preco: preco,
            img_imagem: img,
            ds_time: time
        })
        resp.send(r);

        } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.put('/produto/:id', async (req, resp) => {
    try {
        let {nome, categoria, precode, precopor, avaliacao, descricao, estoque, imgproduto, ativo, inclusao} = req.body;
        let {id} = req.params;

        let r = await db.infoa_dtn_tb_produto.update(
            {
                nm_produto: nome,
                ds_categoria: categoria,
                vl_preco_de: precode,
                vl_preco_por: precopor,
                vl_avaliacao: avaliacao, 
                ds_produto: descricao,
                qtd_estoque: estoque,
                img_produto: imgproduto,
                bt_ativo: ativo,
                dt_inclusao: inclusao
            },
            {
                where: { id_produto: id }
            }
        )
        resp.sendStatus(200);
    } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.delete('/produto/:id', async (req, resp) => {
    try {
        let {id} = req.params;

        let r = await db.infoa_dtn_tb_produto.destroy({
            where: { id_produto: id}
        })
        resp.sendStatus(200)
    } catch (e) {
        resp.send({erro: e.toString()});
    }
})

app.get('/cliente', async (req, resp) => {
    try{
        let {email, senha} = req.body;
        let clientes = await db.infoa_dtn_tb_cliente.findOne({where: { ds_email: email, ds_senha: senha}})
        resp.send(clientes);
    } catch (e) {
        resp.send('Ocorreu um erro');
    }
})

<<<<<<< HEAD

=======
/*app.post('/novo-cliente', async (req, resp) => {
    try {
        let {email, senha, nome, cpf, telefone} = req.body

        let u = await db.infoa_dtn_tb_cliente.findOne({where: {nm_cliente: nome} })
        if (u != null)
            return resp.send({erro: 'Usuário já existe'}) 
        let r = await db.infoa_dtn_tb_cliente.create({
            ds_email: email,
            ds_senha: senha,
            nm_cliente: nome,
            ds_cpf: cpf,
            ds_telefone: telefone,
            ds_codigo_rec: null
        })
        resp.send(r);
    } catch (e) {
        resp.send(e);
    }
})*/
>>>>>>> fd64a8acfa5ea56fdc237232c2cc7e7324535253

app.post('/cliente', async (req, resp) => {
    try {
        let {email, senha, nome, cpf, telefone} = req.body

        let u = await db.infoa_dtn_tb_cliente.findOne({where: {nm_cliente: nome} })
        if (u != null)
            return resp.send({erro: 'Usuário já existe'}) 
        let r = await db.infoa_dtn_tb_cliente.create({
            ds_email: email,
            ds_senha: senha,
            nm_cliente: nome,
            ds_cpf: cpf,
            ds_telefone: telefone,
            ds_codigo_rec: null
        })
        resp.send(r);
    } catch (e) {
        resp.send(e);
    }
})

app.listen(process.env.PORT, x => console.log(`subiu na porta ${process.env.PORT}`));