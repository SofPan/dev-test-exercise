import { useState } from "react";

const Form = () => {
    /*
        Initialize state for form inputs
    */ 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return(
        <form>
            <div>
                <label>Email</label>
                <input type="email" value={email} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default Form;