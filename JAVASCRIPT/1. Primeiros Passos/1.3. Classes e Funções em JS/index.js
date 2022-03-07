// Criando um objeto literal.
// Até o ES6, javacript não havia classes.
const livroEscolhido = {
    nome: "React Native",
    editora: "Casa do Código",
    paginas: 185,
    anunciar: function() {
        console.log("A alura indica o livro " + this.nome + "!")
    }
};

// Chamando função do objeto.
livroEscolhido.anunciar();

// Função que funciona como um construtor ou uma função que pode ser considerado uma Classe.
const Livros = function(nome, editora, paginas){
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function(){
        return gNome;
    }

    this.getEditora = function() {
        return gEditora;
    }

    this.getPaginas = function() {
        return gPaginas;
    }
}

// Instanciando uma classe, adicionando seus parâmetros.
const GraphQL = new Livros("GraphQL", "Casa do Código", 143);
console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas());

// prototype -> uma uma propriedade escondida do javascript que define qualquer tipo de palavra chame, com exceção de algumas delas.

const nome = "Alura";

const temp = new String(nome); // Isso que acontece por trás dos panos, eles cria uma instância do tipo String.
console.log(temp.toString()); // Toda String é uma array de caracteres.

////////////////////

// Sintaxe de classe -> apesar disso o typeof dele é uma function(função).
class Livro {
    // Construtor da classe.
    constructor(nome, editora, paginas){
        this.nome = nome,
        this.editora = editora,
        this.paginas = paginas
    }
    anunciarTitulo() {
        console.log(`Título: ${this.nome}.`);
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e possui ${this.paginas} páginas.`);
    }
}

// Inicia o objeto e chama as função do mesmo.
const nodeJS = new Livro("Primeiros passos com nodeJS", "Casa do Còdigo", 195);
nodeJS.anunciarTitulo();
nodeJS.descreverTitulo();

console.log(typeof Livro);

// hoisted -> não consegue instanciar antes da classe seja feito. (Açucar sintático)

// Classe que 'herda' da classe-mãe Livro com extends
class LivroColecao extends Livro {
    constructor(nome, nomeColecao){
        super(nome),
        this.nomeColecao = nomeColecao;
    }
    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}.`);
    }
}

// Inicia o objeto e chama as função do mesmo, é possível chamar função da classe-mãe.
const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar");
LogicaDeProgramacao.descreverColecao();
