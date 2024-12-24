numero = Number(prompt("digite um numero inteiro positivo, para calcular o fatorial:"));

if (Number.isInteger(numero) && numero >= 0) {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    alert("O fatorial de " + numero + " e: " + fatorial);
} else {
    alert("Por favor, digite um numero inteiro positivo valido.");
}
