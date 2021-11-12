import nodemailer from 'nodemailer';


{/*Vincula o host ao gmail e conecta nosso usuário para o envio de recuperação de senha*/}
const sender = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'destiny.contato21@gmail.com',
        pass: '#Destiny123',
    },

});



{/*Envia o email ao usuário*/}
async function enviarEmail(para, assunto, mensagem){
    const response = await sender.sendMail({
        from: '"TCC INSF" <destiny.contato21@gmail.com>',
        to: para,
        subject: assunto,
        html: mensagem
    })
    return response;
}

export default enviarEmail;