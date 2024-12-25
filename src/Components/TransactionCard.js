import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;

  h4 {
    margin: 0;
    color: #333;
  }

  span {
    color: ${(props) => (props.type === "expense" ? "#e53935" : "#4caf50")};
    font-weight: bold;
  }
`;

export const TransactionCard = () => {
  return (
    <div>
      <Card type="income">
        <h4>Salary</h4>
        <span>+ ₹30,000</span>
      </Card>
      <Card type="expense">
        <h4>Groceries</h4>
        <span>- ₹5,000</span>
      </Card>
    </div>
  );
};
