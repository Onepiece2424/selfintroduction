import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { reduxForm, Field, change } from 'redux-form'
import renderField from '../renderField'
import { Button } from '@material-ui/core';
import { validate } from '../../func/validate';
import ModalForm from '../modal/ModalForm';

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
        <Button onClick={flagChange}>Modal入力フォームの表示</Button>
        <br></br>
        { flag && <ModalForm />}
        <br></br>
        <Button color="secondary" variant="contained" type="submit">送信</Button>
        <Button color="secondary" variant="contained" disabled={pristine || submitting} onClick={reset}>
          クリア
        </Button>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'changeform',
  validate
})(Changeform)
