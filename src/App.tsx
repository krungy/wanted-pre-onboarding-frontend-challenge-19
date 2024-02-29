import React from 'react';
import './App.css';
import styled from 'styled-components';
import List from './components/List';
import ItemForm from './components/ItemForm';

function App() {
  return (
    <Container>
      <Header>ToDo</Header>
      <ItemForm />
      <List />
    </Container>
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
