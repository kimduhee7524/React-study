import React, { useState } from "react";

import styles from "./PaymentForm.module.css";

const PaymentForm = ({ getPaymentFormData }) => {
	const [objectState, setObjectState] = useState({
		name: "",
		price: 0,
		today: new Date(),
	});
	const [isValid, setIsValid] =useState(true);


	const inputTextHandler = (event) => {
		if(event.target.value.trim().length >0){
			setIsValid(true);
		  }
		setObjectState((prevState) => ({
			...prevState,
			name: event.target.value,
		}));
	};

	const inputPriceHandler = (event) => {
		setObjectState((prevState) => ({
			...prevState,
			price: event.target.value,
		}));
	};

	const inputTodayHandler = (event) => {
		setObjectState((prevState) => ({
			...prevState,
			today: event.target.value,
		}));
	};

	const buttonSubmitHander = (event) => {
		event.preventDefault();

		// console.log(objectState);
		if(objectState.name.trim().length === 0){
			setIsValid(false);
			return;
		  }
		getPaymentFormData(objectState);

		setObjectState({
			name: "",
			price: 0,
			today: new Date(),
		});
	};

	return (
		<div className={styles.newPayment}>
			<form onSubmit={buttonSubmitHander}>
				<div className={styles.newPaymentControls}>
					<div className={styles.newPaymentControl}>
						<label>이름</label>
						<input
							className={`${!isValid && styles.isTrue}`}
							type="text"
							onChange={inputTextHandler}
							value={objectState.name}
						/>
					</div>
					<div className={styles.newPaymentControl}>
						<label>금액</label>
						<input
							type="number"
							min="0.01"
							step="0.01"
							onChange={inputPriceHandler}
							value={objectState.price}
						/>
					</div>
					<div className={styles.newPaymentControl}>
						<label>날짜</label>
						<input
							type="date"
							min="2019-01-01"
							max="2023-12-31"
							onChange={inputTodayHandler}
							value={objectState.today}
						/>
					</div>
				</div>
				<div className={styles.newPaymentActions}>
					<button type="submit">결제 추가</button>
				</div>
			</form>
		</div>
	);
};

export default PaymentForm;
