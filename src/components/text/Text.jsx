import { useSelector } from 'react-redux'

const Text = () => {

  const formState = useSelector(state => state.form.changeform.values)

  return (
    <>
      {formState.quoto}
      <br></br>
      {formState.username}
    </>
  )
}

export default Text
