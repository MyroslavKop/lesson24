import {useState} from "react";
import {Title} from "./form-componets/Title";
import {FormImg} from "./form-componets/FormImg";
import {Input} from "./form-componets/Input";
import {Buttons} from "./form-componets/Buttons";

const EMAIL_VALIDATION = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const RegistrationForm = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = ({target: {value}}) => {
        if (errorMessage) {
            setErrorMessage("");
        }
        setEmailValue(value);
    };

    const handlePasswordChange = ({target: {value}}) => {
        if (errorMessage) {
            setErrorMessage("");
        }
        setPasswordValue(value);
    };

    const handleConfirmPasswordChange = ({target: {value}}) => {
        if (errorMessage) {
            setErrorMessage("");
        }
        setConfirmPasswordValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (emailValue === "" || passwordValue === "" || confirmPasswordValue === "") {
            setErrorMessage("All fields are required");
            return;
        } else if (passwordValue !== confirmPasswordValue) {
            setErrorMessage("Passwords must match");
            return;
        } else if (!EMAIL_VALIDATION.test(String(emailValue).toLowerCase())) {
            setErrorMessage("Enter correct email address");
            return;
        }
        console.log({"Email": emailValue, "Password": passwordValue, "Confirm Password": confirmPasswordValue});
    };

    const handleReset = () => {
        setEmailValue("");
        setPasswordValue("");
        setConfirmPasswordValue("");
        setErrorMessage("");
    };

    return (
        <form className="registration" noValidate onSubmit={handleSubmit}>
            <FormImg/>
            <Title title="Registration"/>
            <div className="registration__fields">
                <Input onChange={handleEmailChange} type="email" name="Email" placeholder="Type your email" id="email"
                       value={emailValue}/>

                <Input onChange={handlePasswordChange} type="password" name="Password" placeholder="Type your password"
                       id="password"
                       value={passwordValue}/>

                <Input onChange={handleConfirmPasswordChange} type="password" name="Confirm password"
                       id="confirm-password"
                       placeholder="Confirm your password" value={confirmPasswordValue}/>
            </div>
            {errorMessage && <div style={{color: "red", marginTop: "10px"}}>{errorMessage}</div>}
            <Buttons onClick={handleReset}/>
        </form>
    );
};
