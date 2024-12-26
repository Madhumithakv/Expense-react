import React from 'react';
import styled from 'styled-components';
import { jsPDF } from 'jspdf';

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

const ExportButton = styled.button`
  background: #ff007f;
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 15px 25px;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px #00b3b3;
  }
`;

function ExpenseList({ expenses }) {

  // Function to generate the PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    // Add title
    doc.text('Expense Tracker Report', 14, 20);

    // Add table header
    doc.text('Description', 14, 30);
    doc.text('Amount', 120, 30);
    doc.text('Date', 170, 30);

    // Add expenses data
    expenses.forEach((expense, index) => {
      doc.text(expense.description, 14, 40 + index * 10);
      doc.text(`₹${expense.amount.toFixed(2)}`, 120, 40 + index * 10);
      doc.text(expense.date, 170, 40 + index * 10);
    });

    // Save the generated PDF
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
