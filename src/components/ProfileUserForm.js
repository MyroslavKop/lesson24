import {useForm} from "react-hook-form";
import Form from "react-bootstrap/Form";
import {FormImg} from "./form-componets/FormImg";
import {Title} from "./form-componets/Title";
import {Buttons} from "./form-componets/Buttons";


const getInputValidations = (fieldName, characterLength = 3) => {
    return {
        required: `${fieldName} is required`,
        minLength: {
            value: characterLength,
            message: `Must be at least ${characterLength} characters`
        }
    };
};


export const ProfileUserForm = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const handleReset = () => {
        reset({
            firstName: "",
            lastName: "",
            country: "",
        });
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="registration" onSubmit={handleSubmit(onSubmit)}>
            <FormImg/>
            <Title title="Registration"/>
            <div className="registration__fields">
                <label htmlFor="firstname" className="registration__label">Firstname</label>
                <input type="text" id="firstname" className="registration__input"
                       placeholder="Type your firstname" {...register("firstName", getInputValidations("Firstname"))}/>
                {errors.firstName && (<div className="error">{errors.firstName.message}</div>)}

                <label htmlFor="lastname" className="registration__label">Lastname</label>
                <input type="text" id="lastname" className="registration__input"
                       placeholder="Type your lastname" {...register("lastName", getInputValidations("Lastname"))}/>
                {errors.lastName && (<div className="error">{errors.lastName.message}</div>)}

                <label htmlFor="country" className="registration__label">Country</label>
                <Form.Select id="country" {...register("country", {
                    required: "Country is required",
                })}>
                    <option value="">Choose your country</option>
                    <option value="USA">USA</option>
                    <option value="UA">Ukraine</option>
                    <option value="DE">Germany</option>
                </Form.Select>
                {errors.country && (<div className="error">{errors.country.message}</div>)}
            </div>

            <Buttons onClick={handleReset}/>
        </form>
    );
};