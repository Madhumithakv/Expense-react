import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #00b3b3;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

function InputForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ description, amount: parseFloat(amount), date, category });
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <Button type="submit">Add Expense</Button>
      </form>
    </FormContainer>
  );
}

export default InputForm;
