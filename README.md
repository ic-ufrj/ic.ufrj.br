# Instituto de Computação

## Como instalar o Hugo

A versão mínima recomendada do Hugo é a 0.149.1

### Ubuntu e derivados (Pop! OS, Linux Menta, etc)

```bash
sudo snap install hugo
```

### Arch Linux

```bash
sudo pacman -S hugo
```

### Outras Distribuições

Baixar do Github do Hugo: https://github.com/gohugoio/hugo/releases

## Como testar o site localmente

Primeiro, faça um fork do repositório usando o GitHub. Depois, clone o repositório:

```bash
git clone https://github.com/SEU_NOME_DE_USUARIO/ic.ufrj.br.git
cd ic.ufrj.br
```

Em um terminal separado, execute:

```bash
hugo serve
```

Isso vai tornar o site acessível em http://localhost:1313/. O site atualiza sozinho quando altera o código.

### Testar em um celular

Use `hugo serve --bind 0.0.0.0` em vez de `hugo serve`, isso faz com que o site esteja disponível de fora do `localhost`. Assim, dá para acessar no celular por https://192.168.0.2:1313/ ou https://146.164.41.39:1313/. Para saber o IP do seu computador, use `ip addr` e procure o indereço `inet` da interface de rede principal.

## Como criar uma página

Vamos dizer que queremos criar uma notícia "Departamento de Ciência da Computação Volta a Fazer Parte do Instituto De Matemática". Para isso, usamos o seguinte comando:

```bash
hugo new content/pt/noticias/departamento-de-ciencia-da-computacao-volta-a-fazer-parte-do-instituto-de-matematica.md
```

Então, edite o arquivo Markdown que o Hugo criou. Lembre-se de verificar se o título está correto. Apesar dele trocar os hífens por espaços e capitalizar ele não é capaz de colocar os acentos. Abaixo do "cabeçalho", escreva o conteúdo da página em Markdown.

## Documentação em progresso

Mais em breve...
