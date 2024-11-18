<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD013 -->
<!-- markdownlint-disable MD036 -->

# Desafio de Array 2024-10-23

## Enunciado: Um sistema de aluguel de carros

> Crie um `array` de carros. Em seguida, realize as seguintes operações:

- [x] **Remover** um carro da lista.
- [x] **Adicionar** um novo carro na lista.
- [x] **Mostrar** o número de total de carros na lista.
- [x] Crie as variáveis, use a função `prompt()` e o `console.log()`
      para interagir com o usuário.

## Instruções

- Adicionar ou remover carros da tabela é **opcional**.
- Durante a execução do código, os carros são exibidos no terminal em forma de tabelas.
- Recomendo executar o código no **terminal**.

```bash
# /Senac-Coding/Coding1/Atividades/Desafio de Array/
deno run arrayDeCarros.js
```

## Deno

<!-- prettier-ignore -->
> [!TIP]
> **Por que estou usando Deno?**
>
> **Deno** é um ambiente de execução Javascript focado em segurança e simplicidade.
> Possui suporte nativo para Typescript e muitas outras ferramentas e APIs,
> como por exemplo o método `window.prompt()` - que falta no NodeJS.

### 10 Coisas que lamento sobre NodeJS - Ryan Dahl

<center>

[![10 Coisas que lamento sobre NodeJS - Ryan Dahl](https://img.youtube.com/vi/M3BM9TB-8yA/0.jpg)](https://www.youtube.com/watch?v=M3BM9TB-8yA)

**Instalar no Windows**

```ps1
irm https://deno.land/install.ps1 | iex
```

**Instalar no MacOS/Linux**

```bash
curl -fsSL https://deno.land/install.sh | sh
```

</center>

## Dependências

- Lista de Dependências:

  - [Nerd Fonts](https://www.nerdfonts.com/font-downloads) | Para habilitar suporte para _ícones_  no Terminal.
  - [Deno](https://deno.com/) | Executa scripts `.js`.

> [!NOTE]
> O usuário pode optar por **sair** do loop ao digitar `":exit"` ou `":q"`
> durante a interação.

## Grupo

- [Eloi](https://github.com/Eloi-0001)
- [Ayres](https://github.com/Kacaii)
- [Matheus](https://github.com/eumatheuslucena)

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

---

```typescript
module LocadoraDeCarros
const LocadoraDeCarros: {
    listaParaInteragir: string[];
    EXIT_COMMANDS: Set<string>;
    exibeLista(): void;
    exibeQuantidade(): void;
    exibeMensagemFeedback(mensagem: string, nomeDoCarro?: string | undefined, corTexto?: string | undefined): void;
    removeCarro(id?: string | undefined): void;
    iniciarRemocaoDeCarros(): void;
    adicionaCarro(lista: string[], nomeCarro?: string | undefined): void;
    iniciarAdicaoDeCarros(): void;
}

// Módulo contendo métodos e recursos necessários para interação do usuário com a lista de carros.
```

---

![Cat Coding](https://c.tenor.com/g3y2q5VQxvAAAAAC/cat-computer.gif)
