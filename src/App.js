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
		/** Ways to wrap elements other than <div> tags:
		 * Create a Wrapper component and use <Wrapper><your_components></Wrapper>
		 * Wrap them in <></>  (this is dependent on your project setup; needs certain JSX stuff to be installed)
		 * Wrap them in a React Fragment: import React then user <React.Fragment></React.Fragment> as a Wrapper. */
		<>
			<section id="user-input">
				<UserInput onAddUser={addUserHandler}></UserInput>
			</section>
			<section id="user-list">
				<UserList users={userList}></UserList>
			</section>
		</>
	);
}

export default App;
