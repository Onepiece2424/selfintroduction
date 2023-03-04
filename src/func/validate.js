const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = '必須項目です。'
  }
  if (!values.password) {
    errors.password = '必須項目です。'
  }
  if (!values.contact) {
    errors.contact = '必須項目です。'
  }
  if (!values.email) {
    errors.email = '必須項目です。'
  }
  if (!values.phone) {
    errors.phone = '必須項目です。'
  }

  return errors
}

export default validate
