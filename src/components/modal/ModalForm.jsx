import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Field } from 'redux-form'
import renderField from '../common/renderField'
import { modalTextIndicate } from '../../modules/modalText'
import { Paper, Box } from '@material-ui/core'

const ModalForm = () => {

  const formState = useSelector(state => state.form.changeform.values)
  const modalText = useSelector(state => state.modalText)
  const dispatch = useDispatch();

  // 登録ボタン押下時にテキスト表示
  const formResister = (e) => {
    e.preventDefault()
    dispatch(modalTextIndicate(true))
  }

  return (
    <>
      {/* { modalText.flag &&
        <Paper elevation={3} className="modalContent">
          <div>Modalテキストです。</div>
          <div>{formState.form1}</div>
          <div>{formState.form2}</div>
          <div>{formState.form3}</div>
        </Paper>
      } */}

      <Box border={1} className="modalContent">
        <br></br>
        <div>Modalフォームです。</div>
        <br></br>
        <Field name="form1" component={renderField} label="form1" />
        <Field name="form2" component={renderField} label="form2" />
        <Field name="form3" component={renderField} label="form3" />
        <br></br>
        <button onClick={(e) => formResister(e)}>登録する</button>
        <br></br>
      </Box>
    </>
  )
}

export default ModalForm;
