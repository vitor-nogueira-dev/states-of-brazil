import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

export default class Start extends Component {
  render() {
    const { handleStart, disabledStart, firstRound, start } = this.props;

    return (
      <div>
        <div className="start">
          <button
            className="btn btn-primary"
            disabled={ !!disabledStart }
            type="button"
            onClick={ handleStart }
          >
            Jogar
          </button>
          {
            firstRound
            && (
              (
                <div className="card-start">
                  <Card { ...start[0] } />
                </div>
              )
            )
          }
        </div>
      </div>
    );
  }
}

Start.propTypes = {
  addCart: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
