import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, rua, numero, estado, cidade });
      }}
    >
      <TextField
        name="rua"
        variant="outlined"
        margin="normal"
        fullWidth
        id="rua"
        label="Rua"
        type="text"
        value={rua}
        onChange={(event) => {
          setRua(event.target.value);
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
        style={{ width: "100px", marginRight: "15px" }}
      />
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
        style={{ marginRight: "15px" }}
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

      <Button fullWidth variant="contained" color="primary" type="submit">
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
