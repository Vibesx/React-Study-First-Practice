import { useState, useRef } from "react";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

import styles from "./UserInput.module.css";
import Wrapper from "../../Helpers/Wrapper";

const UserInput = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	// const [userName, setUserName] = useState("");
	// const [userAge, setUserAge] = useState("");
	const [errorContent, setErrorContent] = useState();
	const formSubmithandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;
		if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
			setErrorContent({
				title: "Invalid fields!",
				message: "At least one field is empty!",
			});
			return;
		}
		if (+enteredAge < 1) {
			setErrorContent({
				title: "Invalid age!",
				message: "Minimum age is 1!",
			});
			return;
		}
		const newUser = {
			id: Math.random().toString(),
			name: enteredName,
			age: enteredAge,
		};
		clearForm();
		props.onAddUser(newUser);
	};

	// const onNameChangeHandler = (event) => {
	// 	setUserName(event.target.value);
	// };
	// const onAgeChangeHandler = (event) => {
	// 	setUserAge(event.target.value);
	// };
	const onErrorModalCloseHandler = () => {
		setErrorContent(null);
	};

	const clearForm = () => {
		// setUserAge("");
		// setUserName("");
		// this is bad practice, to change the DOM directly without using React, but in this case it is ok since we are only resetting 2 inputs
		// an alternative would be to go back to the useState approach
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};

	return (
		<Wrapper>
			{errorContent && (
				<ErrorModal
					title={errorContent.title}
					message={errorContent.message}
					onErrorModalClose={onErrorModalCloseHandler}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={formSubmithandler}>
					<label htmlFor="username">Name</label>
					<input
						id="username"
						type="text"
						// onChange={onNameChangeHandler}
						// value={userName}
						ref={nameInputRef}
					/>
					<label htmlFor="age">Age</label>
					<input
						id="age"
						type="number"
						// onChange={onAgeChangeHandler}
						// value={userAge}
						ref={ageInputRef}
					/>
					<Button type="submit" text="Add User"></Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default UserInput;
