function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: "Senha deve ter entre 4 e 72 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarTelefone(telefone) {
  if (telefone.length < 4 || telefone.length > 72) {
    return { valido: false, texto: "Telefone deve ter 11 digitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, validarSenha, validarTelefone };
