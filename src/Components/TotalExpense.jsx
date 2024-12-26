import React from 'react';
import styled from 'styled-components';

const TotalContainer = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 15px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TotalAmount = styled.h2`
  font-size: 2rem;
  color: #ff007f;
`;

function TotalExpense({ expenses }) {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <TotalContainer>
      <TotalAmount>Total Expense: ₹{total.toFixed(2)}</TotalAmount>
    </TotalContainer>
  );
}

export default TotalExpense;
