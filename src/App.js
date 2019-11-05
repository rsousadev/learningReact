import React, { Component } from 'react';

class ContactList extends React.Component{
  render(){
    const people = this.props.contacts
    return <ol>
      {people.map(person =>(
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

function App() {
  return (
    <div className="App">
      <ContactList contacts={
        [
          {name:'Michal'},
          {name:'Ryan'},
          {name:'Tyler'}
        ]
      }/>
      <ContactList contacts={
        [
          {name:'Amanda'},
          {name:'Richard'},
          {name:'Jeff'}
        ]
      }/>
    </div>
  );
}

export default App;
