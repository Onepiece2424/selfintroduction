import { Paper } from '@material-ui/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Field } from 'redux-form'
import renderField from '../renderField'
import { modalTextIndicate } from '../../modules/modalText'
import { Button } from '@material-ui/core'

const ModalForm = () => {

  const formState = useSelector(state => state.form.changeform.values)
  const modalText = useSelector(state => state.modalText)
  const dispatch = useDispatch();

  // 登録ボタン押下時にテキスト表示
  const formResister = () => {
    dispatch(modalTextIndicate(true))
  }

  return (
    <>
      { modalText.flag &&
        <>
          <div>Modalテキストです。</div>
          <div>{formState.form1}</div>
          <div>{formState.form2}</div>
          <div>{formState.form3}</div>
        </>
      }

      <Paper elevation={12} className="modalContent">
        <br></br>
        <div>Modalフォームです。</div>
        <br></br>
        <Field name="form1" component={renderField} label="form1" />
        <Field name="form2" component={renderField} label="form2" />
        <Field name="form3" component={renderField} label="form3" />
        <button onClick={formResister}>登録する</button>
        <br></br>
      </Paper>
    </>
  )
}

export default ModalForm;
