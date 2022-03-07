// 1. Entendendo sobre Javascript replace: manipulando Strings e Regex
// "String replace" é utilizado desde de pequena substituições em Strings até complexa mudanças com expressões regulares.
// Exemplo de String replace:  

let texto = "Tenha um bom dia";

// No exemplo, o valor / /g(expressão regular para espaços) será substituido por ""(sem espaço).
let textoSemEspaco = texto.replace(/ /g,""); 
console.log(`Texto sem espaços: ${textoSemEspaco} \n`);

// 2. Susbstituindo palavras com String replace
const CPFSemFormatacao = "Seu CPF é 07951681369";

const CPFformatado = CPFSemFormatacao.replace("07951681369", "079.516.813-69"); // No exemplo, o valor do CPF será formatado.
console.log(CPFformatado + "\n");

// A função .replace(), recebe dois parâmetros. O primeiro é o valor que procuramos, e o segundo é o que queremos colocar no lugar dele.

const frase = "frase com palavra-feia";

const fraseFormatada = frase.replace("palavra-feia", "*********"); // Nesse outro exemplo, substituimos a palavra-feia por *******.
console.log(fraseFormatada + "\n"); // O resultado será: frase com *********.

// 3. Substituindo todas as ocorrências com o apoio das Regex
// Um problema comum quando utlizamos .replace(), é quando há duplicação de palavras.
// Exemplo:

const fraseDuplicada = "frase com palavra-feia e mais outra palavra-feia"; // Duas 'palavras-feia' na mesma frase.
const fraseDuplicadaFormatada = fraseDuplicada.replace("palavra-feia", "*******"); // No exemplo, é feito o mesmo esquema de substituição do exemplo anterior.

// O resultado foi 'frase com ******* e mais outra palavra-feia', logo não houve a formatação da segunda 'palavra-feia'.
console.log("Formatação errada!")
console.log(fraseDuplicadaFormatada + "\n");
// Justificativa: a função .replce(), por padrão, busca sempre a primeira ocorrência do valor String na variável.

// Dessa forma, para que aja mais dinâmica no processo de seleção, usa-se as expressões regulares(Regex).
// Estas ajudam a encontrar padrões em texto de forma mais ampla e completa.
// Solução:

const fraseAtualizada = fraseDuplicada.replace(/palavra-feia/g,"*******"); // Usamos regex para encontrar e substituir as ocorrência da 'palavra-feia', 'g' indica busca em escala global.
console.log("Formatação correta!")
console.log(fraseAtualizada + "\n"); // resultado correto!

// 4. Regex: expressões regulares.
// Geralmente muitos devs usam o Regex, mas logo esquecem, e em alguns momentos que necessitam utiliza-la(por exemplo, no caso do CPF) usam alguma lib de validação(Yup ou Joi).
// Alguns padrões do Regex:
/**
 * /palavra/g -> procurar a ocorrência do elemento em escala global('g').
 * /19123348/g -> funciona em número também.
 * 
 * [A-Z0-9!-] -> para caso necessita de abrangência com caracteres especiais, sem uma ordem pré-definida, usa-se esse range.
 * [A-Z0-9!-]{3} -> {3} significar a quantidade de ocorrência você quer procurar.
 * 
 * \w -> busca apenas elementos alfa numéricos.
 * \d -> busca apenas digitos.
 * 
 * (\d{4})-(\d{4}) -> busca dentrode grupos de um match para trabalhar em casos separadamente.
 * 
 * Algumas expressões a mais:
 * ? -> define algum valores que possa ser opcional
 * 
 */

// 5. Resgatando group matches com função replace
// Utilizaremos a função .replace(), juntamente a uma expressão regular para atualizar a formatação de uma CPF

const cpf = "07951681369";
// É adicionado '?' para caso aja um valor opcional que nao precise ser alterado, as '$' simbolizam cada grupo match de regex existente
const cfpAtualizado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4"); 
console.log(cfpAtualizado);




