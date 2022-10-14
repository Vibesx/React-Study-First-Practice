import Card from "./Card";
import Button from "./Button";

import styles from "./ErrorModal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button text="Okay" onClick={props.onConfirm}></Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	// first parameter of createPortal is the JSX component we want to transfer; second parameter is an actual DOM element
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onErrorModalClose}></Backdrop>,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onErrorModalClose}
				></ModalOverlay>,
				document.getElementById("modal-root")
			)}
		</Fragment>
	);
};

export default ErrorModal;
