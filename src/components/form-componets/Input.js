import PropTypes from "prop-types";

export const Input = ({type, placeholder, name, value, onChange, id}) => {
    return (
        <>
            <label className="registration__label" htmlFor={id}>{name}</label>
            <input value={value} type={type} placeholder={placeholder}
                   className="registration__input" onChange={onChange} id={id}/>
        </>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};