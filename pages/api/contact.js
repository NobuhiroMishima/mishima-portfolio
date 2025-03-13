import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { name, email, emailConfirmation, message } = req.body;

    // バリデーション
    const errors = {};
    if (!name) {
      errors.name = "名前を入力してください。";
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = "有効なメールアドレスを入力してください。";
    }
    if (!emailConfirmation || email !== emailConfirmation) {
      errors.emailConfirmation = "メールアドレスが一致しません。";
    }
    if (!message) {
      errors.message = "お問い合わせ内容を入力してください。";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    return res.status(200).json({ message: "お問い合わせを受け付けました。" });
  } catch (error) {
    console.error("エラー発生:", error);

    // エラーをログファイルに書き込む
    const logFilePath = path.join(process.cwd(), 'error.log');
    const errorMessage = `[${new Date().toISOString()}] エラー発生: ${error.message}\n`;
    fs.appendFile(logFilePath, errorMessage, (err) => {
      if (err) {
        console.error("ログファイルへの書き込みに失敗しました:", err);
      }
    });

    return res.status(500).json({ error: "サーバー内部でエラーが発生しました。" });
  }
}