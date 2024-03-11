document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('calculateButton').addEventListener('click', function() {
        const cpf = document.getElementById('cpfInput').value;
        const resultElement = document.getElementById('result');
        if (cpf.length === 9) {
            const firstDigit = calculateDigit(cpf, [10, 9, 8, 7, 6, 5, 4, 3, 2]);
            const secondDigit = calculateDigit(cpf + firstDigit, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
            resultElement.textContent = `Os últimos dígitos são: ${firstDigit}${secondDigit}`;
            resultElement.style.display = 'block';
        } else {
            alert('Por favor, insira exatamente 9 dígitos.');
            resultElement.style.display = 'none';
        }
    });
});

function calculateDigit(cpf, weights) {
    let sum = 0;
    for (let i = 0; i < cpf.length; i++) {
        sum += parseInt(cpf.charAt(i)) * weights[i];
    }
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
}