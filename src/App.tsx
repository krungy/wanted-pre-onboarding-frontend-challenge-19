import React from 'react';
import './App.css';
import styled from 'styled-components';
import List from './components/List';
import ItemForm from './components/ItemForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header>ToDo</Header>
        <ItemForm />
        <List />
      </Container>
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
