"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const result = await res.json();
    setStatus(result.status);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 mt-6 sm:mt-8">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
          お名前 <span className="text-yellow-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-800/50 text-white transition duration-200"
          placeholder="お名前"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
          メールアドレス <span className="text-yellow-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-800/50 text-white transition duration-200"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
          件名
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-800/50 text-white transition duration-200"
          placeholder="件名"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
          メッセージ <span className="text-yellow-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-800/50 text-white transition duration-200"
          placeholder="お問い合わせ内容を入力してください..."
        ></textarea>
      </div>
      <div className="text-center pt-2 sm:pt-4">
        <button
          type="submit"
          className="bg-yellow-500 text-gray-900 font-bold py-2.5 sm:py-3 px-8 sm:px-10 rounded-lg shadow-md transition duration-300 transform hover:translate-y-[-2px]"
          disabled={status === "sending"}
        >
          {status === "sending" ? "送信中..." : "送信"}
        </button>
        {status === "success" && <p className="text-green-500 mt-2">送信完了しました。</p>}
        {status === "error" && <p className="text-red-500 mt-2">送信に失敗しました。</p>}
      </div>
    </form>
  );
} 