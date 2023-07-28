function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const sexo = document.getElementById('sexo').value;
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseInt(document.getElementById('altura').value);
    const peso = parseInt(document.getElementById('peso').value);

    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);

    let dicaAlimentar, status;
    if (imc < 18.5) {
        dicaAlimentar = 'Mantenha uma dieta equilibrada e busque alimentos ricos em nutrientes.';
        status = 'Abaixo do peso';
    } else if (imc < 24.9) {
        dicaAlimentar = 'Continue com uma alimentação saudável e pratique atividades físicas regularmente.';
        status = 'Peso normal';
    } else if (imc < 29.9) {
        dicaAlimentar = 'Equilibre sua dieta e aumente a prática de exercícios para alcançar um peso saudável.';
        status = 'Sobrepeso';
    } else {
        dicaAlimentar = 'Consulte um profissional de saúde para orientações específicas sobre sua dieta e atividades físicas.';
        status = 'Obesidade';
    }

    const tabela = document.getElementById('tabelaAlunos');
    const newRow = tabela.insertRow(-1);
    newRow.innerHTML = `<td>${nome}</td><td>${sexo}</td><td>${idade}</td><td>${altura}</td><td>${peso}</td><td>${imc.toFixed(2)}</td><td>${dicaAlimentar}</td><td>${status}</td>`;
}
