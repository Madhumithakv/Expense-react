import React from 'react';
import styled from 'styled-components';
import { jsPDF } from 'jspdf';

const ListContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
`;

const ListItem = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const ExportButton = styled.button`
  padding: 10px;
  background: #ff007f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function ExpenseList({ expenses }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Expense Report', 10, 10);
    expenses.forEach((expense, index) => {
      doc.text(
        `${expense.description} - ₹${expense.amount} on ${expense.date}`,
        10,
        20 + index * 10
      );
    });
    doc.save('expense_report.pdf');
  };

  return (
    <ListContainer>
      {expenses.map((expense, index) => (
        <ListItem key={index}>
          {expense.description} - ₹{expense.amount} on {expense.date}
        </ListItem>
      ))}
      <ExportButton onClick={generatePDF}>Export to PDF</ExportButton>
    </ListContainer>
  );
}

export default ExpenseList;
