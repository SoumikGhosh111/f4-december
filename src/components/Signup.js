import React, { useState, useEffect } from 'react';
import './styles.css'



const Signup = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    // all the errors...
    let [emailError, setEmailError] = useState(true);
    let [passwordError, setPasswordError] = useState(true);
    let [confirmPasswordError, setConfirmPasswordError] = useState(true);



    useEffect(() => {
        setEmailError(/^\S+@\S+\.\S+$/.test(email));
        setPasswordError(password.length >= 8);
        setConfirmPasswordError(confirmPassword === password && password.length > 0);
    }, [email, password, confirmPassword]);

    function handleChangeEmail(e) {
        let newEmail = e.target.value;
        setEmail(newEmail);

    }

    function handleChangePassword(e) {
        let str = e.target.value;
        setPassword(str);

    }
    function handleChangeConfirmPassword(e) {
        let newPassword = e.target.value;
        setConfirmPassword(newPassword);
    }

    function handleError() {
        if (emailError && passwordError && confirmPasswordError) {
            return true;
        }
        return false;
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(confirmPassword);

        if (handleError()) {
            alert("Form Submitted successfully");
           
        } else {
            alert("There is an Error");
        }
    }

    
    return (
        <form id='sign-up' onSubmit={handleSubmit}>

            <label htmlFor='email'
            >Email:</label>
            <input
                name='email'
                type='email'
                id='user-email'
                onChange={handleChangeEmail}
                style={!emailError ? {} : { borderColor: "green" }}
            />
            {!emailError && <div style={{ color: "red" }}>Invalid email format </div>}


            <label htmlFor='password'>Password:</label>
            <input
                name='password'
                type='password'
                id='user-epassword'
                onChange={handleChangePassword}
                style={!passwordError ? {} : { borderColor: "green" }}
            />

            {!passwordError && <div style={{ color: "red" }}>Password must contain atleast 8 characters</div>}


            <label htmlFor='confirm-password'>Confirm password:</label>
            <input
                name='confirm-password'
                type='password'
                id='confirm-password'
                onChange={handleChangeConfirmPassword}
                style={!confirmPasswordError ? {} : { borderColor: "green" }}
            />
            {!confirmPasswordError && <div style={{ color: "red" }}>Password does not match</div>}
            <br />


            <div className='button-div'><button>Sign Up</button></div>

        </form>
    )
}

export default Signup; 