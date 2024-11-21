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
- O script deve ser executado **diretamente** no terminal.

```fish
# /Senac-Coding/Coding1/Atividades/Desafio de Array/
deno run --allow-read arrayDeCarros.js
```

Caso queira verificar os [testes](./tests/arrayDeCarros.test.js), execute o comando abaixo:

```fish
# /Senac-Coding/Coding1/Atividades/Desafio de Array/
deno test --allow-read
```

Use a flag `--help` ou `-h` para ver a lista de comandos disponíveis.

```help
/Senac-Coding/Coding1/Atividades/Desafio de Array/

===========================
Atividade: Desafio de Array
===========================

Por padrão, o arquivo de dados é o arquivo "./api/carros_1.json".
se você quiser alterar o arquivo de dados,
basta passar o caminho como argumento usando o parâmetro --data ou -d.

Comandos:

--help, -h: Mostra este menu de ajuda.
--data, -d: Caminho para o arquivo de dados.
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

```fish
curl -fsSL https://deno.land/install.sh | sh
```

</center>

## Dependências

- Lista de Dependências:

  - [Nerd Fonts](https://www.nerdfonts.com/font-downloads)
  - [Deno](https://deno.com/)

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
- [x] Adicionar um **teste** para cada operação.
- [x] Adicionar uma **documentação** para cada função.
- [x] Adicionar `--help` e `--data` para facilitar o uso do script.

---

![Cat Coding](https://c.tenor.com/g3y2q5VQxvAAAAAC/cat-computer.gif)
