const UserItem = (props) => {
	const content = props.name + " ( " + props.age + " years old )";
	return <li key={props.id}>{content}</li>;
};

export default UserItem;
