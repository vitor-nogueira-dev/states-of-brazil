import React from 'react';
import Card from './components/Card';
import './components/App.css';
import data from './data'
// console.log(data);

class App extends React.Component {
  state = {
    searchName: '',
    searchRegion: 'todas',
  };

  // handleValidateData = () => {
  //   const {
  //     cardName,
  //     cardDescription,
  //     cardImage,
  //     cardRare,
  //     cardAttr1,
  //     cardAttr2,
  //     cardAttr3,
  //   } = this.state;
  //   const number = 90;
  //   const numberSum = 210;
  //   const validateName = cardName.length !== 0;
  //   const validateDescription = cardDescription.length !== 0;
  //   const validateImage = cardImage.length !== 0;
  //   const validateRare = cardRare.length !== 0; // pesquisar sobre para informar ao lucas tavares.
  //   const validateAttr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= number;
  //   const validateAttr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= number;
  //   const validateAttr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= number;
  //   const validateSum = Number(cardAttr1)
  //   + Number(cardAttr2) + Number(cardAttr3) <= numberSum;
  //   this.setState({
  //     isSaveButtonDisabled:
  //     !(validateName
  //       && validateDescription
  //       && validateImage
  //       && validateRare
  //       && validateAttr1
  //       && validateAttr2
  //       && validateAttr3
  //       && validateSum
  //     ),
  //   });
  // };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.handleValidateData);
  };

  searchName = ({ target: { value } }) => {
    this.setState({ searchName: value });
  };

  searchRegion = ({ target: { value } }) => {
    this.setState({ searchRegion: value });
  };

  render() {
    const {
      searchName,
      searchRegion,
    } = this.state;

    return (
      <div>
        <h1 className="fs-1 title">Estados do Brasil <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/2431840-ilustracaoial-da-bandeira-brasil-gratis-vetor.jpg" alt="bandeira Brasil" className="cardImage"/></h1>
        <div className="search">
          <label htmlFor="searchName">
            Pesquise por nome:
            <input
              type="text"
              name="searchName"
              id="searchName"
              onChange={ this.searchName }
            />
          </label>
          <label htmlFor="searchRegion">
            Pesquise por região
            <select
              name="searchRegion"
              id="searchRegion"
              onChange={ this.searchRegion }
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
      </div>
    );
  }
}
export default App;
