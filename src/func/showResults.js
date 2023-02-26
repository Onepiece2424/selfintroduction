const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {

  // 入力値があるかどうか判定
  function isEmpty(obj) {
    return !Object.keys(obj).length
  }

  if (isEmpty(values)) {
    alert('値がありません。何か入力してください。')
  } else {
    await sleep(500);
    window.alert(`あなたは以下のデータを送信しました。:\n\n${JSON.stringify(values, null, 2)}`);
  }
});
