# Classes e funções no Javascript

> **Observação:** Até o ES6, o javascript não havia classes.

## 1. Criando um objeto literal

Código
```
    const livroEscolhido = {
        nome: "React Native",
        editora: "Casa do Código",
        paginas: 185,
        anunciar: function() {
            console.log("A alura indica o livro " + this.nome + "!")
        }
    };
```

Chamando função do objeto literal
```
livroEscolhido.anunciar();
```

Resultado
```
A alura indica o livro React Native!
```

### Entendimento
* Por ser um objeto literal, não é possível instancia-lo, logo não é possível alterar suas informações de forma direta.

## 2. Criando uma função construtor

> **Observação:** Essa função pode ser compreendida como uma Classe.

Código
```
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
```

Instanciando uma classe, adicionando parâmetros
```
const GraphQL = new Livros("GraphQL", "Casa do Código", 143);
console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas());
```

Resultado
```
GraphQL
Casa do Código
143
```

### Entendimento
* Uma função construtor, que é compreendida como uma Classe, logo, pode ser instanciada várias vezes.

## 3. Criando uma Classe propriamente dita no javascript

Código
```
    class Livro {
        // Construtor da classe.
        constructor(nome, editora, paginas){
            this.nome = nome,
            this.editora = editora,
            this.paginas = paginas
        }
        anunciarTitulo() {
            console.log(`Título: ${this.nome}`);
        }
        descreverTitulo(){
            console.log(`${this.nome} é um livro da editora ${this.editora} e possui ${this.paginas} páginas.`);
        }
    }
```

Instanciando uma Classe, adicionando parâmetros, executando suas funções
```
const nodeJS = new Livro("Primeiros passos com nodeJS", "Casa do Còdigo", 195);
nodeJS.anunciarTitulo();
nodeJS.descreverTitulo();

console.log(typeof Livro);
```

Resultado
```
Título: Primeiros passos com nodeJS.
Primeiros passos com nodeJS é uma livro da editora Casa do Código e possui 195 páginas.
*function*
```

### Entendimento
* Criada uma Classe, é possível instancia-la equivalente a função construtor citada acima.
* **Observação:** apesar de ser uma Classe, seu tipo ainda é considerado uma function(descrita ao usar console.log(typeof Livro);).

## 4. Criando uma Classe e herdando valores de uma classe-mãe

Código
```
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
```

Instanciando uma Classe, adicionando parâmetros, executando suas funções
```
const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar");
LogicaDeProgramacao.descreverColecao();
```

Resultado
```
O livro Primeiros passos com nodeJS faz parte da coleção Comece a Programar.
```

### Entendimento
* Classe que herda de uma classe-mãe(Livros), e quando instanciada, pode utilizar de algumas funções da classe-mãe.
* Usa-se a propriedade 'extends' para que seja herdado as características da classe-mãe.