import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import {FormImg} from "./form-componets/FormImg";
import {Title} from "./form-componets/Title";
import {Buttons} from "./form-componets/Buttons";

const schema = yup.object({
    firstname: yup.string().trim().required("Firstname is required").min(3, "Must be at least 3 characters"),
    lastname: yup.string().trim().required("Lastname is required").min(3, "Must be at least 3 characters"),
    country: yup.string().required("Country is required")
});

export const YupProfileUserForm = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: yupResolver(schema)});

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
                       placeholder="Type your firstname" {...register("firstname")}/>
                {errors.firstname && (<div style={{color: "red"}}>{errors.firstname.message}</div>)}

                <label htmlFor="lastname" className="registration__label">Lastname</label>
                <input type="text" id="lastname" className="registration__input"
                       placeholder="Type your lastname" {...register("lastname")}/>
                {errors.lastname && (<div style={{color: "red"}}>{errors.lastname.message}</div>)}

                <label htmlFor="country" className="registration__label">Country</label>
                <Form.Select id="country" {...register("country")}>
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