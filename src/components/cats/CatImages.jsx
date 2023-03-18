import React, { useState, useEffect } from 'react'

const CatImages = () => {

  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // 猫の画像を取得
  const fetchImage = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log(images);
    return images[0];
  };

  // 初回レンダリング時に猫の画像を取得
  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url); // 画像URLの状態を更新する
      setLoading(false); // ローディング状態を更新する
    });
  }, []);

  // ボタンをクリックしたときに画像を読み込む処理
  const handleClick = async () => {
    setLoading(true); // 読込中フラグを立てる
    const newImage = await fetchImage();
    setImageUrl(newImage.url); // 画像URLの状態を更新する
    setLoading(false); // 読込中フラグを倒す
  };

  return (
    <>
      <div>猫の画像</div>
      <div>{loading || <img src={imageUrl} alt="猫の画像です。" width="300px" />}</div>
      <br></br>
      <button onClick={handleClick}>他のにゃんこも見る</button>
    </>
  )
}

export default CatImages
