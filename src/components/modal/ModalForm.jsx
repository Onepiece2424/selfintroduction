import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Field } from 'redux-form'
import renderField from '../renderField'
import { buttonTextChange } from '../../modules/buttonText'

const ModalForm = () => {

  const buttonText = useSelector(state => state.buttonText)
  const dispatch = useDispatch();

  // ボタンクリック後にテキスト変化
  const buttonClick = () => {
    switch(buttonText.text) {
    case '最初のテキスト':
      dispatch(buttonTextChange('2回目のテキスト内容に変更'))
      break
    case '2回目のテキスト内容に変更':
      dispatch(buttonTextChange('最初のテキスト'))
      break
    default:
      break
    }
  }

  return (
    <>
      <div>Modalフォームです。</div>
      <Field name="modalform" component={renderField} />
      <br></br>
      <button onClick={buttonClick}>{buttonText.text}</button>
      <br></br>
    </>
  )
}

export default ModalForm;
