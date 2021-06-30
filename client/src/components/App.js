import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import  Login from './Login'
import Dashboard from './Dashboard'
import {ContactsProvider} from '../contexts/ContactsProvider'
import {ConversationsProvider} from '../contexts/ConversationsProvider'

function App() {
  const [id, setId] = useLocalStorage()

  const dashboard=(
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
        </ConversationsProvider>
    </ContactsProvider>
  )

  return (
      id ? <Dashboard id={id} /> :  <Login onIdSubmit = {setId} />
  )
}

export default App;
