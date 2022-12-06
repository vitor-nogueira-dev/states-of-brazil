import React, { Component } from 'react'
import data from '../data';
import Card from './Card';

export default class States extends Component {
  render() {
    const { searchName, searchRegion } = this.props;
    return (
      <div className="container-cards">
      {data
        .filter((state) => state.nome.toLocaleLowerCase()
          .includes(searchName.toLocaleLowerCase()))
        .filter((state) => (searchRegion === 'todas'
          ? state : state.region === searchRegion))
        .map((state) => (
          <div key={ state.sigla } className="cards">
            <Card { ...state } />
          </div>
        ))}
    </div>
    )
  }
}
