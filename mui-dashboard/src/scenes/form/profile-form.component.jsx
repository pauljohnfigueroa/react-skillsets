import { Box, Button, TextField, useMediaQuery } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import Header from '../../components/header/header.component'


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: ""
}

const phoneRegExp = '/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/'

const userSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid.").required("Required"),
    address1: yup.string().required("Required"),
    address2: yup.string().required("Required")
})

const ProfileForm = () => {

    const isNonMobile = useMediaQuery("(min-width: 600px)")

    const handleFormSubmit = (values) => {
        console.log(values)
    }

    return <Box m="20px">
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
        >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Box>

                    </Box>
                </form>
            )}
        </Formik>
    </Box>
}
export default ProfileForm