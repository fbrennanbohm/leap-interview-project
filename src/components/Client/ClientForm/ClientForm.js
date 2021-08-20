import React, {useEffect, useRef} from 'react';
import LabelledInput from "../LabelledInput/LabelledInput";
import styles from './ClientForm.module.scss'
import * as Yup from 'yup';
import {Formik, Form, } from 'formik';
import LabelledSelect from "../LabelledSelect/LabelledSelect";
import {states} from '../../../constants';
import LabelledCurrencyInput from "../LabelledCurrencyInput/LabelledCurrencyInput";

const ClientForm = (props) => {
    const {user, isEdit, onSubmit, formRef, setEditable} = props;

    const initialValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        postcode: user.postcode,
        state: user.state,
        companyName: user.companyName,
        abn: user.abn,
        hourlyRate: user.hourlyRate,
        dateOfBirth: user.dateOfBirth
    }

    const validation = Yup.object().shape({
        firstName: Yup.string()
            .required("Your first name is required"),
        lastName: Yup.string()
            .required("Your last name is required"),
        email: Yup.string()
            .email('Please enter a valid email')
            .required("Your email is required"),
        phoneNumber: Yup.number()
            .typeError("Please enter a valid phone number")
            .required("Your phone number is required"),
        postcode:
            Yup.number()
                .typeError("Please enter a valid postcode")
                .min(1000, "Postcode must be between 1000-9999")
                .max(9999,"Postcode must be between 1000-9999")
                .required("Your postcode is required"),
        state: Yup.string(),
        companyName: Yup.string(),
        abn: Yup.string(),
        hourlyRate: Yup.number()
            .typeError("Please enter a valid numeric currency")
            .required("Your hourly rate is required"),
        dateOfBirth: Yup.string()
            .required("Your date of birth is required"),
    })

    const onSubmitFormik = (values) => {
        console.log("I am being submitted")
            onSubmit({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: user.phoneNumber,
                postcode: values.postcode,
                state: values.state,
                companyName: values.companyName,
                abn: values.abn,
                hourlyRate: values.hourlyRate,
                dateOfBirth: values.dateOfBirth
                }
            )
            setEditable();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={onSubmitFormik}
            innerRef={formRef}
            enableReinitialize
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
              }) => (
                <Form
                    id='clientForm'
                    onSubmit={handleSubmit}
                >
                    <div className={styles.clientForm}>
                        <LabelledInput
                            id='firstName'
                            label='First Name'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            value={values.firstName}
                            errors={errors.firstName}
                            disabled={!isEdit}
                        />
                        <LabelledInput
                            id='lastName'
                            label='Last Name'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            value={values.lastName}
                            errors={errors.lastName}
                            disabled={!isEdit}
                        />
                        <LabelledInput
                            id='email'
                            label='Email'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            value={values.email}
                            errors={errors.email}
                            disabled={!isEdit}
                        />
                        <LabelledInput
                            id='phoneNumber'
                            label='Phone Number'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            value={values.phoneNumber}
                            disabled={!isEdit}
                            errors={errors.phoneNumber}
                            halfColumn
                        />
                        <LabelledInput
                            id='postcode'
                            label='Postcode'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            value={values.postcode}
                            disabled={!isEdit}
                            errors={errors.postcode}
                            halfColumn
                        />
                        <LabelledSelect
                            id='state'
                            label='State'
                            options={states}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            disabled={!isEdit}
                        />

                        <LabelledInput
                            id='companyName'
                            label='Company Name'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            value={values.companyName}
                            disabled={!isEdit}
                        />
                        <LabelledInput
                            id='abn'
                            label='ABN'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            value={values.abn}
                            disabled={!isEdit}
                        />
                        <LabelledCurrencyInput
                            id='hourlyRate'
                            label='Hourly Rate'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            value={values.hourlyRate}
                            errors={errors.hourlyRate}
                            disabled={!isEdit}
                            currency
                        />
                        <LabelledInput
                            id='dateOfBirth'
                            label='Date of Birth'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            value={values.dateOfBirth}
                            errors={errors.dateOfBirth}
                            disabled={!isEdit}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ClientForm;