import React, { useState } from 'react';
import InputForm from './Components/InputForm';
import ExpenseList from './Components/ExpenseList';
import TotalExpense from './Components/TotalExpense';
import styled, { keyframes } from 'styled-components';

// Animation for background gradient movement
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Main container with gradient background
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${gradientAnimation} 15s ease infinite;
  background: linear-gradient(45deg, #0f0c29, #302b63, #24243e);
  background-size: 400% 400%;
  color: #fff;
  padding: 20px;
`;

const AppTitle = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 3rem;
  color: #00b3b3;
  text-shadow: 2px 2px 10px #ff007f;
  margin-bottom: 30px;
`;

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <AppContainer>
      <AppTitle>Expense Tracker</AppTitle>
      <InputForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <TotalExpense expenses={expenses} />
    </AppContainer>
  );
}

export default App;
