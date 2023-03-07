import React from 'react'
import { Field } from 'redux-form'
import renderField from '../renderField'

const ModalForm = () => {
  return (
    <>
      <div>Modalフォームです。</div>
      <Field name="modalform" component={renderField} />
      <br></br>
    </>
  )
}

export default ModalForm
