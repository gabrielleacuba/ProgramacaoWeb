import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Header from "./header";

import "../../styles/global.css";
import "../../styles/pages/form.css";
import api from "../../services/api";

const Formulario = (props) => {
  const history = useHistory();
  const [id_contato, setId] = useState("");
  const [nome_contato, setNome] = useState("");
  const [sobrenome_contato, setSobrenome] = useState("");
  const [telefone_contato, setTelefone] = useState("");
  const [contato, setContato] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getParams();
  }, []);

  const getParams = async () => {
    const search = props.location.search;
    const params = new URLSearchParams(search.substring(1));
    const id = params.get("id_contato");

    if (!!id) {
      setUpdate(true);
      setId(id);
      const response = await api.get(`contato?campo=id_contato&values=${id}`);
      setNome(response.data[0].nome_contato);
      setSobrenome(response.data[0].sobrenome_contato);
      setTelefone(response.data[0].telefone_contato);
    }
  };

  const handleHistory = async () => {
    history.push("/");
  };
  const handleEdit = async (event) => {
    event.preventDefault();

    const data = {
      nome_contato: nome_contato,
      sobrenome_contato: sobrenome_contato,
      telefone_contato: telefone_contato,
    };

    await api.put(`contato/${id_contato}`, data);
    alert("Alteração realizada com sucesso");
    history.push("/");
  };
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      nome_contato: nome_contato,
      sobrenome_contato: sobrenome_contato,
      telefone_contato: telefone_contato,
    };

    await api.post("contato", data);
    alert("Cadastro realizado com sucesso");
    history.push("/");
  }

  return (
    <>
      <Header text="Adicionar um contato" />
      {!update ? (
        <div className="containerApp">
          <form onSubmit={handleSubmit}>
            <div className="inputBlock">
              <label>Nome</label>
              <input
                type="text"
                id="nome"
                value={nome_contato}
                onChange={(event) => setNome(event.target.value)}
              />
            </div>

            <div className="inputBlock">
              <label>Sobrenome</label>
              <input
                type="text"
                id="sobrenome"
                value={sobrenome_contato}
                onChange={(event) => setSobrenome(event.target.value)}
              />
            </div>

            <div className="inputBlock">
              <label>Telefone</label>
              <input
                type="text"
                id="telefone"
                placeholder="(DDD) 9999-9999"
                value={telefone_contato}
                onChange={(event) => setTelefone(event.target.value)}
              />
            </div>
            <button className="btnSalvar" type="submit">
              Adicionar
            </button>
          </form>
        </div>
      ) : (
        <div className="containerApp">
          <form onSubmit={handleSubmit}>
            <div className="inputBlock">
              <label>Nome</label>
              <input
                type="text"
                id="nome"
                value={nome_contato}
                onChange={(event) => setNome(event.target.value)}
              />
            </div>

            <div className="inputBlock">
              <label>Sobrenome</label>
              <input
                type="text"
                id="sobrenome"
                value={sobrenome_contato}
                onChange={(event) => setSobrenome(event.target.value)}
              />
            </div>

            <div className="inputBlock">
              <label>Telefone</label>
              <input
                type="text"
                id="telefone"
                placeholder="(DDD) 9999-9999"
                value={telefone_contato}
                onChange={(event) => setTelefone(event.target.value)}
              />
            </div>

            <button className="btnSalvar" type="button" onClick={handleEdit}>
              Salvar
            </button>
            <button
              className="btnCancelar"
              type="button"
              onClick={handleHistory}
            >
              Cancelar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Formulario;
