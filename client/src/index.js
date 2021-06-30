import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap//dist/css/bootstrap.min.css'
import {ContactsProvider} from './contexts/ContactsProvider'
import {ConversationsProvider} from './contexts/ConversationsProvider'

ReactDOM.render(
  <React.StrictMode>
    <ContactsProvider>
    <ConversationsProvider>
        <App />
        </ConversationsProvider>
    </ContactsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


