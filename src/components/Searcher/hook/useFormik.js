import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useLanguage from '../../../hooks/useLanguage.jsx';

const validationSchema = Yup.object().shape({
  search: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
});

const useSearchFormik = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    onSubmit: async (values, { resetForm }) => {
      navigate(`/${language}/search/${values.search}`);
      resetForm();
    },
  });

  return formik;
};

export default useSearchFormik;
