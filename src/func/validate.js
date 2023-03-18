export const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = '必須項目です。'
  } else if (values.username.length > 15) {
    errors.username = '15文字以内でなければいけません。'
  }
  if (!values.commnet) {
    errors.commnet = '必須項目です。'
  }
  if (!values.modalform) {
    errors.modalform = '必須項目です。'
  }
  if (!values.age) {
    errors.age = '必須項目です。'
  }
  if (!values.birthPlace) {
    errors.birthPlace = '必須項目です。'
  }
  if (!values.placeofMemories) {
    errors.placeofMemories = '必須項目です。'
  }
  return errors
}
