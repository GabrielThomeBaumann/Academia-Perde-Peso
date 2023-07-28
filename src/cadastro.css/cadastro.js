function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const cidade = document.getElementById('cidade').value;
    const sexo = document.getElementById('sexo').value;

    if (!nome || !email || !idade || !cidade || !sexo) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (idade < 18) {
        alert("Você precisa ter mais de 18 anos para se cadastrar.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}
