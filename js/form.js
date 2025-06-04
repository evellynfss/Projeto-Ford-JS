
class contato {
    constructor(nome, sobrenome, email, cpf, telefone, preferenciaContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.preferenciaContato = preferenciaContato;
    }
}

function Post(form) {
    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("cpf").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("contato").value
    );

    console.log(data); 
    alert('Obrigado sr(a) ' + data.nome + '' + data.sobrenome + ', seus dados foram encaminhados com sucesso!');

    form.reset(); 
    return false; 
}
