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
    //mudando valor do comapo input para minusculo
    updateQuery = (query) =>{
        this.setState({ query: query.trim() })
    }
    //função para limpar ao clicar no botão da listagem
    clearQuery = () =>{
        this.setState({ query: '' })
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
                    <a 
                        href="#create"
                        onClick={this.props.onNavigate}
                        className="add-contact"
                        >Add Contact</a>
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing { contacts.length } of { contacts.length } total</span>
                        <button onClick={this.clearQuery}>Show All</button>
                    </div>
                )}
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