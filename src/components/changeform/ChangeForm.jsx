import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form'
import { Button } from '@material-ui/core';

// component
import FriendModalForm from '../modal/FriendModalForm';
import ModalForm from '../modal/ModalForm';
import renderField from '../common/renderField'
import Text from '../text/Text'

// func
import { validate } from '../../func/validate';
import { friendModalFlagChange } from '../../modules/friendModalFlag';
import { modalTextIndicate } from '../../modules/modalText';
import { modalFlagChange } from '../../modules/modalFlag';


const Changeform = ({ handleSubmit, submitting, reset }) => {

  const formState = useSelector(state => state.form)
  const modalText = useSelector(state => state.modalText)
  const dispatch = useDispatch();

  // Modalフォームを表示・非表示にするためのフラグとその切り替えを行うための関数
  const modalFlag = useSelector(state => state.modalFlag)
  const flagChange = () => {
    modalFlag.flag ? dispatch(modalFlagChange(false)) :dispatch(modalFlagChange(true))

    // 友達データフォームを閉じる
    dispatch(friendModalFlagChange(false))

    // 友達フォームのデータがあれば削除
    formState.changeform && formState.changeform.values && formState.changeform.values.friend_name && dispatch(change('changeform', 'friend_name', ''))
    formState.changeform && formState.changeform.values &&  formState.changeform.values.friend_age && dispatch(change('changeform', 'friend_age', ''))
    formState.changeform && formState.changeform.values && formState.changeform.values.friend_job && dispatch(change('changeform', 'friend_job', ''))
  }

  // ともだちデータ入力フォームを表示・非表示にするためのフラグとその切り替えを行うための関数
  const friendModalFlag = useSelector(state => state.friendModalFlag)
  const friendFlagChange = () => {
    friendModalFlag.flag ? dispatch(friendModalFlagChange(false)) :dispatch(friendModalFlagChange(true))

    // Modalフォームを閉じる
    dispatch(modalFlagChange(false))

    // モーダルフォームのデータがあれば削除
    formState.changeform && formState.changeform.values && formState.changeform.values.age && dispatch(change('changeform', 'age', ''))
    formState.changeform && formState.changeform.values && formState.changeform.values.birthPlace && dispatch(change('changeform', 'birthPlace', ''))
    formState.changeform && formState.changeform.values && formState.changeform.values.placeofMemories && dispatch(change('changeform', 'placeofMemories', ''))
  }


  // 隠しFieldに値を設定
  useEffect(() => {
    dispatch(change('changeform', 'hiddenvalue', '隠しFieldの値だよ〜。'));

    // eslint-disable-next-line
  }, [submitting]);

  // チェックが変更されたら、'commnet'フィールドの値を動的に変更する
  const onCheckboxClick = (e) => {
    const newValue = e.target.checked ? '今日も良い天気ですね！' : '';
    dispatch(change('changeform', 'commnet', newValue));
  };

  // リセットボタン押下時に実行
  const allFormReset = () => {
    // 入力フォームのテキストをアンマウントする
    dispatch(modalTextIndicate(false))
    // データをリセット
    reset()
  }

  // form名を配列として定義
  const fieldNames = ["age", "birthPlace", "placeofMemories"]

  // Modalの入力フォームのみクリア
  const modalValueClear = () => {
    fieldNames.forEach((fieldName) => {
      dispatch(change('changeform', fieldName, ''));
    });
  }

  // fieldなしのデータを送信
  // dispatch(change('changeform', 'quoto', '日々反省、日々成長！！！'))

  return (
    <>
      <h3>入力フォーム</h3>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Field name="username" component={renderField} label="名前" />
        <br></br>
        <div>
        <label>コメント（チェックすると設定された値が表示されます。）</label>
        <div>
          <input type="checkbox" onChange={onCheckboxClick} />
          <Field name="commnet" component={renderField} type="text" />
        </div>
        <br></br>
        <Field name="hiddenvalue" component={renderField} type="hidden" />
        </div>
        <br></br>
        <br></br>
        { modalText.flag && <Text />}
        <br></br>
        <br></br>
        <Button variant="outlined" color="secondary" onClick={flagChange}>
          { modalFlag.flag ?  "Modal入力フォームの非表示" : "Modal入力フォームの表示"}
        </Button>
        <Button variant="outlined" color="secondary" onClick={friendFlagChange}>
          { friendModalFlag.flag ?  "友達データフォームの非表示" : "友達データフォームの表示"}
        </Button>
        <br></br>
        <br></br>
        { modalFlag.flag && <ModalForm />}
        { friendModalFlag.flag && <FriendModalForm />}
        <br></br>
        <Button color="secondary" variant="outlined" type="submit" disabled={submitting} >送信</Button>
        <Button color="secondary" variant="outlined" disabled={submitting} onClick={allFormReset}>
          全てのフォームと表示テキストをクリア
        </Button>
        <Button color="secondary" variant="outlined" onClick={modalValueClear}>Modalフォームと表示テキストのみクリア</Button>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'changeform',
  validate
})(Changeform)
