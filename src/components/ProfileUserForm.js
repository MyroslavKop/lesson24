import {useForm} from "react-hook-form";
import Form from "react-bootstrap/Form";
import {FormImg} from "./form-componets/FormImg";
import {Title} from "./form-componets/Title";
import {Buttons} from "./form-componets/Buttons";


export const ProfileUserForm = () => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const handleReset = () => {
        reset({
            firstname: "",
            lastname: "",
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
                       placeholder="Type your firstname" {...register("firstname",
                    {
                        required: "Firstname is required",
                        minLength: {
                            value: 3,
                            message: "Must be at least 3 characters"
                        }
                    })}/>
                {errors.firstname && (<div style={{color: "red"}}>{errors.firstname.message}</div>)}

                <label htmlFor="lastname" className="registration__label">Lastname</label>
                <input type="text" id="lastname" className="registration__input"
                       placeholder="Type your lastname" {...register("lastname",
                    {
                        required: "Lastname is required",
                        minLength: {
                            value: 3,
                            message: "Must be at least 3 characters"
                        }
                    })}/>
                {errors.lastname && (<div style={{color: "red"}}>{errors.lastname.message}</div>)}

                <label htmlFor="country" className="registration__label">Country</label>
                <Form.Select id="country" {...register("country", {
                    required: "Country is required",
                })}>
                    <option value="">Choose your country</option>
                    <option value="USA">USA</option>
                    <option value="UA">Ukraine</option>
                    <option value="DE">Germany</option>
                </Form.Select>
                {errors.country && (<div style={{color: "red"}}>{errors.country.message}</div>)}
            </div>

            <Buttons onClick={handleReset}/>
        </form>
    );
};