import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('전체');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filterdExpense = props.items.filter((expense) =>{
		return expense.date.getFullYear().toString()==filteredYear; // getFullYear:연도 받아오는 메소드->number로 리턴함
	})

	const expensesContent = () => {
		if (filteredYear === '전체') {
		  return props.items.map((item) => (
			<ExpenseItem title={item.title} amount={item.amount} date={item.date} />
		  ));
		} else {
		  const filteredExpense = props.items.filter((expense) => {
			return expense.date.getFullYear().toString() === filteredYear;
		  });
	
		  if (filteredExpense.length > 0) {
			return filteredExpense.map((item) => (
			  <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
			));
		  } else {
			return <p>값이 없습니다</p>;
		  }
		}
	  };

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{expensesContent()}
		</Card>
	);
};

export default Expenses;
