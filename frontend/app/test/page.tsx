'use client';

import { useState } from 'react';
import axios from 'axios';

export default function TestPage() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/tests', { message });
            setResponse(res.data);
            setMessage('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">テストフォーム</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                    placeholder="メッセージを入力してください"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    送信
                </button>
            </form>
            {response && (
                <div className="mt-4">
                    <h2 className="text-xl">サーバーからの応答:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

