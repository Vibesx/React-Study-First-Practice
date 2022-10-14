import React, { useState } from "react";

import UserInput from "./Users/UserInput/UserInput";
import UserList from "./Users/UserList/UserList";

import "./App.css";

function App() {
	const [userList, setUserList] = useState([]);

	const addUserHandler = (user) => {
		setUserList((prevUserList) => {
			const updatedUsers = [...prevUserList];
			updatedUsers.unshift(user);
			return updatedUsers;
		});
	};
	return (
		<div>
			<section id="user-input">
				<UserInput onAddUser={addUserHandler}></UserInput>
			</section>
			<section id="user-list">
				<UserList users={userList}></UserList>
			</section>
		</div>
	);
}

export default App;
