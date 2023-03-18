import React, { useState } from 'react'

const LikeButton = () => {

  const [count, setCount] = useState(0)
  return (
    <>
      <div>いいねボタン</div>
      <button className="likeButton" onClick={() => setCount(count + 1)}>♥ {count}</button>
    </>
  )
}

export default LikeButton
