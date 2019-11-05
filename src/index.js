import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const people = [
    {name:'Michael'},
    {name:'Ryan'},
    {name:'Tyler'}
]

const element = React.createElement('ol', null,
    people.map(person => (
        React.createElement('li', { key: person.name}, person.name)
    ))
)

ReactDOM.render( element, document.getElementById('root'))
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();