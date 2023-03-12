export const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = '必須項目です。'
  } else if (values.username.length > 15) {
    errors.username = '15文字以内でなければいけません。'
  }
  if (!values.checkboxValue) {
    errors.checkboxValue = '必須項目です。'
  }
  if (!values.modalform) {
    errors.modalform = '必須項目です。'
  }
  if (!values.form1) {
    errors.form1 = '必須項目です。'
  }
  if (!values.form2) {
    errors.form2 = '必須項目です。'
  }
  if (!values.form3) {
    errors.form3 = '必須項目です。'
  }
  if (!values.form4) {
    errors.form4 = '必須項目です。'
  }
  return errors
}
