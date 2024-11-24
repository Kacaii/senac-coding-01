<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD013 -->
<!-- markdownlint-disable MD036 -->

# Desafio de Array 2024-10-23

![Static Badge](https://img.shields.io/badge/@std-%23083344?logo=JSR&logoColor=%23083344&logoSize=auto&labelColor=%23f7df1e)
![Static Badge](https://img.shields.io/badge/Deno-black?logo=Deno&logoColor=white&logoSize=auto)

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
- É necessário passar o _caminho_ para o arquivo de dados como argumento.
- Algums arquivos de dados estão disponíveis na pasta `api`.

```bash
./Desafio_de_Array_Linux --data <caminho para o arquivo de dados>
```

ou para Windows:

```ps1
.\Desafio_de_Array_Windows.exe --data <caminho para o arquivo de dados>
```

Caso queira verificar os **testes**, execute o comando abaixo:

```bash
deno test --allow-read
```

Use a flag `--help` ou `-h` para ver a lista de comandos disponíveis.

```help
===========================
Atividade: Desafio de Array
===========================

Como utilizar:

./Desafio_de_Array_Linux --data <caminho para o arquivo de dados>

ou

.\Desafio_de_Array_Windows.exe --data <caminho para o arquivo de dados>

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
