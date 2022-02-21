# 1. Marcação do primeiro texto(HTML)
- HTML utiliza *tags* para marcar informações
- h1 define um título principal para página.
- p define um parágrafo
- Para que informações fiquem em negrito, usa-se tag strong
- Para que informações fiquem em itálico, usa-se tag em

# 2. Separando o conteúdo e informações
- DOCTYPE define a versão HTML utilizada na página.
- html define a estrutura HTML
    - Atributo lang, permite a definição de uma linguagem para página, no caso usamos pt-br
- Informações do encoding são feitas por meio da tag meta
    - Utilizamos o atributo charset para definir caracteres dentro da página, usamos UTF-8 como padrão
- title define o título da página(Aba superior).
- head separa informações passadas ao navegador(metadados), enquanto body separar o conteúdo da página.

# 3. Trabalhando com CSS
- Alguns atributos em CSS:
    - Alinhamento: text-align
    - Fonte: font-size
    - Cor de fundo: background/background-color
    - Cor do texto: color
- Css inline é o uso do CSS dentro das tag HTML
- style é a tag utlizada para definir propriedades do CSS dentro das tags
- Representação de cores no CSS:
    - RGB - rgb(0..255,0..255,0..255)
    - Hexadecimal - 0123456789ABCDF -> #FF00FF
    - Nome da cor(English)

# 4. Estilizando páginas
- id & class, são identificadores que serve para marca um determinado elementos dentro do HTML
- id é um identificador único, sendo assim, pode haver vários, porém, com nomes diferente.
- class é um identificador diversificado, podendo assim ser colocado em mais de um elementos com nomes iguais.
- img é uma tag apara adicionar imagens no site, sempre acompanhada dos atributos src(Source) e alt(Legenda da imagem & SEO).
- Altura de elementos são modificados pela propriedade **height**
- Largura do elementos é modificado pela propriedade **width**
- O espaçamento interno de um elemento pode ser modificado pela propriedade **padding**
- O espaçamento externo de um elementos pode ser modificados pela propriedade **margin**
- Um Time front-end é formado por, UX - UI - Dev Front-end.

# 5. Lista e Divisões de Conteúdo
- Lista ordenada são feita por meio da tag **ol**
- Lista não-ordenadas são feitas por meio da tag **ul**;
- As listas são feitas pela tag li acompanhada pela seu tipo de lista.
- Para dividir conteúdos nas página HTML, usa-se a tag div para cada sessão
- Elementos em geral, possuem dois tipos de comportamentos, inline ou block
- Inline ocupam apenas largura e altura do seu conteúdo interno, não sendo possível alterar os mesmos.
- Block ocupam a largura toda da página, independente do conteúdo da mesma, porém é possivel manipular essas propriedades.

# 6. Finalizando página
- Header é utilizado para identificar o setor do título principal da página
- É ideal para quando esterilizar, usarmos classes para cada elementos que vamos trabalhar.

