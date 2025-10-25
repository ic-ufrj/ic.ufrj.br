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

### Outras Distros

Baixar do Github do Hugo

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

## Documentação em progresso

Mais em breve...
