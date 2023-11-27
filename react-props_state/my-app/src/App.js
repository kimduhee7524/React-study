import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
	const[expenses, setExpenses] =useState([
		{
			id: "e1",
			title: "수건",
			amount: 12.33,
			date: new Date(2025, 8, 14),
		},
		{
			id: "e2",
			title: "행주",
			amount: 8.38,
			date: new Date(2025, 8, 14),
		},
	])
	// 리스트 추가 
	const getPaymentData = (data)=>{
		console.log(data);
		setExpenses([
			{
				id: Math.random().toString(),
				title: data.name,
				amount: data.price,
				date: new Date(data.today)
			},
			...expenses
		])
	}
	//리스트 삭제
	const deleteExpenseItem=(id)=>{
		const newFilerArray = expenses.filter((item) => item.id !==id);
		setExpenses(newFilerArray);
	};

	return (
		<>
			<PaymentForm getPaymentData ={getPaymentData}/>
			<Expenses items={expenses} deleteExpenseItem={deleteExpenseItem}/>
		</>
	);
}

export default App;
