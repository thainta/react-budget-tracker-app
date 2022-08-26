import React from "react";

import "./ExpenseForm.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
