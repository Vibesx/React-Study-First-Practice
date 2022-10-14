import styles from "./Card.module.css";

const Card = (props) => {
	// props.children contains the element tags within the enclosing component.
	// we put our own styles class in here, as well as the one inherited from the parent component (given by props.className; naming is up to the user)
	return (
		<div className={`${styles.card} ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Card;
