import { useFormik } from 'formik';
import * as Yup from 'yup';
import AmbassadorsService from '../../../services/ambassadors.service';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  phone: Yup.string()
    .matches(/^\d+$/, 'Phone number must contain only digits')
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number can be at most 15 digits')
    .required('Required'),
  experience: Yup.string(),
  wallet: Yup.string()
    .matches(/^[a-zA-Z0-9-]+$/, 'Only alphabets and numbers are allowed')
    .matches(/0x[a-fA-F0-9]{40}/, 'Only wallet addresses are allowed')
    .max(42, 'Wallet address can be at most 42 digits')
    .required('Required'),
  link: Yup.string().url('Invalid URL format'),
  agreement: Yup.boolean()
    .oneOf([true], 'You need to agree to the terms and conditions')
    .required('You need to agree to the terms and conditions'),
  captcha: Yup.string(),
});

const useAmbFormik = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      country: '',
      phone: '',
      experience: '',
      wallet: '',
      link: '',
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

      await AmbassadorsService.post({
        ...values,
        wallet: values.wallet.toLocaleLowerCase(),
      });
    },
  });

  return formik;
};

export default useAmbFormik;
