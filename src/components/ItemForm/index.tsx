import React from 'react';
import styled from 'styled-components';
import { FormEvent, useState } from 'react';

const ItemForm = (props: any) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTask('');
  };

  return (
    <Form {...props} onSubmit={handleSubmit}>
      <Input type="text" value={task} onChange={(e) => setTask(e.target.value)} required />
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
