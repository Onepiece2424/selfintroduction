import React from 'react'
import { useSelector } from 'react-redux'
import { Field } from 'redux-form'
import renderField from '../renderField'

const ModalForm = () => {

  const buttonText = useSelector(state => state.buttonText)

  return (
    <>
      <div>Modalフォームです。</div>
      <Field name="modalform" component={renderField} />
      <br></br>
      <button>{buttonText.text}</button>
      <br></br>
    </>
  )
}

export default ModalForm;
