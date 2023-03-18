export const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = '必須項目です。'
  } else if (values.name.length > 15) {
    errors.name = '15文字以内でなければいけません。'
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
  if (!values.friend_name) {
    errors.friend_name = '必須項目です。'
  }
  if (!values.friend_age) {
    errors.friend_age = '必須項目です。'
  }
  if (!values.friend_job) {
    errors.friend_job = '必須項目です。'
  }
  return errors
}
