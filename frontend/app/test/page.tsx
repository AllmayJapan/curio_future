'use client';

import { useState } from 'react';
import axios from 'axios';

export default function TestPage() {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8000/api/tests/${id}`, { message });
            setResponse(res.data);
            setError('');
        } catch (err: any) {
            setError(err.response?.data?.error || 'An error occurred');
            setResponse(null);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">IDでデータを更新</h1>
            <form onSubmit={handleUpdate} className="space-y-4">
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                    placeholder="IDを入力してください"
                />
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                    placeholder="新しいメッセージを入力してください"
                />
                <button type="submit" className="bg-green-500 text-white px-4 py-2">
                    更新
                </button>
            </form>
            {response && (
                <div className="mt-4">
                    <h2 className="text-xl">更新後のデータ:</h2>
                    <pre>{JSON.stringify(response.data, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div className="mt-4 text-red-500">
                    <h2 className="text-xl">エラー:</h2>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}

