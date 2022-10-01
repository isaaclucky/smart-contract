import React, { useState } from 'react'

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");



    return (
        <div>
            <h1>Log Into Your Account</h1>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} placeholder="Email"
                        id="" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} placeholder="Password"
                        id="" />
                </div>
                <button onClick={logInUser}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default LoginPage