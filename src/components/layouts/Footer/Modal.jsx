import React from "react";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-5">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-center">送信完了</h2>
        <div className="mb-6">
          <p>お問い合わせありがとうございます。</p>
          <p>3日以内にご返信いたします。今しばらくお待ちください。</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-black text-white font-medium py-2 px-8 rounded shadow-lg hover:bg-opacity-80 duration-300 ease-in-out"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
