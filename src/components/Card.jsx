import PropTypes from 'prop-types';
import React, { Component } from 'react';
import superTrunfo from './super_trunfo.png';
import './App.css';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (

      <div className="preview">
        <div>
          <h1 data-testid="name-card">{cardName}</h1>
          <p data-testid="description-card">{cardDescription}</p>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="cardImage"
          />
          <h4 data-testid="attr1-card">
            Attr01.....................
            {cardAttr1}
          </h4>
          <h4 data-testid="attr2-card">
            Attr02.....................
            {cardAttr2}
          </h4>
          <h4 data-testid="attr3-card">
            Attr03.....................
            {cardAttr3}
          </h4>
          <p data-testid="rare-card">{cardRare}</p>
          { cardTrunfo && <img
            src={ superTrunfo }
            alt="logo super trunfo"
            className="img-trunfo"
          /> }
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
