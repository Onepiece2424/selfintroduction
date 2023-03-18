import { useSelector } from 'react-redux'

const Text = () => {

  const formState = useSelector(state => state.form.changeform.values) || null

  return (
    <>
      テキスト表示
      <div>{formState.age}</div>
      <div>{formState.birthPlace}</div>
      <div>{formState.placeofMemories}</div>
      <br></br>
      <div>{formState.friend_name}</div>
      <div>{formState.friend_age}</div>
      <div>{formState.friend_job}</div>
    </>
  )
}

export default Text
