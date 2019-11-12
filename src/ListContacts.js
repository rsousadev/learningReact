import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeReExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component{
    static propTypes ={
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }
    updateQuery = (query) =>{
        this.setState({ query: query.trim() })
    }
    render(){
        const { contacts, onDeleteContact } = this.props
        const { query } = this.state

        //Filtro que pega o nome e exibe de acordo com a pesquisa de acordo com o valor do input
        //manipula o estado de um componente
        let showingContacts
        if(query){
            const match = new RegExp(escapeReExp(this.state.query), 'i')
            match.test('Tyler')
            showingContacts = this.props.contacts.filter(( contact ) => match.test(contact.name))
        }else{
            showingContacts = this.props.contacts
        }
        //exibindo por ordem alfabética pelo nome

        showingContacts.sort(sortBy('name'))

        return(
            <div className='list-contacts'>
                {JSON.stringify(this.state)}
                <div className='list-contacts-top'>
                    <input 
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                 <ol className='contact-list'>
                    {showingContacts.map((contact) =>(
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}/>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button onClick={() => onDeleteContact(contact)} 
                                className='contact-remove'>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
           
        )
    }
}


export default ListContacts