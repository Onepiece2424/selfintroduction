import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Field } from 'redux-form'
import { Paper, Box } from '@material-ui/core'

// component
import renderField from '../common/renderField'

// func
import { modalTextIndicate } from '../../modules/modalText'
import { modalFlagChange } from '../../modules/modalFlag'


const ModalForm = () => {

  const dispatch = useDispatch();

  // 登録ボタン押下時に実行
  const formResister = (e) => {
    e.preventDefault()

    // フォームのテキスト表示
    dispatch(modalTextIndicate(true))

    // モーダル入力フォームを閉じる
    dispatch(modalFlagChange(false))
  }

  return (
    <>
      {/* { modalText.flag &&
        <Paper elevation={3} className="modalContent">
          <div>Modalテキストです。</div>
          <div>{formState.age}</div>
          <div>{formState.birthPlace}</div>
          <div>{formState.placeofMemories}</div>
        </Paper>
      } */}

      <Box border={1} className="modalContent">
        <br></br>
        <div>Modalフォームです。</div>
        <br></br>
        <Field name="age" component={renderField} label="age" />
        <Field name="birthPlace" component={renderField} label="birthPlace" />
        <Field name="placeofMemories" component={renderField} label="placeofMemories" />
        <br></br>
        <button onClick={(e) => formResister(e)}>登録する</button>
        <br></br>
      </Box>
    </>
  )
}

export default ModalForm;
