import * as Yup from 'yup';

export const giftCardSchema = Yup.object().shape({
    loyalty_points: Yup.number().positive().typeError('Loyalty points must be a number').required('Loyalty points is required'),
    items: Yup.array().of(
        Yup.object().shape({
            item_code: Yup.string().required('Item code is required'),
            qty: Yup.number().positive().typeError('Quantity must be a number').required('Quantity is required'),
        })
    ).min(1, 'At least one item is required'),
    payment_method: Yup.string().required('Payment method is required'),
    branch: Yup.string().required('Branch is required'),
});
