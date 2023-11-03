import { useFormik } from 'formik';
import * as Yup from 'yup';

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
    .matches(/0x[a-fA-F0-9]{40}/, 'Only token addresses are allowed')
    .required('Required'),
  link: Yup.string().url('Invalid URL format').required('Required'),
  agreement: Yup.boolean()
    .oneOf([true], 'You need to agree to the terms and conditions')
    .required('You need to agree to the terms and conditions'),
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
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    onSubmit: async (sessionInfo, values) => {
      console.log(sessionInfo);
      console.log(values);
    },
  });

  return formik;
};

export default useAmbFormik;
