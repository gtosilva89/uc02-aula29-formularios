const formulario = document.getElementById("form");

const btnCadastrar = document.getElementById("btnCadastrar")

const inputNome = document.getElementById("name")
const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("password")

const tableListaPessoas = document.getElementById("listaPessoas")

const listaPessoas = []

// função que trata o evento onClick do botão cadastrar
function cadastrar(event) {
    event.preventDefault()
    // Obtendo os dados do formulário
    const nome = inputNome.value
    const email = inputEmail.value
    const senha = inputSenha.value

    // Validação, verificando se os campos tem conteúdo
    if (!nome.trim()) {
        alert("Informe seu nome!")
        inputNome.focus()
        return
    }

    if (!email.trim()) {
        alert("Informe seu email!")
        inputEmail.focus()
        return
    }

    if (!(senha.trim())) {
        alert("Informe uma senha!")
        inputSenha.focus()
        return
    }

    // Caso os dados estejam válidos, procura na lista 
    // se já existe um cadastro com o mesmo email
    let pessoaEncontrada = null

    // pesquisa com o for/each
    // for (pessoa of listaPessoas) {
    //   if (pessoa.email === email.toLowerCase()) {
    //     pessoaEncontrada = pessoa
    //     break
    //   }
    // }
    // find
    pessoaEncontrada = listaPessoas.find((pessoa) => {
        if (pessoa.email === email.toLowerCase()) {
            return pessoa
        }
    })

    // Caso exista, mostra mensagem de erro com alert
    if (pessoaEncontrada) {
        alert('Já existe uma pessoa cadastrada com este email')
        return
    }

    // Caso não exista, adiciona no array listaPessoas
    listaPessoas.push({
        nome: nome,
        email: email,
        senha: senha
    })

    // E adiciona na tabela no HTML

    const trPessoa = document.createElement("tr")
    const tdNome = document.createElement("td")
    tdNome.textContent = nome
    trPessoa.appendChild(tdNome)


    const tdEmail = document.createElement("td")
    tdEmail.textContent = email
    trPessoa.appendChild(tdEmail)

    tableListaPessoas.appendChild(trPessoa)
}

const cadastrarAnonimo = (event) => {
    console.log(event)
}

btnCadastrar.addEventListener('click', cadastrar)