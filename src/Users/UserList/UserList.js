import UserItem from "../UserItem/UserItem";

import Card from "../UI/Card";

import styles from "./UserList.module.css";

const UserList = (props) => {
	return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((user) => (
					<UserItem
						key={user.id}
						id={user.id}
						name={user.name}
						age={user.age}
					></UserItem>
				))}
			</ul>
		</Card>
	);
};

export default UserList;
