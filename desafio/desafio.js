// Crie um formulário simples ccom campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.
function capturarValores(){
    let nomeCompleto = document.getElementById("campoNome").value;
    let idade = document.getElementById("campoIdade").value;
    document.getElementById("mostrarElementos").textContent = `Prazer, ${nomeCompleto}! Você tem ${idade}`;
}
// Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.
// document.getElementById("mostrarElementos").textContent = `Prazer, ${nomeCompleto}! Você tem ${idade}`;
// Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.
let num1 = 80;
let num2 = 20;
let soma = num1 + num2;
console.log(`A soma dos números "${num1}" e "${num2}", é "${soma}".\n`);
// Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.
let fraseInteira = "Nunca um; Sem o outro"
let fraseSeparadas = fraseInteira.split(";");
console.log(fraseSeparadas);
// Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.
let numeros = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
let numerosSeparados = numeros.split(",");
console.log(numerosSeparados);