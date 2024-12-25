import React from 'react';
import styled from 'styled-components';

// Container for the expense list
const ListContainer = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 15px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 15px;
  margin-bottom: 15px;
  width: 90%;
  border-radius: 10px;
  font-size: 1.2rem;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.8);
  }
`;

function ExpenseList({ expenses }) {
  return (
    <ListContainer>
      {expenses.map((expense, index) => (
        <ListItem key={index}>
          {expense.description} - ₹{expense.amount} on {expense.date}
        </ListItem>
      ))}
    </ListContainer>
  );
}

export default ExpenseList;
