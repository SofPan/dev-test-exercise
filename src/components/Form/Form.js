
const Form = () => {
    return(
        <form>
            <div>
                <label>Email</label>
                <input type="email" value="email@email.com" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value="" placeholder="password" />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default Form;