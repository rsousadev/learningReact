import React from 'react';
import logo from './logo.svg';


export default class ContactList extends React.Component{
  render(){
    const people = [
      {'name':'Michael'},
      {'name':'Ryan'},
      {'name':'Tyler'},
    ]
    return <ol>
      {people.map(person =>(
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}
 
