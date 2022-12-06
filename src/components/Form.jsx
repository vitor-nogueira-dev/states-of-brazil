import React, { Component } from "react";

export default class Form extends Component {
  render() {
    const { searchName, searchRegion, onInputChange } = this.props;
    return (
      <div>
        <h1 className="fs-1 title">
          Estados do Brasil{" "}
          <img
            src="https://static.vecteezy.com/ti/vetor-gratis/p3/2431840-ilustracaoial-da-bandeira-brasil-gratis-vetor.jpg"
            alt="bandeira Brasil"
            className="bandeiras"
          />
        </h1>
        <div className="search">
          <label htmlFor="searchName">
            Pesquise por nome:
            <input
              type="text"
              name="searchName"
              id="searchName"
              value={searchName}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="searchRegion">
            Pesquise por região
            <select
              name="searchRegion"
              id="searchRegion"
              value={searchRegion}
              onChange={onInputChange}
            >
              <option value="todas">Todas</option>
              <option value="N">Norte</option>
              <option value="NE">Nordeste</option>
              <option value="CO">Centro-Oeste</option>
              <option value="SE">Sudeste</option>
              <option value="S">Sul</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
