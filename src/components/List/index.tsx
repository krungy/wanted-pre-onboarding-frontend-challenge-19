import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Item from '../Item';

const List = (props: any) => {
  const todoList = useSelector((state: RootState) => state.todo.todoList);

  return (
    <UnorderedList {...props}>
      {todoList.map((item) => (
        <Item key={item.id} id={item.id} content={item.content} complete={item.complete} />
      ))}
    </UnorderedList>
  );
};

export default List;

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  margin-top: 16px;
  padding: 0;

  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`;
