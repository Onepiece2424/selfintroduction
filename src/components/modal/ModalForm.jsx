import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../renderField'
import { validate } from '../../func/validate';

const ModalForm = () => {
  return (
    <>
      <div>Modalフォームです。</div>
      <Field name="modalform" component={renderField} />
      <br></br>
    </>
  )
}

// export default ModalForm

export default reduxForm({
  form: 'modalform',
  validate
})(ModalForm)
