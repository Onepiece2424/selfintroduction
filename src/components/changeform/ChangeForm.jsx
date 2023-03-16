import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form'
import renderField from '../renderField'
import { Button } from '@material-ui/core';
import { validate } from '../../func/validate';
import ModalForm from '../modal/ModalForm';
import Text from '../text/Text';

const Changeform = ({ handleSubmit, pristine, submitting, reset }) => {

  // Modalフォームを表示・非表示にするためのフラグ
  const [flag, setFlag] = useState(false)
  const flagChange = () => {
    setFlag(prev => !prev)
  }

  const dispatch = useDispatch();

  // 隠しFieldに値を設定
  useEffect(() => {
    dispatch(change('changeform', 'hiddenvalue', '隠しFieldの値だよ〜。'));
  }, [dispatch]);

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
        <Button variant="outlined" color="secondary" onClick={flagChange}>
          { flag ?  "Modal入力フォームの非表示" : "Modal入力フォームの表示"}
        </Button>
        <br></br>
        <br></br>
        { flag && <ModalForm />}
        <br></br>
        <Button color="secondary" variant="outlined" type="submit">送信</Button>
        <Button color="secondary" variant="outlined" disabled={pristine || submitting} onClick={reset}>
          全てのフォームをクリア
        </Button>
        <Button color="secondary" variant="outlined" onClick={modalValueClear}>Modalフォームのみクリア</Button>
      </form>
      <br></br>
      <Text />
    </>
  )
}

export default reduxForm({
  form: 'changeform',
  validate
})(Changeform)
