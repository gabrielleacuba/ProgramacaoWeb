import React from "react";

import "../../styles/pages/busca.css";
import "../../styles/global.css";
import { Link } from "react-router-dom";

const Busca = (props) => {
  const { search } = props;
  return (
    <div className="containerApp">
      <form className="input-block">
        <label>Buscar</label>
        <div className="inputSearch">
          <input
            id="buscar"
            name="search"
            type="text"
            value={search}
            onChange={(e) => props.onSearchChange(e.target.value)}
          />
          <button type="button" onClick={props.handleSearch}>
            <i className="fa fa-search fa-2x"></i>
          </button>
        </div>
      </form>
      <Link className="btnAdicionar" to={`form/`}>
        <i className="fa fa-plus fa-2x"></i>
      </Link>
    </div>
  );
};
export default Busca;
