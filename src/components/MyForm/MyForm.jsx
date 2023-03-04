import { Field, reduxForm, formValueSelector  } from "redux-form";
import { FormGroup, Col, ControlLabel, ButtonToolbar, Button, HelpBlock } from "react-bootstrap";
import { useSelector } from 'react-redux'
import renderField from "../renderField";
import validate from "../../func/validate";

const MyForm = ({ handleSubmit, pristine, reset, submitting }) => {

  const selector = formValueSelector('myForm');
  const contactValueSelector = state => selector(state, 'contact');
  const contactValue = useSelector(contactValueSelector);

  // 上記３つを統合したもの
  // const contactValue = useSelector(state => formValueSelector('myForm')(state, 'contact'));

  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" component={renderField} type="text" label="お名前" />
      <br></br>
      <label className="radio-inline">
        <Field name="contact" id="contact" component="input" type="radio" value="email" />メール
      </label>
      <label className="radio-inline">
        <Field name="contact" id="contact" component="input" type="radio" value="phone" /> 電話
      </label>
      <br></br>
      {
        contactValue === 'email' &&
        <Field name="email" component={renderField} type="text" label="メールアドレス" placeholder="example@example.com" />
      }
      {
        contactValue === 'phone' &&
        <Field name="phone" component={renderField} type="text" label="電話番号" placeholder="09011112222" />
      }
      <br></br>
      <button bsStyle={'primary'} type="submit" disabled={pristine || submitting}>登録</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>クリア</button>
    </form>
  );
};

export default reduxForm({
  form: 'myForm',
  validate
})(MyForm);
