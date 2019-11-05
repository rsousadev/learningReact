import React from 'react';
import logo from './logo.svg';


export default class ContactList extends React.Component{
  render(){
    const element = React.createElement('ol', null,
    React.createElement('li', null, 'Michael'),
    React.createElement('li', null, 'Ryan'),
    React.createElement('li', null, 'Tyler'),
    )
  }
}
 
