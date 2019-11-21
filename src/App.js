import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import { tsConstructSignatureDeclaration, throwStatement } from '@babel/types'
import * as ContactsAPI from './utils/ContactsAPI'

  export default class App extends Component{
      state = {
        screen:'list', //lista de criação
        contacts:[
        ]
      }
      componentDidMount() {
        ContactsAPI.getAll().then((contacts) =>{
          this.setState({ contacts })
        })
      }
      removeContact = (contacts) =>{
        //o novo estado se baseia no estado atual
        this.setState((state) => ({
          contacts: state.contacts.filter((c) => c.id !== contacts.id)
        }))
        ContactsAPI.remove(contacts)
        //Usar somente quando não depende de outro estado.
        //this.setStart({})
      }
      render(){
          return(
              <div className="app">
                {this.state.screen === 'list' && (
                  <ListContacts 
                  onDeleteContact={this.removeContact} 
                  contacts={this.state.contacts}
                  onNavigate={() => {
                    this.setState({ screen: 'create' })
                  }}
                  />
                )}
                {this.state.screen === 'create' && (
                  <CreateContact />
                )}  
              </div>
          )
      }
  }