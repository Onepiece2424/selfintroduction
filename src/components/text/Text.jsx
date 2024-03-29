import { useSelector } from 'react-redux'

const Text = () => {

  const formState = useSelector(state => state.form)

  return (
    <>
      テキスト表示
      <div>{formState.changeform && formState.changeform.values && formState.changeform.values.name}</div>
      <div>{formState.changeform && formState.changeform.values && formState.changeform.values.age}</div>
      <div>{formState.changeform && formState.changeform.values && formState.changeform.values.birthPlace}</div>
      <div>{formState.changeform && formState.changeform.values && formState.changeform.values.placeofMemories}</div>
      <br></br>
      <div>{formState.changeform && formState.changeform.values && formState.changeform.values.friend_name}</div>
      <div>{formState.changeform && formState.changeform.values && formState.changeform.values.friend_age}</div>
      <div>{formState.changeform && formState.changeform.values && formState.changeform.values.friend_job}</div>
    </>
  )
}

export default Text
