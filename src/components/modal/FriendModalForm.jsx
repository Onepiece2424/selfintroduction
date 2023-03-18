import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Field, change } from 'redux-form'
import { Box } from '@material-ui/core'

// component
import renderField from '../common/renderField'

// func
import { modalTextIndicate } from '../../modules/modalText'
import { friendModalFlagChange } from '../../modules/friendModalFlag'


const FriendModalForm = () => {

  const formState = useSelector(state => state.form.changeform.values)
  const dispatch = useDispatch();

  // 登録ボタン押下時に実行
  const formResister = (e) => {
    e.preventDefault()

    // フォームのテキスト表示
    dispatch(modalTextIndicate(true))

    // モーダル入力フォームを閉じる
    dispatch(friendModalFlagChange(false))

    // モーダルフォームのデータがあれば削除
    formState.age && dispatch(change('changeform', 'age', ''))
    formState.birthPlace && dispatch(change('changeform', 'birthPlace', ''))
    formState.placeofMemories && dispatch(change('changeform', 'placeofMemories', ''))
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
