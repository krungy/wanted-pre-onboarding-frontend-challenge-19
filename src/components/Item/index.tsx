import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../store';
import { removeTodo, updateTodo } from '../../store/todoSlice';
import Toggle from '../Toggle';

interface Props {
  id: string;
  content: string;
  complete: boolean;
}

const Item = ({ id, content, complete, ...props }: Props) => {
  const dispatch = useAppDispatch();

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTodo({ id, status: e.target.checked }));
  };

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  return (
    <ListItem complete={complete} {...props}>
      <Toggle on={complete} onChange={(e) => handleUpdate(e)} />
      <Content>{content}</Content>
      <RemoveButton onClick={() => handleRemove()}>Remove</RemoveButton>
    </ListItem>
  );
};

export default Item;

const ListItem = styled.li<{ complete: boolean }>`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
  background-color: ${({ complete }) => (complete ? '#EEEEEE' : 'transparent')};

  & > span {
    text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
  }
`;

const Content = styled.span`
  display: inline-block;
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: #fff;
  border-radius: 8px;
  border: none;
  background-color: red;
  cursor: pointer;
`;
