import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // it is prefered
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    // console.log(event + "hii");
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    // titleChangeHandler("");
    // amountChangeHandler("");
    // dateChangeHandler("");
  };

  //using object
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  // //dont do like this it may fail
  // //   const titleChangeHandler = (event) => {
  // //     setUserInput({
  // //       ...userInput,
  // //       enteredTitle: event.target.value,
  // //     });
  // //   };
  // //u may do like this if currebt state is dependent on previous state
  // const titleChangeHandler = (event) => {
  //     setUserInput((preState)=>{
  //         return {...preState, enteredTitle: event.target.value}
  //     });
  //   };

  //   const amountChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredAmount: event.target.value,
  //     });
  //   };
  //   const dateChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredDate: event.target.value,
  //     });
  //   };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            steps="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
