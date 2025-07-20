---
title: "Cadastro"
date: 2025-07-18T00:30:04-03:00
draft: false
---

**Antes de tudo, por favor leia a página [Laboratório de Computação e Informática](/info/lci/).**

Condições para cadastro:

- Você deve estar devidamente cadastrado no SIGA / Portal Aluno UFRJ, com acesso ao documento "Regularmente Matriculado". Isso só é possível após a atualização das informações pessoais e o envio da foto. Os dados desse documento devem ser colocados nos campos DRE, data de emissão, hora de emissão e código.
- Você deve ser aluno do curso de Ciência da Computação.
- O nome digitado deve ser igual ao do SIGA, **com exceção dos acentos, que devem estar presentes**, caso tenha.
- O email externo deve ser acessível.
- O número de telefone precisa ser brasileiro.
- A senha precisa ter entre 8 e 25 caracteres, dentre eles uma letra maiúscula, uma minúscula e um número.

# Formulário

<div id="cadastrojs-place-aqui">

# Habilite o JS

**ATENÇÃO: Se você vê essa mensagem é porque não está com o JavaScript ligado, por favor ative para o formulário aparecer.**

Caso não queira usar JavaScript, crie sua conta via curl:

```bash
curl -X POST https://novo.ic.ufrj.br/api/cadastrar \
  -H "Content-Type: application/json" \
  -d '
{
  "dre": "123456789",
  "data": "01/01/2025",
  "hora": "14:32",
  "codigo": "1234.5678.9ABC.DEFG.HIJK.LMNO.PQRS.TUVW",
  "nome": "Amácio Mazzaropi",
  "email": "mazzaropi@pamfilmes.com",
  "telefone": "(21) 98765-4321",
  "senha": "MinhaSenhaSegura12345"
}'
```

</div>

<script src="/js/cadastro.js"></script>

