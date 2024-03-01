import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../store';
import { addTodo } from '../../store/todoSlice';

const ItemForm = (props: any) => {
  const dispatch = useAppDispatch();
  const [content, setContent] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setContent('');
    dispatch(addTodo(content));
  };

  return (
    <Form {...props} onSubmit={handleSubmit}>
      <Input type="text" value={content} onChange={(e) => setContent(e.target.value)} required />
      <SumbitButton>Add</SumbitButton>
    </Form>
  );
};

export default ItemForm;

const Form = styled.form`
  width: 400px;
`;

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  border-radius: 8px;
  border: 2px solid black;
  box-sizing: border-box;
`;

const SumbitButton = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: #fff;
  border-radius: 8px;
  border: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;
`;
