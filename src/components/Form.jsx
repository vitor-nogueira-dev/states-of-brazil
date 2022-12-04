import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';
// import { Button } from 'reactstrap';
export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="inputs-form">
        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            name="cardName"
            id="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição Carta
          <textarea
            name="cardDescription"
            id="cardDescription"
            cols="30"
            rows="2.5"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1">
          Attr 01
          <input
            min={ 0 }
            max={ 90 }
            type="number"
            name="cardAttr1"
            id="cardAttr1"
            data-testid="attr1-input"
            placeholder="XX"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2">
          Attr 02
          <input
            min={ 0 }
            max={ 90 }
            type="number"
            name="cardAttr2"
            id="cardAttr2"
            data-testid="attr2-input"
            placeholder="XX"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3">
          Attr 03
          <input
            min={ 0 }
            max={ 90 }
            type="number"
            name="cardAttr3"
            id="cardAttr3"
            data-testid="attr3-input"
            placeholder="XX"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage">
          Imagem
          <input
            type="text"
            name="cardImage"
            id="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardRare">
          Raridade
          <select
            className="form-select form-select-sm mb-2"
            name="cardRare"
            id="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        { hasTrunfo ? (
          <p className="text-trunfo">Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <div className="form-check form-switch">
            <label htmlFor="cardTrunfo">
              Super Trunfo ?
              <input
                checked={ cardTrunfo }
                className="form-check-input"
                type="checkbox"
                name="cardTrunfo"
                id="cardTrunfo"
                data-testid="trunfo-input"
                onChange={ onInputChange }
              />
            </label>
          </div>
        )}
        <button
          className="btn btn-success"
          type="button"
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          color="danger"
        >
          Salvar

        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisable: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequire;
