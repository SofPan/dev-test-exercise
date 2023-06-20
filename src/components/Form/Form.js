import { useState } from "react";

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
	};

	const passwordChangeHandler = (e) => {
		/*
            Set password to user input
        */
		setPassword(e.target.value);
	};

    const formSubmitHandler = (e) => {
        e.preventDefault();

        setEmail("");
        setPassword("");
    }

	return (
		<form onSubmit={formSubmitHandler}>
			<div>
				<label>Email</label>
				<input
					type='email'
					value={email}
					onChange={emailChangeHandler}
				/>
			</div>
			<div>
				<label>Password</label>
				<input
					type='password'
					value={password}
					onChange={passwordChangeHandler}
				/>
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

export default Form;
