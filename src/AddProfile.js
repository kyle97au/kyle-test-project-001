/** @format */

import { useRef, useState } from "react";
import classes from "./AddProfile.module.css";
import Card from "./UI/Card";
import ErrorModal from "./UI/ErrorModal";
import Button from "./UI/Button";

const AddProfile = (props) => {
	const nameInputRef = useRef();
	const phoneInputRef = useRef();
	const mailInputRef = useRef();
	const [error, setError] = useState();

	const addProfileHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredPhone = phoneInputRef.current.value;
		const enteredMail = mailInputRef.current.value;
		console.log("name =", enteredName);
		console.log("phone =", enteredPhone);
		console.log("mail =", enteredMail);
		if (
			enteredName.trim().length === 0 ||
			enteredPhone.trim().length === 0 ||
			enteredMail.trim().length === 0
		) {
			setError({ titleAP: "Invalid input" });
			console.log("invalid input!!!");
			return;
		}
		if (enteredPhone.trim().length === 0) {
			setError({ title: "Invalid phone" });
			console.log("phone error!!!");
			return;
		}
		if (!enteredMail.includes("@")) {
			setError({ title: "Invalid email" });
			console.log("mail error!!!");
			return;
		}
		props.onAddProfile(enteredName, enteredPhone, enteredMail);
		nameInputRef.current.value = "";
		phoneInputRef.current.value = "";
		mailInputRef.current.value = "";
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal titleEM={error.titleAP} onConfirmEM={errorHandler} />
			)}
			<Card className={classes.input}>
				<form onSubmit={addProfileHandler}>
					<label htmlFor='username'>Name</label>
					<input id='username' type='text' ref={nameInputRef} />
					<label>Phone no</label>
					<input id='phoneno' type='number' ref={phoneInputRef} />
					<label>email</label>
					<input id='email' type='text' ref={mailInputRef} />
					<Button type='submit'>Add Contact</Button>
				</form>
			</Card>
		</>
	);
};

export default AddProfile;
