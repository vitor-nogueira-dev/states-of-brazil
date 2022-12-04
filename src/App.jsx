import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Start from './components/Start';
import NextCard from './components/NextCard';
import './components/App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    addCart: [],
    filterName: '',
    searchRare: 'todas',
    searchTrunfo: false,
    start: '',
    firstRound: false,
    disabledStart: true,
    disabledNextCard: true,
    nextCard: false,
  };

  handleValidateData = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const number = 90;
    const numberSum = 210;
    const validateName = cardName.length !== 0;
    const validateDescription = cardDescription.length !== 0;
    const validateImage = cardImage.length !== 0;
    const validateRare = cardRare.length !== 0; // pesquisar sobre para informar ao lucas tavares.
    const validateAttr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= number;
    const validateAttr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= number;
    const validateAttr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= number;
    const validateSum = Number(cardAttr1)
    + Number(cardAttr2) + Number(cardAttr3) <= numberSum;
    this.setState({
      isSaveButtonDisabled:
      !(validateName
        && validateDescription
        && validateImage
        && validateRare
        && validateAttr1
        && validateAttr2
        && validateAttr3
        && validateSum
      ),
    });
  };

  onInputChange = ({ target: { name, value, checked } }) => {
    const newValue = (name === 'cardTrunfo' ? checked : value);

    this.setState({ [name]: newValue }, this.handleValidateData);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }
    const newCart = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((prevState) => ({
      addCart: [...prevState.addCart, newCart],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      isSaveButtonDisabled: true,
    }));
    this.setState({ disabledStart: false });
  };

  searchFilterName = ({ target: { value } }) => {
    this.setState({ filterName: value });
  };

  searchFilterRare = ({ target: { value } }) => {
    this.setState({ searchRare: value });
  };

  searchTrunfo = ({ target: { checked } }) => {
    this.setState({ searchTrunfo: checked });
  };

  handleStart = () => {
    const { addCart } = this.state;
    const number = 0.5;
    const shuffled = addCart.sort(() => Math.random() - number);

    this.setState({
      start: [...shuffled],
      firstRound: true,
      disabledNextCard: false,
    });
  };

  handleNextCart = () => {
    this.setState({
      firstRound: false,
      nextCard: true,
    });
  };

  render() {
    const {
      addCart,
      filterName,
      searchRare,
      searchTrunfo,
    } = this.state;

    return (
      <div>
        <h1 className="fs-1 title">Estados do Brasil</h1>
        <div className="container-form">
          <div className="form">
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="preview-card">
            <Card
              { ... this.state }
            />
          </div>
        </div>
        <div className="search">
          <label htmlFor="filterName">
            Pesquisa
            <input
              type="text"
              name="filterName"
              id="filterName"
              data-testid="name-filter"
              onChange={ this.searchFilterName }
              disabled={ searchTrunfo }
            />
          </label>
          <label htmlFor="searchRare">
            Search Raridade
            <select
              name="searchRare"
              id="searchRare"
              data-testid="rare-filter"
              onChange={ this.searchFilterRare }
              disabled={ searchTrunfo }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="searchTrunfo" className="search-trunfo">
            Super Trunfo
            <input
              type="checkbox"
              name="searchTrunfo"
              id="searchTrunfo"
              data-testid="trunfo-filter"
              onChange={ this.searchTrunfo }
            />
          </label>
        </div>
        <div className="container-cards">
          {addCart
            .filter((cart) => cart.cardName
              .includes(filterName))
            .filter((cart) => (searchRare === 'todas'
              ? cart : cart.cardRare === searchRare))
            .filter((cart) => (searchTrunfo ? cart.cardTrunfo : cart))
            .map((carta) => (
              <div key={ carta.cardName } className="cards">
                <Card { ...carta } />
                <button
                  className="btn btn-danger"
                  type="button"
                  value={ carta.cardName }
                  data-testid="delete-button"
                  onClick={ () => this.deleteCard(carta.cardName, carta.cardTrunfo) }
                >
                  Excluir
                </button>
              </div>
            ))}
        </div>
        <div className="container-start">
          <Start
            { ...this.state }
            handleStart={ this.handleStart }
            handleNextCart={ this.handleNextCart }
          />
          <NextCard { ...this.state } handleNextCart={ this.handleNextCart } />
        </div>
      </div>
    );
  }
}
export default App;
