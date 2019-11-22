import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import { tsConstructSignatureDeclaration, throwStatement } from '@babel/types'
import * as ContactsAPI from './utils/ContactsAPI'

  export default class App extends Component{
      state = {
        contacts:[]
      }
      //função para utilizar o back-end feito em Nodejs listando os contatos
      componentDidMount() {
        ContactsAPI.getAll().then((contacts) =>{
          this.setState({ contacts })
        })
      }
      //função para remover um contato
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
                <Route exact path="/" render={() => (
                    <ListContacts 
                    onDeleteContact={this.removeContact} 
                    contacts={this.state.contacts}
                    />
                  )}/>
                  <Route path="/create" component={CreateContact}/>
                  
                )}  
              </div>
          )
      }
  }