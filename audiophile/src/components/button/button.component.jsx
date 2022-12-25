
// const BUTTON_TYPES = {
//     google: 'google',
//     inverted: 'inverted'
// };

const Button = ({ label, ...otherProps }) => {

    return (
        <>
            <button {...otherProps}>{label}</button>
        </>
    );
}
export default Button;