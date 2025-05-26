document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('peso');
    const heightInput = document.getElementById('altura');
    const calculateBtn = document.getElementById('calculate-btn');
    const valorImcTd = document.getElementById('valor-imc');
    const classificacaoImcTd = document.getElementById('classificacao-imc');

    if (calculateBtn && weightInput && heightInput && valorImcTd && classificacaoImcTd) {
        calculateBtn.addEventListener('click', () => {
            const peso = parseFloat(weightInput.value);
            const altura = parseFloat(heightInput.value); // Altura em metros

            // Limpa classes de cor anteriores
            classificacaoImcTd.className = '';

            // Validação
            if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
                valorImcTd.textContent = "-";
                classificacaoImcTd.textContent = "Insira valores válidos";
                // Opcional: Adicionar uma classe de erro para estilizar a mensagem de erro
                // classificacaoImcTd.classList.add('mensagem-erro');
                return;
            }

            // Calcular IMC: peso / (altura em metros * altura em metros)
            const imc = peso / (altura * altura);

            let classificacao = "";
            let classeCor = "";

            if (imc < 18.5) {
                classificacao = "Abaixo do peso";
                classeCor = 'abaixo-peso';
            } else if (imc >= 18.5 && imc < 24.9) {
                classificacao = "Peso normal";
                classeCor = 'peso-normal';
            } else if (imc >= 25 && imc < 29.9) {
                classificacao = "Sobrepeso";
                classeCor = 'sobrepeso';
            } else if (imc >= 30 && imc < 34.9) {
                classificacao = "Obesidade Grau I";
                classeCor = 'obesidade-grau-i';
            } else if (imc >= 35 && imc < 39.9) {
                classificacao = "Obesidade Grau II";
                classeCor = 'obesidade-grau-ii';
            } else {
                classificacao = "Obesidade Grau III";
                classeCor = 'obesidade-grau-iii';
            }

            valorImcTd.textContent = imc.toFixed(2); // Limita a 2 casas decimais
            classificacaoImcTd.textContent = classificacao;
            classificacaoImcTd.classList.add(classeCor); // Adiciona a classe para colorir
        });
    } else {
        console.error("Elementos da calculadora não encontrados.");
    }
});
