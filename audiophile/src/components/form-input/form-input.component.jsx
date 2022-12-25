const FormInput = ({ label, ...otherProps }) => {
    return (
        <>
            <div className="form-row">
                <label>{label}</label>
                <input {...otherProps} />
            </div>
        </>
    );
}
export default FormInput;