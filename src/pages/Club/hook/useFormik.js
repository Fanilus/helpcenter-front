import { useFormik } from 'formik';
import * as Yup from 'yup';
import ClubService from '../../../services/club.service.js';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  wallet: Yup.string()
    .matches(/^[a-zA-Z0-9-]+$/, 'Only alphabets and numbers are allowed')
    .matches(/0x[a-fA-F0-9]{40}/, 'Only wallet addresses are allowed')
    .max(42, 'Wallet address can be at most 42 digits')
    .required('Required'),
  alias: Yup.string()
    .matches(
      /^[a-zA-Z0-9_]+$/,
      'Only alphanumeric characters and underscores are allowed'
    )
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  agreement: Yup.boolean()
    .oneOf([true], 'You need to agree to the terms and conditions')
    .required('You need to agree to the terms and conditions'),
  captcha: Yup.string(),
});

const useAmbFormik = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      wallet: '',
      alias: '',
      email: '',
      agreement: false,
      captcha: '',
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    onSubmit: async (values) => {
      if (!values.captcha)
        return formik.setErrors({
          captcha: "You have not confirmed that you're human",
        });

      await ClubService.post({
        ...values,
        wallet: values.wallet.toLocaleLowerCase(),
      });
    },
  });

  return formik;
};

export default useAmbFormik;
