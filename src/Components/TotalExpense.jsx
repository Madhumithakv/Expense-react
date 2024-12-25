import React from 'react';
import styled from 'styled-components';

// Total display container
const TotalContainer = styled.div`
  background: rgba(255, 0, 255, 0.8);
  color: #fff;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  font-size: 1.8rem;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

function TotalExpense({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return <TotalContainer>Total: ₹{total.toFixed(2)}</TotalContainer>;
}

export default TotalExpense;
