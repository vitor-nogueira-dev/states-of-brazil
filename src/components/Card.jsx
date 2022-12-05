import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';

export default class Card extends Component {
  render() {
    const {
      nome,
      bandeira,
      curiosidade,
      sigla,
      capital,
      populacao,
      economia
    } = this.props;
    return (
      <div className="preview">
        <div>
          <h1 className=''>{nome}</h1>
          <p> <strong>Curiosidade:</strong> {curiosidade}</p>
          <img
            src={ bandeira }
            alt={ nome }
            className="cardImage"
          />
            <div className="infos">
              <h5>
                Sigla................
                {sigla}
              </h5>
              <h5>
                Capital................
                {capital}
              </h5>
              <h5>
                População................
                {populacao}
              </h5>
            </div>
          <p className="p-economia"><strong>Economia:</strong> {economia}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequire;
