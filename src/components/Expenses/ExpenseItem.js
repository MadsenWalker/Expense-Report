
import React, {useState} from "react";

import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
import './ExpenseItem.css';


function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);


  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };
    // const month = props.date.toLocaleString('en-US',{month: 'long'});
    // const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    // const year = props.date.getFullYear();

    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    );
}

export default ExpenseItem;