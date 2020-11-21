import React from "react";
import "../../styles/global.css";
import "../../styles/pages/table.css";
import "../../routes";
import { Link } from "react-router-dom";

const Table = (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((contato) => (
      <tr key={contato.id_contato}>
        <td>{contato.nome_contato}</td>
        <td>{contato.sobrenome_contato}</td>
        <td>{contato.telefone_contato}</td>
        <td>
          <button
            className="btnTrash"
            onClick={() => props.handleRemove(contato)}
          >
            <i className="fa fa-trash-o fa-2x"></i>
          </button>
          <Link
            className="btnEditar"
            to={`form?id_contato=${contato.id_contato}`}
          >
            <i className="fa fa-edit fa-2x"></i>
          </Link>
        </td>
      </tr>
    ));
  };

  return (
    <div className="containerApp">
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Telefone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default Table;
