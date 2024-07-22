import './styles.css';

import { Component } from 'react';


// Vide documentação de referência para SyntheticEvent
// https://pt-br.legacy.reactjs.org/docs/events.html

// Vide documentação para Manipulando eventos
// https://pt-br.legacy.reactjs.org/docs/handling-events.html

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;

    return (
      <button 
        className='button' 
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}