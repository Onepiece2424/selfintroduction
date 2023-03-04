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
  return errors
}
