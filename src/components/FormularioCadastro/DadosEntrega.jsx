import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        name="cep"
        variant="outlined"
        margin="normal"
        id="cep"
        label="CEP"
        type="number"
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
      />
      <TextField
        name="endereco"
        variant="outlined"
        margin="normal"
        fullWidth
        id="endereco"
        label="Endereço"
        type="text"
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
      />
      <TextField
        name="numero"
        variant="outlined"
        margin="normal"
        id="numero"
        label="Número"
        type="number"
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
      />
      <TextField
        name="estado"
        variant="outlined"
        margin="normal"
        id="estado"
        label="Estado"
        type="text"
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
      />
      <TextField
        name="cidade"
        variant="outlined"
        margin="normal"
        id="cidade"
        label="Cidade"
        type="text"
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
      />
      <Button fullWidth variant="contained" color="primary" type="submit">
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
