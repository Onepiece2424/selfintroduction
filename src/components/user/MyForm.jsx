import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { Button } from '@material-ui/core';
import renderField from '../common/renderField'

const MyForm = ({ handleSubmit }) => {
  const formValues = useSelector(state => getFormValues('myForm')(state), shallowEqual);
  // const formValues = useSelector(state => getFormValues('myForm')(state));
  console.log(formValues)

  return (
    <form onSubmit={handleSubmit}>
      <Field type="text" name="firstName" component={renderField} value={formValues?.firstName || ''} />
      <Field type="text" name="lastName" component={renderField} value={formValues?.lastName || ''} />
      <Field type="email" name="email" component={renderField} value={formValues?.email || ''} />
      <Button color="secondary" variant="outlined" type="submit" >送信</Button>
    </form>
  );
}

export default reduxForm({
  form: 'myForm',
})(MyForm)
