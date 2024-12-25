import React, { useState } from 'react';
import styled from 'styled-components';

// Input container with a modern, sleek look
const FormContainer = styled.form`
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 2px solid #00b3b3;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    transform: scale(1.05);
    box-shadow: 0 0 15px #00b3b3;
  }
`;

const Button = styled.button`
  background: #00b3b3;
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 15px 25px;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px #ff007f;
  }
`;

function InputForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && date) {
      addExpense({ description, amount: parseFloat(amount), date });
      setDescription('');
      setAmount('');
      setDate('');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
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
      <Button type="submit">Add Expense</Button>
    </FormContainer>
  );
}

export default InputForm;
