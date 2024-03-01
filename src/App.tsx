import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styled from 'styled-components';
import './App.css';
import List from './components/List';
import ItemForm from './components/ItemForm';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>
          <Header>ToDo</Header>
          <ItemForm />
          <List />
        </Container>
      </PersistGate>
    </Provider>
  );
}

export default App;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const Header = styled.h1`
  text-align: center;
`;
