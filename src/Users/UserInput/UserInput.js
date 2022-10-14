import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./UserInput.module.css";

const UserInput = (props) => {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");
	const formSubmithandler = (event) => {
		event.preventDefault();
		if (userName.trim().length === 0 || userAge.trim().length === 0) {
			return;
		}
		if (+userAge < 1) {
			return;
		}
		const newUser = {
			id: Math.random().toString(),
			name: userName,
			age: userAge,
		};
		clearForm();
		props.onAddUser(newUser);
	};

	const onNameChangeHandler = (event) => {
		setUserName(event.target.value);
	};
	const onAgeChangeHandler = (event) => {
		setUserAge(event.target.value);
	};

	const clearForm = () => {
		setUserAge("");
		setUserName("");
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={formSubmithandler}>
				<label htmlFor="username">Name</label>
				<input
					id="username"
					type="text"
					onChange={onNameChangeHandler}
					value={userName}
				/>
				<label htmlFor="age">Age</label>
				<input
					id="age"
					type="number"
					onChange={onAgeChangeHandler}
					value={userAge}
				/>
				<Button type="submit" text="Add User"></Button>
			</form>
		</Card>
	);
};

export default UserInput;
