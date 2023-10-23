import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  counry: Yup.string().required('Required'),
  number: Yup.number().required('Required'),
  experience: Yup.string().required('Required'),
  wallet: Yup.string().required('Required'),
  link: Yup.string().required('Required'),
});

const useAmbassadorsFormik = (submit) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      counry: '',
      number: '',
      experience: '',
      wallet: '',
      link: '',
    },
    validationSchema: validationSchema,
    onSubmit: submit,
  });

  return formik;
};

export default useAmbassadorsFormik;
