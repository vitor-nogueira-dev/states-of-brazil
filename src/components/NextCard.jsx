import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

export default class NextCard extends Component {
  render() {
    const { handleNextCart, nextCard, start, disabledNextCard } = this.props;

    const numberAleatory = Math.floor(Math.random() * start.length + 1);
    // const lastLetter = (start.length - 1);
    // console.log(lastLetter);
    return (
      <div className="start">
        <button
          className="btn btn-warning"
          disabled={ disabledNextCard }
          type="button"
          onClick={ handleNextCart }
        >
          Next
        </button>
        { nextCard && (
          start.map((carta, index) => (
            (index === numberAleatory) && (
              <div key={ carta.cardName } className="card-start preview-card">
                <Card { ...carta } />
              </div>
            )
            // Requisito 15
            // (index === lastLetter) && (this.setState({ disabledNextCard: false })) -> Lógica para verificar se é a última carta que está sendo exibida, se true, é para desabilitar o botão próxima carta e habilitar um botão embaralhar cartas.
            // Logo em seguida --> Um novo botão deve ser exibido com o texto Embaralhar cartas.
            // Ao clicar no botão o baralho deve ser embaralhadao e deve ser exibida a carta no indíce 0;
          ))
        )}

      </div>
    );
  }
}

NextCard.propTypes = {
  disabledStart: PropTypes.bool,
  gameOn: PropTypes.bool,
  handleStart: PropTypes.func,
  start: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
}.isRequired;
