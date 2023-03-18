import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form'
import { Button } from '@material-ui/core';

// component
import ModalForm from '../modal/ModalForm';
import renderField from '../common/renderField'

// func
import { validate } from '../../func/validate';
import { modalFlagChange } from '../../modules/modalFlag';

const Changeform = ({ handleSubmit, pristine, submitting, reset }) => {

  const dispatch = useDispatch();

  // Modalフォームを表示・非表示にするためのフラグとその切り替えを行うための関数
  const modalFlag = useSelector(state => state.modalFlag)
  const flagChange = () => {
    modalFlag.flag ? dispatch(modalFlagChange(false)) :dispatch(modalFlagChange(true))
  }


  // 隠しFieldに値を設定
  useEffect(() => {
    dispatch(change('changeform', 'hiddenvalue', '隠しFieldの値だよ〜。'));
  }, [submitting]);

  console.log(submitting)

  // チェックが変更されたら、'checkboxValue'フィールドの値を動的に変更する
  const onCheckboxClick = (e) => {
    const newValue = e.target.checked ? '今日も良い天気ですね！' : '';
    dispatch(change('changeform', 'checkboxValue', newValue));
  };

  // form名を配列として定義
  const fieldNames = ["form1", "form2", "form3"]

  // Modalの入力フォームのみクリア
  const modalValueClear = () => {
    fieldNames.forEach((fieldName) => {
      dispatch(change('changeform', fieldName, ''));
    });
  }

  // fieldなしのデータを送信
  dispatch(change('changeform', 'quoto', '日々反省、日々成長！！！'))

  return (
    <>
      <h3>入力フォーム</h3>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Field name="username" component={renderField} label="名前" />
        <br></br>
        <div>
        <label>チェックボックス（チェックすると設定された値が表示されます。）</label>
        <div>
          <input type="checkbox" onChange={onCheckboxClick} />
          <Field name="checkboxValue" component={renderField} type="text" />
        </div>
        <br></br>
        <Field name="hiddenvalue" component={renderField} type="hidden" />
        </div>
        <br></br>
        <br></br>
        <Button variant="outlined" color="secondary" onClick={flagChange}>
          { modalFlag.flag ?  "Modal入力フォームの非表示" : "Modal入力フォームの表示"}
        </Button>
        <br></br>
        <br></br>
        { modalFlag.flag && <ModalForm />}
        <br></br>
        <Button color="secondary" variant="outlined" type="submit" submitting >送信</Button>
        <Button color="secondary" variant="outlined" disabled={pristine || submitting} onClick={reset}>
          全てのフォームをクリア
        </Button>
        <Button color="secondary" variant="outlined" onClick={modalValueClear}>Modalフォームのみクリア</Button>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'changeform',
  validate
})(Changeform)
