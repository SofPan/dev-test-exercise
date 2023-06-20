import { useState } from "react";

import styles from "./Form.module.css";

const Form = () => {
	/*
        Initialize state for form inputs
    */
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	/*
        State management for valid/invalid form inputs.
            Initial state is false as there is no input.
    */
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(false);

	const emailChangeHandler = (e) => {
		/*
            Set email to user input
        */
		setEmail(e.target.value);
		/*
            Conditionally check if email is valid (includes @)
        */
        email.includes('@') ? setEmailIsValid(true) : setEmailIsValid(false);
	};

	const passwordChangeHandler = (e) => {
		/*
            Set password to user input
        */
		setPassword(e.target.value);

		/*
            Conditionally check if password is valid (min 6 characters)
        */
        password.length > 6 ? setPasswordIsValid(true) : setPasswordIsValid(false);
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();

		setEmail("");
		setPassword("");
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div>
				<label>Email</label>
				<input
					type='email'
					value={email}
					onChange={emailChangeHandler}
					className={!emailIsValid ? styles.error : undefined}
				/>
			</div>
			<div>
				<label>Password</label>
				<input
					type='password'
					value={password}
					onChange={passwordChangeHandler}
					className={!passwordIsValid ? styles.error : undefined}
				/>
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

export default Form;
