console.log("Código de cadastro rodando");

document.getElementById("cadastrojs-place-aqui").innerHTML = `
<form id="cadastrojs-formulario">
  <div class="cadastrojs-elemento">
    <label for="registrojs-nome">Nome completo (com acentos)</label>
    <input type="text" name="nome" id="registrojs-nome" placeholder="Amácio Mazzaropi" required>
  </div>
  <div class="cadastrojs-elemento">
    <label for="registrojs-email">Email externo</label>
    <input type="email" name="email" id="registrojs-email" placeholder="mazzaropi@pamfilmes.com" required>
  </div>
  <div class="cadastrojs-elemento">
    <label for="registrojs-telefone">Número de telefone</label>
    <input type="tel" name="telefone" id="registrojs-telefone" placeholder="(21) 98765-4321" required>
  </div>
  <div class="cadastrojs-elemento">
    <label for="registrojs-senha">Senha</label>
    <input type="password" name="senha" id="registrojs-senha" required>
  </div>
  <div class="cadastrojs-elemento">
    <label for="registrojs-senha2">Confirmar senha</label>
    <input type="password" name="senha2" id="registrojs-senha2" required>
  </div>

  <div class="cadastrojs-elemento">
    <label for="registrojs-dre">DRE (nove dígitos)</label>
    <input type="text" name="dre" id="registrojs-dre" placeholder="123456789" pattern="\\d{9}" required>
  </div>
  <div class="cadastrojs-elemento">
    <label for="registrojs-data">Data do documento</label>
    <input type="date" name="data" id="registrojs-data" required>
  </div>
  <div class="cadastrojs-elemento">
    <label for="registrojs-hora">Hora do documento</label>
    <input type="time" name="hora" id="registrojs-hora" required>
  </div>
  <div class="cadastrojs-elemento">
    <label for="registrojs-codigo">Código de Autenticação</label>
    <input type="text" name="codigo" id="registrojs-codigo" placeholder="1234.5678.9ABC.DEF1.4918.1923.AAAA.F124" pattern="[A-F0-9]{4}\\.[A-F0-9]{4}\\.[A-F0-9]{4}\\.[A-F0-9]{4}\\.[A-F0-9]{4}\\.[A-F0-9]{4}\\.[A-F0-9]{4}\\.[A-F0-9]{4}" required>
  </div>

  <div id="cadastrojs-problemas"></div>

  <button type="submit">Cadastrar</button>
</form>
`;

console.log("Formulário montado");

document.getElementById("cadastrojs-formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  console.log("Recebido formulário");
  console.log(data);

  if (data.senha != data.senha2) {
    document.getElementById("cadastrojs-problemas").innerHTML = "<p>As senhas são diferentes</p>";
    console.log("CANCELADO: senhas diferentes");
    return;
  }
  delete data.senha2;
  console.log("Confirmado que as senhas batem");

  data.data = data.data.replace(
    /(\d{4})-(\d{2})-(\d{2})/,
    (match, year, month, day) => {
      return `${day}/${month}/${year}`;
    }
  );
  console.log("Data substituída");
  console.log(data.data);

  fetch("https://novo.ic.ufrj.br/api/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json().then(data => ({
    status: response.status,
    data: data,
  })))
  .then(({ status, data }) => {
    let detalhes = "";
    if (data.sabar_mais) {
      detalhes = `<details><summary>Mais informações</summary><p>${data.sabar_mais}</p></details>`;
    }
    if (status === 422 || status === 500) {
      document.getElementById("cadastrojs-problemas").innerHTML = `<p>${data.message}</p>` + detalhes;
    } else if (status === 403 || status === 409 || status === 201) {
      document.getElementById("cadastrojs-formulario").outerHTML = `<p>${data.message}</p>` + detalhes;
    } else {
      throw "codigo desconhecido";
    }
  })
  .catch(error => {
    document.getElementById("cadastrojs-problemas").innerHTML = "<p>Houve um erro desconhecido</p>";
  });
});

console.log("Adicionado handler do evento");

