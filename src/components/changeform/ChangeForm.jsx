import React from 'react'
import { reduxForm, Field } from 'redux-form'
import renderField from '../renderField'
import { Button } from '@material-ui/core';

const Changeform = ({ handleSubmit, pristine, submitting, reset }) => {


  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" component={renderField} label="名前" />
      <Button color="secondary" variant="contained" type="submit">送信</Button>
      <Button color="secondary" variant="contained" disabled={pristine || submitting} onClick={reset}>
        クリア
      </Button>
    </form>
  )
}

export default reduxForm({
  form: 'changeform'
})(Changeform)
