# 1. Entendendo sobre javascript replace: manipulando Strings e Regex
> "String replace" é utilizado desde de realizar pequenas substituições em Strings até mudanças complexas com expressões regulares.

## Exemplo de String replace:

Entrada
```
    let texto = "Tenha um bom dia";
    let textoSemEspaco = texto.replace(/ /g,""); 
    console.log(`Texto sem espaços: ${textoSemEspaco} \n`);
```

Saida
```
Tenhaumbomdia
```

### Explicação
* A função .replace(), recebe dois parâmetros. O primeiro é o valor que procuramos, e o segundo é o que queremos colocar no lugar dele.
* No exemplo, o valor / /g(expressão regular para todos espaços global 'g') será substituido por ""(sem espaço).



