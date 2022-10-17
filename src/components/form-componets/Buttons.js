import PropTypes from "prop-types";

export const Buttons = ({onClick}) => {
    return (
        <div className="registration__buttons">
            <button className="registration__submit" type="submit">Register</button>
            <button className="registration__reset" onClick={onClick} type="button">Reset</button>
        </div>
    );
};

Buttons.propTypes = {
    onClick: PropTypes.func.isRequired,
};