import React from 'react'
import { useDispatch } from 'react-redux'
import { Field } from 'redux-form'
import { Box } from '@material-ui/core'

// component
import renderField from '../common/renderField'

// func
import { modalTextIndicate } from '../../modules/modalText'
import { friendModalFlagChange } from '../../modules/friendModalFlag'


const FriendModalForm = () => {

  const dispatch = useDispatch();

  // 登録ボタン押下時にテキスト表示
  const formResister = (e) => {
    e.preventDefault()
    dispatch(modalTextIndicate(true))

    // モーダル入力フォームを閉じる
    dispatch(friendModalFlagChange(false))
  }

  return (
    <>
      <Box border={1} className="modalContent">
        <br></br>
        <div>友達データ入力フォームです。</div>
        <br></br>
        <Field name="friend_name" component={renderField} label="友達名" />
        <Field name="friend_age" component={renderField} label="年齢" />
        <Field name="friend_job" component={renderField} label="職業" />
        <br></br>
        <button onClick={(e) => formResister(e)}>登録する</button>
        <br></br>
      </Box>
    </>
  )
}

export default FriendModalForm;
