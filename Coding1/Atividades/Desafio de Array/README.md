<!-- markdownlint-disable MD033 -->

# Desafio de Array 2024-10-23

## Grupo

- [Eloi](https://github.com/Eloi-0001)
- [Ayres](https://github.com/Kacaii)
- [Matheus](https://github.com/eumatheuslucena)

## Enunciado: Um sistema de aluguel de carros

> Crie um `array` de carros. Em seguida, realize as seguintes operações:

- [x] **Remover** um carro da lista.
- [x] **Adicionar** um novo carro na lista.
- [x] **Mostrar** o número de total de carros na lista.
- [x] Crie as variáveis, use a função `prompt()` e o `console.log()`
      para interagir com o usuário.

---

```javascript
/**
 * Lista com a qual iremos interagir.
 * Contém um montão de carros.
 *
 * @type {string[]} */
const listaDeCarros = [
  "Toyota Camry",
  "Honda Accord",
  "Ford Mustang",
  "Chevrolet Malibu",
  "BMW 3 Series",
  "Audi A4",
  "Nissan Altima",
  "Hyundai Sonata",
  "Kia Optima",
  "Volkswagen Passat",
];
```

## Instruções

- Adicionar ou remover carros da tabela é **opcional**.
- Durante a execução do código, os carros são exibidos no terminal em forma de tabelas.

> [!NOTE]
> O usuário pode optar por **sair** do loop ao digitar `":exit"` ou `":q"`
> durante a interação.

```javascript
const LocadoraDeCarros = {
  EXIT_COMMANDS: [":q", ":exit"],
  // Restante do código.
};
```

## TODO List ✅

- [x] Deixar o código mais bonitinho.
- [x] Verificar se ele continua funcionando.
- [x] Adicionar todos os membros da equipe na documentação.
- [x] Enviar o código para a professora.

---

- [x] Evitar a _repetição_ de código.
- [x] Melhorar a legibilidade.
- [x] Agora é possível **adicionar** ou **remover** vários carros da lista!
- [x] Funções documentadas.

<details>
<summary>Exibindo feedback para o usuário 💻</summary>

---

````javascript
/**
 * Exibe uma mensagem de feedback no console sobre a adição ou remoção de um carro.
 *
 * @param {string} [nomeDoCarro="Nenhum carro"] - Nome do carro removido ou adicionado.
 * @param {string} [corTexto="yellow"] - Cor do texto do **nome** do carro, em _inglês_.
 * @param {string} [mensagem=""] - Mensagem a ser exibida no console.
 *
 * @example Após adicionar um carro.
 *
 * ```javascript
 * exibeMensagemFeedback("Toyota Camry", "green", "adicionado!");
 * ```
 *
 * Exibe uma mensagem no console com o nome do carro em VERDE.
 *
 * @example Após remover um carro.
 *
 * ```javascript
 * exibeMensagemFeedback("Honda Accord", "red", "foi removido da lista!");
 * ```
 *
 * Exibe uma mensagem no console com o nome do carro em VERMELHO.
 *
 * @example Comportamento padrão.
 *
 * ```
 * exibeMensagemFeedback(undefined, undefined, "foi removido da lista!")
 *
 * exibeMensagemFeedback(undefined, undefined, "foi adicionado!")
 * ```
 *
 * Exibe uma mensagem no console escrito "Nenhum carro foi removido" (ou adicionado).
 */
exibeMensagemFeedback(
  nomeDoCarro = "Nenhum carro",
  corTexto = "yellow",
  mensagem = "",
) {
  console.log(
    `%c${nomeDoCarro} %c${mensagem}`,
    `color:${corTexto}`,
    "color:white",
  );
},
````

  </details>

---

![Cat Coding](https://c.tenor.com/g3y2q5VQxvAAAAAC/cat-computer.gif)
