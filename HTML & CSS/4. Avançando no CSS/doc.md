# 1. Adaptando página index.html
- Ajustes na página index.html para os padrão das demais páginas.
- Medidas de proporção com CSS (*em* -> baseia-se no valor padrão em px)
- Propriedade *float* e *clear* para entendimento de flutuação e limpeza dentro do CSS

# 2. Conteúdo Externo
- Utilizar fontes externa nas páginas por meio do google fonts
- Incorporar mapa e videos por meio da tag **iframe** (Disponibilizado em algumas páginas, Ex: youtube, google maps, ...)

# 3. Melhorando CSS
- Entendo sobre pseudo-classes e pseudo-elementos:
    - :after - permiti adicionar um elemento após outro elemento
    - :before - Permite adicionar um elemento antes de um outro elemento
    - :first-line - adicionar alguma propriedade na primeira linha do elemento
    - :first-letter - adicionar alguma propriedade na primeira letra do elemento
- Aplicação de um background gradient na página:
    - linear-gradient(): criar um degradê linear, o qual pode haver modificações
    - radial-gradient(): criar um degradê redondo

# 4. Opacidade, Sombra & Seletores Avançados
- Seletores avançados:
   - > - Elementos filhas de uma uma tag mãe
   - + - Elementos após uma tag mãe
   - ~ - Todos os elementos após uma tag mãe
   - tag:not() - Elementos selecionados, não setados
- Com o atributo **opacity** é possível modificar a opacidade dos elementos do HTML
- É possível maniuplar também as opacidades das cores -> Usando a propriedade *rgba* é possivel alterar a opacidade dentro de uma cor RGB
- **box-shadow** e **text-shadow** são propriedades com objetivos de adionar uma sombra nos elementos em geral.

# 5. Design responsivo
- Ajuste da página para celulares
- Uso da atributo *name="viewport"* na tag meta
- Entendimento básico sobre **Media Queries**