import React from 'react'
import Link from 'next/link'
function Error500() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>500 - システムエラー</h1>
      <p>申し訳ありません。システムエラーが発生しました。</p>
      <p>しばらく経ってから再度お試しください。</p>
      <Link href="/">トップページへ戻る</Link>
    </div>
  );
}

export default Error500