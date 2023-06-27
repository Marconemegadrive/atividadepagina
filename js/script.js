//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smmoth'
        }
    )
}

//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementyByName("usuario")[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementyById("senha").value;
    senha = senha.toLowerCase();

    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }

    if (logado == 0){
        alert("Acesso Negado. Dados incorretos");
    }
}


//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastro com sucesso!");
    window.location.href = "index.html";
}
