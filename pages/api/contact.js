export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, emailConfirmation, message } = req.body;

    // サーバーサイドバリデーション
    const errors = {};
    if (!name) {
      errors.name = "名前を入力してください。";
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = "有効なメールアドレスを入力してください。";
    }
    if (email !== emailConfirmation) {
      errors.emailConfirmation = "メールアドレスが一致しません。";
    }
    if (!message) {
      errors.message = "お問い合わせ内容を入力してください。";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    // バリデーションが成功した場合
    return res.status(200).json({ message: "バリデーションが成功しました。" });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
