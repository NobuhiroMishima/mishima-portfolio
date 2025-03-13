import React from 'react'

function Error500() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>500 - システムエラー</h1>
      <p>申し訳ありません。システムエラーが発生しました。</p>
      <p>しばらく経ってから再度お試しください。</p>
      <a href="/">トップページへ戻る</a>
    </div>
  );
}

export default Error500