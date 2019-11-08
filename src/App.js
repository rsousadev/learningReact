import React, { Component } from 'react'
import ListContacts from './ListContacts'
import { tsConstructSignatureDeclaration } from '@babel/types'

  export default class App extends Component{
      state = {
        contacts:[
          {
            "id": "ryan",
            "name": "Ryan Florence",
            "email": "ryan@reacttraining.com",
            "avatarURL": "http://localhost:5001/ryan.jpg"
          },
          {
            "id": "michael",
            "name": "Michael Jackson",
            "email": "michael@reacttraining.com",
            "avatarURL": "http://localhost:5001/michael.jpg"
          },
          {
            "id": "tyler",
            "name": "Tyler McGinnis",
            "email": "tyler@reacttraining.com",
            "avatarURL": "http://localhost:5001/tyler.jpg"
          }
        ]
      }
      removeContact = (contacts) =>{
        //o novo estado se baseia no estado atual
        this.setState((state) => ({
          contacts: state.contacts.filter((c) => c.id !== contacts.id)
        }))
        //Usar somente quando não depende de outro estado.
        //this.setStart({})
      }
      render(){
          return(
              <div>
                  <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
              </div>
          )
      }
  }