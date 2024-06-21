import * as Yup from 'yup';

export const userInfoSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    // email: Yup.string().email('Invalid email').required('Email is required'),
    id_card_number: Yup.string().required('ID card number is required'),
    birth_date: Yup.date().required('Birth date is required'),
    // phone: Yup.string().required('Phone is required'),
});
