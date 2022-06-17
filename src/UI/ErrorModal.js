/** @format */

import React from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

// onClick -> refers to  {props.onConfirm}
// OnConfirm -> refers to ErrorHandler in AppUser.js

const ModalOverlay = (props) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{props.titleEM}</h2>
			</header>
			<footer className={classes.actions}>
				<Button onClick={props.onConfirmEM}>Ok sor9</Button>
			</footer>
		</Card>
	);
};

/** "backdrop" ==> press anywhere else to close the error box */
/** "overlay" ==> shows the error box*/
const ErrorModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				// <Backdrop onConfirmEM={props.onConfirmEM} />,
				<div className={classes.backdrop} onClick={props.onConfirmEM} />,
				document.getElementById("backdrop")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					titleEM={props.titleEM}
					onConfirmEM={props.onConfirmEM}
				/>,
				document.getElementById("overlay")
			)}
		</>
	);
};

export default ErrorModal;
