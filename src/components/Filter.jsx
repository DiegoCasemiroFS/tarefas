import React from "react";

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Realizadas</option>
            <option value="Incomplete">Não Realizadas</option>
          </select>
        </div>

        <div>
          <p>Ordenar por:</p>
          <button className="categoria-botao" onClick={() => setSort("Asc")}>Ascendente</button>
          <button className="categoria-botao" onClick={() => setSort("Desc")}>Descendente</button>
          <button className="categoria-botao" onClick={() => setSort("category")}>Categoria</button>
          <button className="categoria-botao" onClick={() => setSort("date")}>Data</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
