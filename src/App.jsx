import React from 'react';
import './components/css/App.css';
import Form from './components/Form';
import States from './components/States';

class App extends React.Component {
  state = {
    searchName: '',
    searchRegion: 'todas',
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  searchName = ({ target: { value } }) => {
    this.setState({ searchName: value });
  };

  searchRegion = ({ target: { value } }) => {
    this.setState({ searchRegion: value });
  };

  render() {
    return (
     <div>
      <Form { ...this.state } onInputChange={ this.onInputChange } />
      <States { ...this.state } /> 
     </div>
    );
  }
}
export default App;
