import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Field, change } from 'redux-form'
import { Box } from '@material-ui/core'

// component
import renderField from '../common/renderField'

// func
import { modalTextIndicate } from '../../modules/modalText'
import { modalFlagChange } from '../../modules/modalFlag'


const ModalForm = () => {

  const formState = useSelector(state => state.form.changeform.values)
  const dispatch = useDispatch();

  // 登録ボタン押下時に実行
  const formResister = (e) => {
    e.preventDefault()

    // フォームのテキスト表示
    dispatch(modalTextIndicate(true))

    // モーダル入力フォームを閉じる
    dispatch(modalFlagChange(false))

    // 友達フォームのデータがあれば削除
    formState.friend_name && dispatch(change('changeform', 'friend_name', ''))
    formState.friend_age && dispatch(change('changeform', 'friend_age', ''))
    formState.friend_job && dispatch(change('changeform', 'friend_job', ''))
  }

  return (
    <>
      <Box border={1} className="modalContent">
        <br></br>
        <div>自分データのフォームです。</div>
        <br></br>
        <Field name="name" component={renderField} label="名前" />
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
