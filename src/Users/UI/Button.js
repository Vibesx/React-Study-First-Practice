import styles from "./Button.module.css";

const Button = (props) => {
	return (
		<button
			type={props.type || "button"}
			className={styles.button}
			onClick={props.onClick}
		>
			{props.text}
			{/** this can also be achieved by {props.children} and entering the text within the <Button> tags in the parent component */}
		</button>
	);
};

export default Button;
