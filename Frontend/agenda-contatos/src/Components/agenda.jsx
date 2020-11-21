import React, { useEffect, useState } from "react";
import Busca from "./views/busca";
import Header from "./views/header";
import Table from "./views/table";
import api from "../services/api";

const Agenda = (props) => {
  const [contatos, setContatos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    api.get(`contato`).then((response) => {
      console.log(response);
      setContatos(response.data);
    });
  }
  const handleRemove = async (contato) => {
    var result;
    result = await api.delete(`contato/${contato.id_contato}`);

    refresh()
  };

  const handleSearch =  () => {
    const campo = (!search)? "": "nome_contato"
    api.get(`contato?campo=${campo}&values=${search}`).then((response) => {
      setContatos(response.data);
    });

  };

  return (
    <div className="App">
      <Header text="Agenda de Contato" />
      <Busca onSearchChange={setSearch} handleSearch={handleSearch} />
      <Table list={contatos} handleRemove={handleRemove} />
    </div>
  );
};
export default Agenda;
