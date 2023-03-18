import { useSelector } from 'react-redux'

const Text = () => {

  const formState = useSelector(state => state.form.changeform.values)

  return (
    <>
      テキスト表示
    </>
  )
}

export default Text
